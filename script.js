

const book1 = {
    id: self.crypto.randomUUID(),
    title: "The Hunger Games", 
    author: "Suzanne Collins", 
    publishedYear: 2002, 
    genre: "Dystopian Fiction",
}

const book2 = {
    id: self.crypto.randomUUID(),
    title: "Pride and Prejudice", 
    author: "Jane Austen", 
    publishedYear: 1978, 
    genre: "Romance",
}

const book3 = {
    id: self.crypto.randomUUID(),
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    publishedYear: 1930, 
    genre: "Southern Gothic",
}

const book4 = {
    id: self.crypto.randomUUID(),
    title: "The Book Thief", 
    author: "Markus Zusak", 
    publishedYear: 2005, 
    genre: "Historical Fiction",
}

const myLibrary = [book1, book2, book3, book4];

function Book(title, author, publishedYear, genre) {
    if(!new.target){
        throw Error("You must use 'new' operator to call the constructor");
    }
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.genre = genre;
}

function addBookToLibrary(title, author, publishedYear, genre) {
    const book = new Book(title, author, publishedYear, genre);
    myLibrary.push(book);
}

function displayAllBooks(){
    myLibrary.forEach((book) =>  {
        const newCard = document.createElement("div");
        newCard.classList.add('card');

        newCard.textContent = `title: ${book.title}
                               author: ${book.author}
                               publishedYear: ${book.publishedYear}
                               genre: ${book.genre}`;
        newCard.style.backgroundColor = '#FFB6C1';
        newCard.style.border = '2px solid #00008B';
        newCard.style.padding = '4px';

        let bookDisplay = document.getElementById('bookDisplay');
        bookDisplay.appendChild(newCard);        
        
    })
}

// displayAllBooks();

