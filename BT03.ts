class Employee{
    name:string
    company:string
    phone:string
    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor():void{
        console.log(this.name,this.company,this.phone);
    }
}
let ep1 = new Employee("xuân nhất", "PTIT","0399482205");
ep1.printInfor();