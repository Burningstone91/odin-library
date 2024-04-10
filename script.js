let library = [];
const bookGrid = document.querySelector(".book-grid");
const newBookBtn = document.querySelector(".newBookBtn");
const form = document.querySelector("form");
const addBookDialog = document.querySelector(".bookDialog");
const confirmBtn = document.querySelector("#confirmBtn");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  showBooks();
}

function removeBookFromLibrary(title) {
  library = library.filter((book) => book.title != title);
  showBooks();
}

function toggleReadStatus(title) {
  const book = library.find(book => book.title === title);
  book.read = !book.read;
  showBooks();
}

function showBooks () {
  resetBookGrid();

  library.forEach(book => {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const buttonDiv = document.createElement("div");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    readBtn.onclick = toggleRead;
    removeBtn.onclick = removeBook;

    title.textContent = book.title;
    author.textContent = "by " + book.author;
    pages.textContent = "Pages: " + book.pages;
    read.textContent = book.read ? "Currently Reading" : "Finished";
    readBtn.textContent = book.read ? "Not Read" : "Read";
    removeBtn.textContent = "Remove";

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(buttonDiv);
    buttonDiv.appendChild(readBtn);
    buttonDiv.appendChild(removeBtn);

    bookGrid.appendChild(card);
  });
}

function resetBookGrid () {
  bookGrid.innerHTML = "";
}

function isInLibrary (bookTitle) {
  return library.some((book) => book.title === bookTitle);
}

const removeBook = (e) => {
  const book = e.target.parentNode.parentNode.firstChild.innerText;
  removeBookFromLibrary(book);
}

const toggleRead = (e) => {
  const book = e.target.parentNode.parentNode.firstChild.innerText;
  toggleReadStatus(book);
}

newBookBtn.addEventListener("click", () => {
  addBookDialog.showModal();
})

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  
  if (isInLibrary(title.value) === true) {
    alert("Book is already in the Library!");
    return;
  }

  addBookToLibrary(
    title.value,
    author.value,
    pages.value,
    read.checked
  )
  
  form.reset();
  addBookDialog.close();
});


addBookToLibrary("Hobbit", "Dimitri", 300, true);
addBookToLibrary("mindset", "Dimitri", 200, false);