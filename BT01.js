"use strict";
class vihicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printItem() {
        console.log(this.name, this.company, this.year);
    }
}
let vh1 = new vihicle("xe máy", 2024, "yamaha");
let vh2 = new vihicle("ô tô", 2020, "BMW");
vh1.printItem();
vh2.printItem();
