import Person from "../entities/person.entity";
import PersonService from "../services/person.service";
import BaseController from "./base.controller";

class PersonController extends BaseController<Person> {
    constructor() {
        super('/person', new PersonService());
    }
};

export default PersonController;