"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    calculate1() {
        return this._width * this._height;
    }
    calculate2() {
        return 2 * (this._width + this._height);
    }
}
const rectangle = new Rectangle(4, 6);
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);
console.log("Perimeter:", rectangle.calculate2());
console.log("Area:", rectangle.calculate1());
rectangle.width = 8;
rectangle.height = 10;
console.log("New Width:", rectangle.width);
console.log("New Height:", rectangle.height);
console.log("New Perimeter:", rectangle.calculate2());
console.log("New Area:", rectangle.calculate1());
