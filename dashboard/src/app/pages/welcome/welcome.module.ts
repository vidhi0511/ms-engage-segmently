import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { LaunchComponent } from './launch/launch.component';
import { BuildComponent } from './build/build.component';
import { DiscoverComponent } from './discover/discover.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import{NgxEchartsModule} from 'ngx-echarts'


@NgModule({
  imports: [WelcomeRoutingModule,
    NzRadioModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    NzDividerModule,
    NzButtonModule,
    NgxEchartsModule
            
  ],
  declarations: [WelcomeComponent, LaunchComponent, BuildComponent, DiscoverComponent,  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { 
    
}
