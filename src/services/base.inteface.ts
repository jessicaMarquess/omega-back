import { Guid } from "guid-typescript";
import Entity from "../entities/base.entity";
import IRepository from "../repositories/base.interface";

interface IService<TEntity extends Entity> {
    repository: IRepository<TEntity>;

    add(entity: TEntity): void;
    remove(id: Guid): void;
    getAll(): TEntity[];
    getById(id: Guid): TEntity;
    update(id: Guid, entity: TEntity): void;
    exists(id: Guid): boolean;

}

export default IService;
