import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBuildConfigComponent } from './add-build-config/add-build-config.component';
import { ListBuildConfigComponent } from './list-build-configs/list-build-config.component';


const routes: Routes = [
    {
        path: 'add-config',
        component: AddBuildConfigComponent,
        data: {
            title: 'Discover',
            headerDisplay: "none"
        }
    },
    {
        path: 'list-configs',
        component: ListBuildConfigComponent,
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
export class BuildRoutingModule { }
