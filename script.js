const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
}

function showBooks () {

}

console.log(myArray);

addBookToLibrary("Hobbit", "Dimitri", 300, true);
addBookToLibrary("mindset", "Dimitri", 200, false);

console.log(myArray);
