"use strict";
class Book2 {
    constructor(author2, title2) {
        this.author2 = author2;
        this.title2 = title2;
    }
}
class Library2 {
    constructor() {
        this.books2 = [];
    }
    addBook(book) {
        this.books2.push(book);
    }
    printLibrary() {
        for (let item of this.books2) {
            console.log(item);
        }
    }
}
let book1 = new Book2("xuan nhat", "nhat xuan");
let book2 = new Book2("xuan nhat2", "nhat xuan2");
let book3 = new Book2("xuan nhat3", "nhat xuan3");
let book4 = new Book2("xuan nhat4", "nhat xuan4");
let book5 = new Book2("xuan nhat5", "nhat xuan5");
let library = new Library2();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printLibrary();
