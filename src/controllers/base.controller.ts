import { Router, Request, Response } from "express"
import { Guid } from "guid-typescript"
import Entity from "../entities/base.entity"
import IService from "../services/base.inteface"

abstract class BaseController<TEntity extends Entity>{

    public router : Router = Router()

    protected service : IService<TEntity>

    private readonly path : string

    constructor (path: string, service: IService<TEntity>){
        this.path = path
        this.service = service
        this.initialize()
    }

    initialize():void{
        this.router.get(this.path, this.getAll)
    }

    getAll = (req: Request, res: Response) => {
        const result = this.service.getAll()
        return res.json(result)
    }
    remove = (req: Request, res: Response) => {
        const id = Guid.parse(req.params.id)
        let message: string = ""
        try {
            this.service.remove(id)
            message = "Removed succesfully"
        } catch (error) {
            res.status(404)
            message = error.message
            console.error(error)
        } finally {
            return res.json({ message })
        }
    }

}

export default BaseController