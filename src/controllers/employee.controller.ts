import { Request, Response } from "express";
import Employee from "../entities/employee.entity";
import EmployeeService from "../services/employee.service";
import BaseController from "./base.controller";

class EmployeeController extends BaseController<Employee> {
    service = new EmployeeService();

    constructor() {
        super("/employee", new EmployeeService());
        this.router.post(`/employee/raise-salary`, this.raiseSalary);
    }

    raiseSalary = (req: Request, res: Response) => {
        let message: string = "";
        const { id, percentual } = req.body;
        try {
            this.service.raiseSalary(id, percentual);
            message = "All right! Your salary was updated successfully!";
        } catch (error) {
            res.status(404);
            message = error.message;
            console.error(error);
        } finally {
            return res.json({ message });
        }
    };
}

export default EmployeeController;
