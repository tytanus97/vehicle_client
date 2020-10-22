import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { AddOwnerComponent } from './components/owner/add-owner/add-owner.component';
import { OwnerDetailsComponent } from './components/owner/owner-details/owner-details.component';
import { OwnerComponent } from './components/owner/owner.component';
import { RocketComponent } from './components/rocket/rocket.component';

const routes: Routes = [
  {
    path: 'owners', children: [{
      path: 'all', component: OwnerComponent
    },
    {
      path: 'ownerDetails', component: OwnerDetailsComponent
    },
    {
      path: 'addOwner', component: AddOwnerComponent
    }]
  },
  {
    path: 'cars', children: [
      {
        path: 'all', component: CarComponent
      }
    ]
  },
  {
    path: 'rockets',children: [
      {
        path:'all',component:RocketComponent
      }
    ]
  }, {
    path: '', redirectTo: 'owners/all', pathMatch: 'full'
  },
  {
    path: "**", redirectTo: 'owners/all'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
