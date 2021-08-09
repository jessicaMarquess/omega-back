import Entity from "./base.entity";

class Person extends Entity {
    public readonly name: string;
    public readonly age: number;

    constructor(name: string, age: number){
        super();
        this.name = name;
        this.age = age;
    }
}

export default Person;