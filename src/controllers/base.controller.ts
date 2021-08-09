import { Router, Request, Response } from "express";
import { Guid } from "guid-typescript";
import Entity from "../entities/base.entity";
import IService from "../services/base.inteface";

abstract class BaseController<TEntity extends Entity> {
    public router: Router = Router();

    protected service: IService<TEntity>;

    private readonly path: string;

    constructor(path: string, service: IService<TEntity>) {
        this.path = path;
        this.service = service;
        this.initialize();
    }

    initialize(): void {
        //get:
        this.router.get(this.path, this.getAll);
        this.router.get(`${this.path}`);
        this.router.get(`${this.path}/:id`, this.getById);
        //delete:
        this.router.delete(`${this.path}/:id`, this.remove);
        //post:
        this.router.post(`${this.path}`, this.add);
        this.router.post(`${this.path}/raiseSalary/:id/:percentual`);
    }

    getAll = (req: Request, res: Response) => {
        const result = this.service.getAll();
        return res.json(result);
    };

    getById = (req: Request, res: Response) => {
        const id = Guid.parse(req.params.id);
        let message: string = "";

        try {
            const result = this.service.getById(id);
            return res.json(result);
        } catch (error) {
            res.status(404);
            message = error.message;
            console.error(error);
        } finally {
            return res.json({ message });
        }
    };

    remove = (req: Request, res: Response) => {
        const id = Guid.parse(req.params.id);
        let message: string = "";

        try {
            this.service.remove(id);
            message = "Removed succesfully";
        } catch (error) {
            res.status(404);
            message = error.message;
            console.error(error);
        } finally {
            return res.json({ message });
        }
    };

    add = (req: Request, res: Response) => {
        const args = req.body;
        this.service.addNewEntity(req.body);

        const newEntity = this.service.addNewEntity(args);
        this.service.add(newEntity);

        return res.json({ message: "Oi", element: newEntity });
    };
}

export default BaseController;
