import { Component, OnInit } from '@angular/core';
import { CarSegmentConstantService } from '../shared/services/car-segment-constant.service';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { EChartsOption } from 'echarts';
import { SegmentDiscoverService } from "../shared/services/segment-discover.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppsService } from '../shared/services/apps.service';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.component.html',
})

export class DashboardComponent implements OnInit {
    // ThemeColors
    themeColors = this.colorConfig.get().colors;
    blue = this.themeColors.blue; 
    blueLight = this.themeColors.blueLight;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;

    iseChartsLoading: boolean = false;
    isNavOpen: boolean = false;
    carSegmentsData = this.carSegments.get()
    carSegmentSelected: any;
    test3dOptions: any;
    segmentDashboardData: any;
    buildConfigCount: BigInteger;

    constructor(private carSegments : CarSegmentConstantService, private colorConfig:ThemeConstantService, private segmentDiscoverService:SegmentDiscoverService, private appsService:AppsService, private http: HttpClient) {}

    ngOnInit(): void { 
        this.carSegmentSelected = this.carSegmentsData[0]
        this.appsService.getAllBuildConfigs().subscribe((data)=>{
          this.buildConfigCount = data.count
        })

        this.test3dOptions = {
              xAxis3D: {
                type: 'category',
              },
              yAxis3D: {
                type: 'category',
              },
              zAxis3D: {},
              visualMap: {
                max: 1e8,
                dimension: 'Population',
              },
              dataset: {
                dimensions: [
                  'Income',
                  'Life Expectancy',
                  'Population',
                  'Country',
                  { name: 'Year', type: 'ordinal' },
                ],
                source: [
                  [
                  "Income",
                  "Life Expectancy",
                  "Population",
                  "Country",
                  "Year"
                  ],
                  [
                  815,
                  34.05,
                  351014,
                  "Australia",
                  1800
                  ],
                  [
                  1314,
                  39,
                  645526,
                  "Canada",
                  1800
                  ]],
              },
              series: [
                {
                  type: 'bar3D',
                  shading: 'lambert',
                  encode: {
                    x: 'Year',
                    y: 'Country',
                    z: 'Life Expectancy',
                    tooltip: [0, 1, 2, 3, 4],
                  },
                },
              ],
            }
        
        this.segmentDataFetch()

    }

    navToggler() {
        this.isNavOpen = !this.isNavOpen;
    }

    public segmentChange(index){
        this.carSegmentSelected = this.carSegmentsData[index]
        this.segmentDataFetch()
    }

    public segmentDataFetch(){
      this.segmentDiscoverService.getSegmentWiseDasbboardData(this.carSegmentSelected).subscribe((data)=>{
        this.segmentDashboardData = data["results"][0]
        console.log(this.segmentDashboardData)
        this.createSalesGraph()
        this.createSalesPieChart()
        this.makePriceDistributionGraph()
        this.makeProductList()
      })
    }

    // Charts
    revenueChartFormat: string = 'revenueMonth';

    revenueChartData: Array<any> = [{ 
        data: [5337.8, 6464.1, 5716.4, 4496],
        label: 'Series A' 
    }];
    currentrevenueChartLabelsIdx = 1;
    revenueChartLabels:Array<any> = ['2017-01-01', '2017-02-01', '2017-03-01', '2017-04-01'];

    public createSalesGraph(){
      let xAxis = []
      let yAxis1 = []
      for (let key in this.segmentDashboardData.graph_data.sales_time.mean_sales) {
        let value = this.segmentDashboardData.graph_data.sales_time.mean_sales[key];
        xAxis.push(key)
        yAxis1.push(value)
      }
      this.revenueChartData = [{ 
        data: yAxis1,
        label: 'Mean' 
      }];
      this.revenueChartLabels = xAxis
    }

    revenueChartOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{ 
                gridLines: [{
                    display: false,
                }],
                ticks: {
                    display: true,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]  
                },
                ticks: {
                    display: true,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }  
            }],
        }
    };
    revenueChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.blue,
            pointBackgroundColor: this.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.blueLight,
            pointHoverBorderColor: this.blueLight
        }
    ];
    revenueChartType = 'line';
    productsList: Array<any> = [];

    makeProductList(){
      let varient_array = []
      for (let key in this.segmentDashboardData.graph_data.variant_mean_price.avg_price) {
        let value = this.segmentDashboardData.graph_data.variant_mean_price.avg_price[key];
        varient_array.push({
          "make": key,
          "model": key,
          "varient": key,
          "avg_price": value
        })
      }
      
      this.productsList = varient_array
    }
    


    // Pie Chart

    public createSalesPieChart(){
      this.customersChartData = [this.segmentDashboardData.graph_data.sales_contribution.current_segment, this.segmentDashboardData.graph_data.sales_contribution.other_segments];
    }

    customersChartLabels: string[] = ['Selected Segment', 'Other Segments'];
    customersChartData: number[] = [150, 450];
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.cyan, this.purple],
        pointBackgroundColor : [this.cyan, this.purple]
    }];
    customersChartOptions: any = {
        cutoutPercentage: 75,
        maintainAspectRatio: false
    }
    customersChartType = 'doughnut';


    // Sample ECharts
    chartOption: EChartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
          },
        ],
      };
    

    public makePriceDistributionGraph(){
      this.iseChartsLoading = true
      let sourceArray = []
      let categoryArray = []
      for (let key in this.segmentDashboardData.graph_data.variant_price_distribution.price_distribution) {
        sourceArray.push(this.segmentDashboardData.graph_data.variant_price_distribution.price_distribution[key])
        categoryArray.push(key)
      }
      console.log(sourceArray)
      console.log(categoryArray)
      this.priceDistribution = {
        title: [
          {
            text: 'Price Distribution Across Varients',
            left: 'center'
          }
          
        ],
        dataset:  [
          {
            // prettier-ignore
            source: sourceArray
          },
          {
            transform: {
              type: 'boxplot',
              config: { itemNameFormatter: function (params) {
                return categoryArray[params.value];
                } },
            }
          },
           // After this "boxplot transform" two result data generated:
            // result[0]: The boxplot data
            // result[1]: The outlier data
            // By default, when series or other dataset reference this dataset,
            // only result[0] can be visited.
            // If we need to visit result[1], we have to use another dataset
            // as follows:
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1
          }
        ],
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: 'Price (in INR)',
          splitArea: {
            show: true
          }
        },
        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
          },
          {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
          }
        ]
      }
      this.iseChartsLoading = false
    }
    // Price Distribution - BOX PLOT
    priceDistribution: EChartsOption = {
        title: [
          {
            text: 'Price Distribution Across Varients',
            left: 'center'
          }
          
        ],
        dataset: [
          {
            // prettier-ignore
            source: [
              [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
              [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
              [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
              [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
              [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
            ]
          },
          {
            transform: {
              type: 'boxplot',
              config: { itemNameFormatter: function (params) {
                return ["Make 11","Make 12","Make 3","Make 4","Make 5"][params.value];
                } },
            }
          },
           // After this "boxplot transform" two result data generated:
            // result[0]: The boxplot data
            // result[1]: The outlier data
            // By default, when series or other dataset reference this dataset,
            // only result[0] can be visited.
            // If we need to visit result[1], we have to use another dataset
            // as follows:
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1
          }
        ],
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          name: 'Price (in INR)',
          splitArea: {
            show: true
          }
        },
        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
          },
          {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
          }
        ]
      }

    

}
