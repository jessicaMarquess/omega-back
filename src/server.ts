import App from "./app"
import CarController from "./controllers/car.controller"
import CoffeeMakerController from "./controllers/coffeemaker.controller"
import EmployeeController from "./controllers/employee.controller"
import PersonController from "./controllers/person.controller"

const controllers = [
    new EmployeeController(),
    new CarController(),
    new CoffeeMakerController(),
    new PersonController(),
]

const app = new App(controllers, 3000)

app.listen()
