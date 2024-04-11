"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printVH() {
        console.log(this.name, this.year, this.company, this.id);
    }
}
let vh3 = new Vehicle("ô tô", 2024, "toyota", 1);
vh3.printVH();
