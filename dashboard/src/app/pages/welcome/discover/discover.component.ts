import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-gl';

interface Person {
  key: string;
  name: string;
  age: number;
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor() { }
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
     
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      
    }
  ];
  ngOnInit(): void {
    //line chart    
    type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

option && myChart.setOption(option);

var chartDom1 = document.getElementById('main1')!;
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
option1 && myChart1.setOption(option1);

var ROOT_PATH = 'https://echarts.apache.org/examples';

var chartDom2 = document.getElementById('main2')!;
var myChart2 = echarts.init(chartDom2);
var option2;

$.get(
  ROOT_PATH + 'sample.json',
  function (data) {
    var symbolSize = 2.5;
    option2 = {
      grid3D: {},
      xAxis3D: {
        type: 'category'
      },
      yAxis3D: {},
      zAxis3D: {},
      dataset: {
        dimensions: [
          'name',
          'value1',
          'value2',
          'value3',
          { name: 'Year', type: 'ordinal' }
        ],
        source: data
      },
      series: [
        {
          type: 'scatter3D',
          symbolSize: symbolSize,
          encode: {
            x: 'value1',
            y: 'value2',
            z: 'value3',
            tooltip: [0, 1, 2, 3, 4]
          }
        }
      ]
    };
    myChart2.setOption(option2);
  }
);

option2 && myChart2.setOption(option2);

  }


  radioValue = "year";
  
}
