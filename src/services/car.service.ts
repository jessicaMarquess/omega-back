import { Guid } from "guid-typescript";
import Car from "../entities/car.entity";
import IRepository from "../repositories/base.interface";
import CarRepository from "../repositories/car.repository";
import IService from "./base.inteface";

class CarService implements IService<Car> {
    repository: IRepository<Car> = new CarRepository();

    constructor() {}

    add(entity: Car): void {
        throw new Error("Method not implemented.");
    }
    remove(id: Guid): void {
        throw new Error("Method not implemented.");
    }
    getById(id: Guid): Car {
        throw new Error("Method not implemented.");
    }
    update(id: Guid, entity: Car): void {
        throw new Error("Method not implemented.");
    }
    exists(id: Guid): boolean {
        throw new Error("Method not implemented.");
    }

    getAll(): Car[] {
        return this.repository.getAll();
    }


}

export default CarService;
