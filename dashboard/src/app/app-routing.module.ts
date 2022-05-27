import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './pages/welcome/build/build.component';
import { DiscoverComponent } from './pages/welcome/discover/discover.component';
import { LaunchComponent } from './pages/welcome/launch/launch.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'build',component:BuildComponent},
  {path:'launch',component:LaunchComponent},
  {path:'',component:DiscoverComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
