"use strict";
class Book {
    constructor(quantity) {
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    addBook() {
        this.quantity++;
    }
    addBooks(quantity) {
        this.quantity += quantity;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        let check = false;
        for (let item of this.books) {
            if (item === book) {
                item.addBook();
                check = true;
                break;
            }
        }
        if (!check) {
            this.books.push(book);
        }
    }
    printLibrary() {
        for (let item of this.books) {
            console.log(item.getQuantity());
        }
    }
}
let book6 = new Book(1);
let book7 = new Book(1);
let Library3 = new Library();
Library3.addBook(book6);
Library3.addBook(book7);
Library3.printLibrary();
