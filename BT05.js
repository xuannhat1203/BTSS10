"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    descibe() {
        console.log(this.id, this.name, this.employee);
    }
}
let dp = new Department(1, "xuân nhất", ["nhất xuân", "nhất xuân", "nhất xuân", "nhất xuân"]);
dp.descibe();
