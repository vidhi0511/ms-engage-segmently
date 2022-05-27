import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { DiscoverComponent } from './discover/discover.component';
import { LaunchComponent } from './launch/launch.component';

//import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  {path:'build',component:BuildComponent},
  {path:'launch',component:LaunchComponent},
  {path:'',component:DiscoverComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
