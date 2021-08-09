import { Guid } from "guid-typescript"
import Employee from "../entities/employee.entity"
import IRepository from "./base.interface"

class EmployeeRepository implements IRepository<Employee> {
    
    public employees: Employee[] = [ new Employee(1000) ]

    getAll(): Employee[] {
        return this.employees
    }

    add(entity: Employee): void {
        this.employees.push(entity)
    }
    remove(id: Guid): void {
        const index = this.employees.findIndex((e) => e.id == id.toString())
        this.employees.splice(index, 1)
    }

    getById(id: Guid): Employee {
        return this.employees.filter(employee => employee.id == id.toString())[0]
    }

    update(id: Guid, entity: Employee): void {
        throw new Error("Method not implemented.")
    }

    exists(id: Guid): boolean{
        return this.employees.some((e) => e.id == id.toString())
    }
    // raiseSalary(percentual: number = 0.1) {
        
    // }
}

export default EmployeeRepository
