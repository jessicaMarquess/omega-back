import { Guid } from "guid-typescript";
import Employee from "../entities/employee.entity";
import IRepository from "../repositories/base.interface";
import EmployeeRepository from "../repositories/employee.repository";
import IService from "./base.inteface";

class EmployeeService implements IService<Employee> {
    repository: IRepository<Employee> = new EmployeeRepository();

    getAll(): Employee[] {
        return this.repository.getAll();
    }

    add(entity: Employee): void {
        this.repository.add(entity);
    }

    remove(id: Guid): void {
        if (!this.repository.exists(id))
            throw new Error(`Employee of id ${id} does not exists`);
        this.repository.remove(id);
    }

    getById(id: Guid): Employee {
        var result = this.repository.getById(id);

        if (result == null)
            throw new Error(`Employee of id ${id} does not exists`);

        return result;
    }

    update(id: Guid, entity: Employee): void {
        throw new Error("Method not implemented.");
    }

    exists(id: Guid): boolean {
        return this.repository.exists(id);
    }

    raiseSalary(percentual: number, employee: Employee) {
        employee.raiseSalary(percentual);
    }

  
}

export default EmployeeService;
