import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLaunchConfigComponent } from './add-launch-config/add-launch-config.component';
import { ListLaunchConfigComponent } from './list-launch-configs/list-launch-config.component';


const routes: Routes = [
    {
        path: 'add-config',
        component: AddLaunchConfigComponent,
        data: {
            title: 'Discover',
            headerDisplay: "none"
        }
    },
    {
        path: 'list-configs',
        component: ListLaunchConfigComponent,
        data: {
            title: 'Discover',
            headerDisplay: "none"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LaunchRoutingModule { }
