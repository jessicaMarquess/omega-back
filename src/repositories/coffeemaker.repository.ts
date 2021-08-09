import { Guid } from "guid-typescript";
import CoffeMaker from "../entities/coffemaker.entity";
import IRepository from "./base.interface";

class CoffeeMakerRepository implements IRepository<CoffeMaker>{

    private coffeeMakers : CoffeMaker[] = [ new CoffeMaker('dolce gusto')  ]


    add(entity: CoffeMaker): void {
        throw new Error("Method not implemented.");
    }
    remove(id: Guid): void {
        throw new Error("Method not implemented.");
    }
    getAll(): CoffeMaker[] {
        return this.coffeeMakers;
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

export default CoffeeMakerRepository