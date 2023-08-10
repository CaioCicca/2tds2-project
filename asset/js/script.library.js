class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.borrow = []
    }
    addBorrow(borrow){
        this.borrow.push(borrow);
    }

    showBorrewedBooks(){
        this.borrow.forEach((book, index) => {
            console.log(`${this.name} pegou emprestado ${book.title}`)
        });
    }
}

class Library {
    constructor() {
        this.people = []
        this.avalible = []
    }

    addBook(book) {
        this.avalible.push(book);
        console.log(`O livro ${book.title} foi adicionado na biblioteca`);
    }
    addPeople(people) {
        this.people.push(people)
        console.log(`A(o) ${people.name}`)
    }
}

const book1 = new Book('O mundo de Sofia', 'Jostain Gaarden', 568);
const book2 = new Book('Crepusculo', 'Bob', 10);
const book3 = new Book('Abracadabra', 'George', 128);
const book4 = new Book('É assim que acaba', 'Collen Hoover', 305);
const book5 = new Book('O Peregrino', 'John Bunyan', 176);
const person1 = new People('Maria Rita', 16)
const person2 = new People('Alice', 35)
const person3 = new People('Jão', 22)

const department = new Library()

person1.addBorrow(book1)
person1.addBorrow(book2)
person2.addBorrow(book3)
person3.addBorrow(book5)
department.addBook(book1);
department.addBook(book2);
department.addBook(book3);
department.addBook(book4);
department.addBook(book5);
department.addPeople(person1);
department.addPeople(person2);
department.addPeople(person3);

person1.showBorrewedBooks()
person2.showBorrewedBooks()
person3.showBorrewedBooks()
console.log(department)
