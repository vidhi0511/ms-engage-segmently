//Importing all the required libraries and modules

import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppsService } from "../../shared/services/apps.service";
import { CarSegmentConstantService } from 'src/app/shared/services/car-segment-constant.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'add-build-config',
    templateUrl: './add-build-config.html'
})
export class AddBuildConfigComponent {
    addNewBuildConfigFormGroup: FormGroup;
    selectSegment: any;
    featuresFormConfigs: any;
    isFormConfigLoaded:boolean = false;
    constructor(private fb: FormBuilder, private appService: AppsService, private carSegmentConstantService: CarSegmentConstantService, private message: NzMessageService) {}

    carSegmentsData = this.carSegmentConstantService.get()

    submitForm(): void {
        let config_data = this.addNewBuildConfigFormGroup.getRawValue()
        let selectSegment = config_data['selectSegment']
        let buildName = config_data['buildName']
        delete config_data['selectSegment']
        delete config_data['buildName']
        this.message.info('Saving Build Configuration. Kindly wait...')
        this.appService.createBuildConfigData(buildName,selectSegment,config_data).subscribe(data => {
            console.log(data)
            this.message.success('Build Configuration Created Successfully!')
        })
    }

    ngOnInit(): void {
        let defaultData = {
            selectSegment: [ null, [ Validators.required ] ],
            buildName: [ null, [ Validators.required ] ],
        };
        this.appService.getfeatureFormBuildData().subscribe(data => {
            let formBuilderDictionary = {}
            this.featuresFormConfigs = data;
            for(let featuresFormConfigKey in this.featuresFormConfigs){
                formBuilderDictionary[featuresFormConfigKey] = [ null, [ Validators.required ] ]
            }
            this.addNewBuildConfigFormGroup = this.fb.group({
                ...defaultData,
                ...formBuilderDictionary
            });
            this.isFormConfigLoaded =true
        });
    }

    public isObject(val): boolean {
        return val.constructor.name === 'Object';
    }
    public isArray(val): boolean {
        return val.constructor.name === 'Array';
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
     //fillRandomData() for filling the random choices in form module by a button click
    public fillRandomData(){
        let random_dict = {}
        for (const [key, value] of Object.entries(this.featuresFormConfigs)) {
            if(this.isArray(value)){
                let value_array = value as Array<any>; // typecasting
                random_dict[key] = value_array[this.randomIntFromInterval(0,(value_array.length-1))]
            }
            if(this.isObject(value)){
                //rounding up the floating point numbers
                random_dict[key] =  Math.round((value['max'] - value['min'])/20 * this.randomIntFromInterval(-10,10) + value['mean'])
            }
        }
        console.log(random_dict)
        this.addNewBuildConfigFormGroup.patchValue(random_dict);
    }

    
    
}
