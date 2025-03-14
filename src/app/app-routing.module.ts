import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{
  path:'login',
  component:LoginComponent,
},

{
  path:'',
  redirectTo:'dashboard',
  pathMatch:'full'
},

{
  path:'dashboard',
 loadChildren:()=>
 import('./Modules/dashboard/dashboard.module').then(
  (m)=> m.DashboardModule
 ),
 canActivate:[AuthGuard]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
