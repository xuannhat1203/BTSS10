class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    calculate1(): number {
        return Math.PI * this._radius ** 2;
    }

    calculate2(): number {
        return 2 * Math.PI * this._radius;
    }
}
const circle = new Circle(5); 
console.log("Radius:", circle.radius); 
console.log("Perimeter:", circle.calculate2()); 
console.log("Area:", circle.calculate1()); 

circle.radius = 7; 
console.log("New Radius:", circle.radius);
console.log("New Perimeter:", circle.calculate2()); 
console.log("New Area:", circle.calculate2()); 
