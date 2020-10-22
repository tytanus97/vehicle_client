import { Owner } from './Owner';
import { Vehicle } from './Vehicle';

export class Car extends Vehicle{
    constructor(vehicleId: number,modelName: string,brandName: string,price: number,
        productionYear: number,public numberOfDoors: number,
        public engineType: string, public engineCapacity: number, public horsePower: number) {
            super(vehicleId,modelName,brandName,price,productionYear); 
            
    }
}