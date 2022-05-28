import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
    selector: 'add-build-config',
    templateUrl: './add-build-config.html'
})
export class AddBuildConfigComponent {
    constructor( private _iconService: NzIconService) {
        
      }
}
