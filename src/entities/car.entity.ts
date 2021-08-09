import Entity from "./base.entity";

class Car extends Entity {
    public readonly brand: string;
    public readonly model: string;
    private ensurance: boolean = false;

    constructor(brand: string, model: string) {
        super();
        this.brand = brand;
        this.model = model;
    }

    makeEnsurance() {
        this.ensurance = true;
    }
}

export default Car;
