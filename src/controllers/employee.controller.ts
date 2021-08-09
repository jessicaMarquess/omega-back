import { Router, Request, Response } from "express"
import { Guid } from "guid-typescript"
import Employee from "../entities/employee.entity"
import EmployeeService from "../services/employee.service"
import BaseController from "./base.controller"

class EmployeeController extends BaseController<Employee> {

    constructor(){
        super('/employee', new EmployeeService())
    }

}

export default EmployeeController
