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

function addBookToLibrary() {

}

const testBook = new Book("Hobbit", "Dimitri", 300, true);
console.log(testBook.info());