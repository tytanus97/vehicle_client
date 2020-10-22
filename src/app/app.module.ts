import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwnerService} from './services/owner.service';
import { VehicleService } from './services/vehicle.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const services = [OwnerService,VehicleService];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [services,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
