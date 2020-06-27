function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

/* With Prototype */
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

/* Magazine Constructor */
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

/* Inherit Prototype */
Magazine.prototype = Object.create(Book.prototype)

/* Use Magazine Constructor */
Magazine.prototype.constructor = Magazine; // Use to Magezine tach ra thanh constructor rieng, ko con chung voi BOOK

const book1 = new Book('Happy', 'SSN', 1978);
const mag1 = new Magazine('Mag One', 'ThongVM', '2018', 'Jan');
mag1.getSummary(); mag1.getAge(); // da ke thua of book, nen su dung thoai mai
console.log(mag1) // Check, Show constructor of Book --> Sau khi co Line code 27, constructor of Magazine

