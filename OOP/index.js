// const s1 = "Hello";
// console.log(typeof s1)

// const s2 = new String('Hello')
// console.log(s2.String)

// console.log(window)

const book1 = {
    title: 'Book One',
    author: 'ThongVM',
    year: '1993',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title: 'Book Two',
    author: 'PhatVM',
    year: '2000',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// console.log(book2.getSummary())
// console.log(Object.values(book1))
// console.log(Object.keys(book1))

/* ------------------------------------------- */

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

/* With Prototype */
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}  /* edit lai object sau khi da khoi tao */

// Instantiate an Object
const book3 = new Book('Book One', 'ThongVM', 1993);
const book4 = new Book('Book Two', 'PhatVM', 2000);

console.log(book4);
book4.revise('2020')
console.log(book4)