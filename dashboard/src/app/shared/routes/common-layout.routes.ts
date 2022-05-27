import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'discover',
        loadChildren: () => import('../../discover/discover.module').then(m => m.DashboardModule),
    } 
];