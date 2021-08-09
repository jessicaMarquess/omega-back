import { Guid } from "guid-typescript";

abstract class Entity {
    public readonly id: string;
    public readonly createdAt: Date;

    private active: boolean;
    private updatedAt: Date;

    constructor() {
        this.id = Guid.create().toString();
        this.active = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    update() {
        this.updatedAt = new Date();
    }

    setActive(active: boolean) {
        this.active = active;
        this.update();
    }

    equals(id: Guid): boolean {
        return this.id === id.toString();
    }

    remove(id: Guid): void {
        this.remove(id);
    }
}

export default Entity;
