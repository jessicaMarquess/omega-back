import { Guid } from "guid-typescript";
import Entity from "../entities/base.entity";

interface IRepository<TEntity extends Entity> {
    add(entity: TEntity): void;
    remove(id: Guid): void;
    getAll(): TEntity[];
    getById(id: Guid): TEntity;
    update(id: Guid, entity: TEntity): void;
    exists(id: Guid): boolean;
}

export default IRepository;
