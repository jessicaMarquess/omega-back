import { Guid } from "guid-typescript";
import CoffeMaker from "../entities/coffemaker.entity";
import IRepository from "./base.interface";

class CoffeeMakerRepository implements IRepository<CoffeMaker> {
    public coffeeMakers: CoffeMaker[] = [new CoffeMaker("dolce gusto")];

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
        const i = this.coffeeMakers.findIndex(
            (coffeeMaker) => coffeeMaker.id == id.toString()
        );
        this.coffeeMakers[i] = entity;
    }
    exists(id: Guid): boolean {
        return this.coffeeMakers.some((e) => e.id == id.toString());
    }
}

export default CoffeeMakerRepository;
