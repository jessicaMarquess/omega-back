import { Guid } from "guid-typescript";
import Car from "../entities/car.entity";
import IRepository from "./base.interface";

class CarRepository implements IRepository<Car> {
    public cars: Car[] = [new Car("GM", "Vectra")];

    getAll(): Car[] {
        return this.cars;
    }

    add(entity: Car): void {
        this.cars.push(entity);
    }

    remove(id: Guid): void {
        var index = this.cars.findIndex((car) => car.id === id.toString());
        this.cars.splice(index, 1);
    }

    getById(id: Guid): Car {
        return this.cars.filter(car => car.id == id.toString())[0];
    }
    update(id: Guid, entity: Car): void {
        const i = this.cars.findIndex(
            car => car.id == id.toString()
        );
        this.cars[i] = entity;
    }
    exists(id: Guid): boolean {
        return this.cars.some((e) => e.id == id.toString());
    }
   
}

export default CarRepository;
