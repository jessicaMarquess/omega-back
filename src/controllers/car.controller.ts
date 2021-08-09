import Car from "../entities/car.entity";
import CarService from "../services/car.service";
import BaseController from "./base.controller";

class CarController extends BaseController<Car> {
    constructor() {
        super("/car", new CarService());
    }
}

export default CarController;
