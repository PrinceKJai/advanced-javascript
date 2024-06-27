// Ebook Exercise
// 1. Create a class named Book with a constructor that initializes a title, author, 
// and year properties. The title and author should be strings and the year should be a number

// 2. Create a subclass named Ebook that extends Book.

// 3. The Ebook class should have an additional property fileSize which 
// is a number and a method download() that returns a string with the title of the ebook and 
// its fileSize.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Ebook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    
    download() {
        return `${this.title} has size ${this.fileSize}`
    }
}

const ebook1 = new Ebook("love", "test", 2021);
console.log(ebook1.download());