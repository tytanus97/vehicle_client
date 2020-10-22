import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwnerService} from './services/owner.service';
import { VehicleService } from './services/vehicle.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OwnerComponent } from './components/owner/owner.component';
import { CarComponent } from './components/car/car.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOwnerComponent } from './components/owner/add-owner/add-owner.component';
import { OwnerDetailsComponent } from './components/owner/owner-details/owner-details.component';

export const services = [OwnerService,VehicleService];

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    CarComponent,
    RocketComponent,
    AddOwnerComponent,
    OwnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [services,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
