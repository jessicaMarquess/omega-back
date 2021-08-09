import Entity from "./base.entity";

class Employee extends Entity {
    private salary: number;

    constructor(salary: number) {
        super();
        this.salary = salary;
    }

    raiseSalary(percentual: number = 0.1) {
        this.salary += this.salary * percentual;
    }
}

export default Employee;
