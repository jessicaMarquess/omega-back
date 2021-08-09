import { Guid } from "guid-typescript";
import CoffeMaker from "../entities/coffemaker.entity";
import IRepository from "../repositories/base.interface";
import CoffeeMakerRepository from "../repositories/coffeemaker.repository";
import IService from "./base.inteface";

class CoffeeMakerService implements IService<CoffeMaker> {
    repository: IRepository<CoffeMaker> = new CoffeeMakerRepository();

    add(entity: CoffeMaker): void {
        throw new Error("Method not implemented.");
    }
    remove(id: Guid): void {
        throw new Error("Method not implemented.");
    }
    getAll(): CoffeMaker[] {
        return this.repository.getAll();
    }
    getById(id: Guid): CoffeMaker {
        throw new Error("Method not implemented.");
    }
    update(id: Guid, entity: CoffeMaker): void {
        throw new Error("Method not implemented.");
    }
    exists(id: Guid): boolean {
        throw new Error("Method not implemented.");
    }

}

export default CoffeeMakerService;
