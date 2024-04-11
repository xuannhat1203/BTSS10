class Student{
    id:number
    age:number
    email:string
    constructor(id:number,age:number,email:string){
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printStd():void{
        console.log(this.id,this.age,this.email);
    }
}
let arr = [];
let std1 = new Student(1,19,"xuân nhất");
let std2 = new Student(2,19,"xuân nhất");
arr.push(std1);
arr.push(std2);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
std1.printStd();
std2.printStd();

