class vihicle {
    name:string
    year:number
    company:string
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printItem():void{
        console.log(this.name,this.company,this.year);
    }
}
let vh1 = new vihicle("xe máy",2024,"yamaha");
let vh2 = new vihicle("ô tô",2020,"BMW");
vh1.printItem()
vh2.printItem();