import { Guid } from "guid-typescript";
import Person from "../entities/person.entity";
import PersonRepository from "../repositories/person.repository";
import IRepository from "../repositories/base.interface";
import IService from "./base.inteface";

class PersonService implements IService<Person> {
    repository: IRepository<Person> = new PersonRepository;
    
    add(entity: Person): void {
        return this.repository.add(entity);
    }
    remove(id: Guid): void {
        if(!this.repository.exists(id)) throw new Error(`Person of id ${id} does not exist`);
        this.repository.remove(id);
    }
    getAll(): Person[] {
        return this.repository.getAll();
    }
    getById(id: Guid): Person {
        let result = this.repository.getById(id);

        if(result == null) throw new Error(`Person of ${id} does not exists`)

        return result;
    }
    update(id: Guid, entity: Person): void {
        throw new Error("Method not implemented.");
    }
    exists(id: Guid): boolean {
        return this.repository.exists(id);
    }
}

export default PersonService;