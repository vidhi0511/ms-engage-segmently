import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
    selector: 'list-build-config',
    templateUrl: './list-build-config.html'
})
export class ListBuildConfigComponent {
    buildConfigSelected: any;
    isNavOpen: boolean = false;

    // List of all saved build configurations
    buildConfigsList = [
        {
            "name": "Alpha Base Varient BX",
            "created_on": "test",
            "features": [],
            "svg": "vehicles:coupe"
        },
        {
            "name": "Alpha Base Varient BZ",
            "created_on": "test",
            "features": [],
            "svg": "vehicles:coupe"
        }
    ]
    constructor( private _iconService: NzIconService) {
            
    }

    ngOnInit(): void { 
        this.buildConfigSelected = this.buildConfigsList[0]
    }

    public buildConfigChange(index){
        this.buildConfigSelected = this.buildConfigsList[index]
    }

}
