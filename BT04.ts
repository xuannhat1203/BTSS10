class Vehicle{
    public name: string
    protected year:number
    private company:string
    readonly id: number
    constructor(name:string,year:number,company:string,id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printVH():void{
        console.log(this.name,this.year,this.company,this.id);
    }
}
let vh3 = new Vehicle("ô tô",2024,"toyota",1);
vh3.printVH();

