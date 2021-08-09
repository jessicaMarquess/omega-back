import { Guid } from "guid-typescript"
import Car from "../entities/car.entity"
import IRepository from "./base.interface"

class CarRepository implements IRepository<Car>{

    private cars : Car[] =[ new Car('GM','Vectra') ]

    getAll():Car[]{
        return this.cars
    }

    add(entity: Car):void{
        this.cars.push(entity)
    }

    remove(id: Guid):void{
        var index = this.cars.findIndex(car => car.id === id.toString())
        this.cars.splice(index, 1)
    }

    getById(id: Guid): Car {
        throw new Error("Method not implemented.")
    }
    update(id: Guid, entity: Car): void {
        throw new Error("Method not implemented.")
    }
    exists(id: Guid): boolean {
        throw new Error("Method not implemented.")
    }
}

export default CarRepository