class Department{
    readonly id: number
    private name:string
    private employee: string[]
    constructor(id:number,name:string,employee:string[]){
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    descibe():void{
        console.log(this.id,this.name,this.employee);
    }
}
let dp = new Department(1,"xuân nhất",["nhất xuân","nhất xuân","nhất xuân","nhất xuân"]);
dp.descibe();