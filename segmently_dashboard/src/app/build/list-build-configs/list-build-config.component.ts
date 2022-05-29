import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { AppsService } from 'src/app/shared/services/apps.service';
import { CarSegmentConstantService } from 'src/app/shared/services/car-segment-constant.service';

@Component({
    selector: 'list-build-config',
    templateUrl: './list-build-config.html'
})
export class ListBuildConfigComponent {
    buildConfigSelected: any;
    isNavOpen: boolean = false;
    carSegmentsData = this.carSegments.get()

    // List of all saved build configurations
    buildConfigsList = [
    ]
    constructor( private appsService:AppsService, private carSegments : CarSegmentConstantService) {
            
    }

    ngOnInit(): void { 
        
        this.appsService.getAllBuildConfigs().subscribe((data)=>{
            this.buildConfigsList = data.results
            this.buildConfigSelected = this.buildConfigsList[0]
            console.log(this.buildConfigSelected)
          })
        
    }

    public buildConfigChange(index){
        this.buildConfigSelected = this.buildConfigsList[index]
    }

}
