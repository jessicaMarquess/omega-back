import express from "express";
import BaseController from "./controllers/base.controller";
import Entity from "./entities/base.entity";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: BaseController<Entity>[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeControllers(controllers);
    }

    private initializeControllers(controllers: BaseController<Entity>[]) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
