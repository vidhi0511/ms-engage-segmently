import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './discover.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
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
export class DashboardRoutingModule { }
