import { Vehicle } from './Vehicle';
export class Owner {
    constructor(public ownerId: number,public firstName: string,
         public lastName: string,public vehicles: Array<Vehicle>) {
    }

    
}