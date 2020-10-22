import { Owner } from './Owner';
import { Vehicle } from './Vehicle';

export class Rocket extends Vehicle {
    constructor(vehicleId: number,modelName: string,brandName: string,price: number,
        productionYear: number,public crewCapacity: number,
        public maxThrust: number, public maxPayload: number) {
        super(vehicleId,modelName,brandName,price,productionYear); 
    }
}