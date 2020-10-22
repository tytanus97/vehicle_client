import { Component } from '@angular/core';
import { Car } from './models/Car';
import { Owner } from './models/Owner';
import { Vehicle } from './models/Vehicle';
import { EngineType } from './utils/EngineTypeEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicleClient';
}
