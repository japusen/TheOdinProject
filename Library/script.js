let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function readButton(book) {
    let read = document.createElement('button');
    read.classList.add('read');
    read.textContent = book.read ? 'Read' : 'Not Read';
    read.addEventListener('click', _ => {
        book.read = !book.read;
        read.textContent = book.read ? 'Read' : 'Not Read';
    });

    return read;
}

function removeButton(card, book) {
    let container = document.querySelector('.container');

    let removeBook = document.createElement('button');
    removeBook.classList.add('remove');
    removeBook.textContent = 'Remove';
    removeBook.addEventListener('click', _ => {
        myLibrary = myLibrary.filter(b => b !== book );
        container.removeChild(card);
    });
    
    return removeBook;
}

function createBookCard(book) {
    let card = document.createElement('div')
    card.classList.add('card');
    
    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = book.title;
    
    let author = document.createElement('h3');
    author.classList.add('author');
    author.textContent = book.author;

    let pages = document.createElement('h3');
    pages.classList.add('pages');
    pages.textContent = `${book.pages} pages`;

    let read = readButton(book);

    let removeBook = removeButton(card, book);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBook);

    return card;
}

function displayBooks() {
    let container = document.querySelector('.container');
    myLibrary.forEach(book => {
        let bookCard = createBookCard(book);
        container.appendChild(bookCard);
    });
}

let dialog = document.querySelector('dialog');
let addButton = document.querySelector('.addBook');
let dialogClose = document.querySelector('.dialogClose')

addButton.addEventListener('click', _ => {    
    dialog.show();
});

dialogClose.addEventListener("click", _ => {
    dialog.close();
});



myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));
myLibrary.push(new Book('Dune', 'Frank Herbert', 896, false));
displayBooks();