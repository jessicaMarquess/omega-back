import { Guid } from "guid-typescript";
import Person from "../entities/person.entity";
import IRepository from "./base.interface";

class PersonRepository implements IRepository<Person> {
    public persons: Person[] = [new Person("Jessica", 23)];

    add(entity: Person): void {
        this.persons.push(entity);
    }

    remove(id: Guid): void {
        const index = this.persons.findIndex((e) => {
            this.persons.splice(index, 1);
        });
    }

    getAll(): Person[] {
        return this.persons;
    }

    getById(id: Guid): Person {
        return this.persons.filter(person => person.id == id.toString())[0];
    }

    update(id: Guid, entity: Person): void {
        const i = this.persons.findIndex(
            person => person.id == id.toString()
        );
        this.persons[i] = entity;
    }

    exists(id: Guid): boolean {
        return this.persons.some(e => e.id == id.toString());
    }

}

export default PersonRepository;
