import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { AddOwnerComponent } from './components/owner/add-owner/add-owner.component';
import { OwnerComponent } from './components/owner/owner.component';
import { RocketComponent } from './components/rocket/rocket.component';

const routes: Routes = [
{
  path:'owners',component:OwnerComponent
},
{
  path:'addOwner',component:AddOwnerComponent
},
{
  path:'cars',component:CarComponent
},
{
  path:'rockets',component:RocketComponent
},{
  path:'',redirectTo:'owners',pathMatch:'full'
},
{
  path:"**",redirectTo:'owners'
}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
