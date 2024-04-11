"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor() {
        console.log(this.name, this.company, this.phone);
    }
}
let ep1 = new Employee("xuân nhất", "PTIT", "0399482205");
ep1.printInfor();
