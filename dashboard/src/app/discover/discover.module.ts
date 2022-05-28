import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./discover-routing.module";
import { DashboardComponent } from './discover.component';

/** Import any ng-zorro components as the module required except icon module */

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { Bar3dDatasetComponent } from './components/bar3d.component';


/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
    NzAvatarModule,
    NzDropDownModule,
    NzTabsModule,
    NzMenuModule,
    NzCardModule,
    NzTableModule,
    NzBadgeModule,
    
]

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        NgChartjsModule,
        NgxEchartsModule.forRoot({
            /**
             * This will import all modules from echarts.
             * If you only need custom modules,
             * please refer to [Custom Build] section.
             */
            echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
          }),
        ...antdModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        Bar3dDatasetComponent
    ]
})
export class DashboardModule { }
