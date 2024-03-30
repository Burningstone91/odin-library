const library = [];
const bookGrid = document.querySelector(".book-grid");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  resetBookGrid();
  showBooks();
}

function showBooks () {
  library.forEach(book => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read ? "Yes" : "No";

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    bookGrid.appendChild(card);
  });
}

function resetBookGrid () {
  bookGrid.innerHTML = "";
}

addBookToLibrary("Hobbit", "Dimitri", 300, true);
addBookToLibrary("mindset", "Dimitri", 200, false);

console.log(library);
