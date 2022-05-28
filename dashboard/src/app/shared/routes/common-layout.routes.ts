import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'build',
        loadChildren: () => import('../../build/build.module').then(m => m.BuildModule),
    },
    {
        path: 'discover',
        loadChildren: () => import('../../discover/discover.module').then(m => m.DashboardModule),
    }
    
];