import CoffeMaker from "../entities/coffemaker.entity";
import CoffeeMakerService from "../services/coffeemaker.service";
import BaseController from "./base.controller";

class CoffeeMakerController extends BaseController<CoffeMaker>{

    constructor(){
        super('/coffeemaker', new CoffeeMakerService())
    }

}

export default CoffeeMakerController