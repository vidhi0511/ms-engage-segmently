import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { DemoGlRoutingModule } from './demo-gl-routing.module';
import { GlBar3dComponent } from './gl-bar3d/gl-bar3d.component';
import { Bar3dDatasetComponent } from './gl-bar3d/bar3d-dataset/bar3d-dataset.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [GlBar3dComponent, Bar3dDatasetComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    DemoGlRoutingModule,
    NzIconModule,
    NzMenuModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzButtonModule,
    NzMessageModule,
    NzTabsModule,
    NzCardModule,
    NzDividerModule,
    NzPageHeaderModule
  ]
})
export class DemoGlModule { }
