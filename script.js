const myArray = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
      return this.title + 
        " by " + 
        this.author + 
        ", " + 
        this.pages + 
        " pages, " + 
        (read == true ? "read" : "not read yet")
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myArray.push(newBook);
}

console.log(myArray);

addBookToLibrary("Hobbit", "Dimitri", 300, true);
addBookToLibrary("mindset", "Dimitri", 200, false);

console.log(myArray);
