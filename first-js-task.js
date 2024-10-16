const books = [
    { title: "War and Peace", author: "Leo Tolstoy", isAvailable: true },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", isAvailable: false },
    { title: "The Master and Margarita", author: "Mikhail Bulgakov", isAvailable: true },
    { title: "The Idiot", author: "Fyodor Dostoevsky", isAvailable: false }
  ];

//part 1
  function getBooksByAuthor(books, author) {

    let booksByAuthor = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].author === author) {
            booksByAuthor.push(books[i].title);
        }
    }
    
    return booksByAuthor;
}

//part 2
function countAvailableBooks(books) {
    let count = 0;
  
    for (let i = 0; i < books.length; i++) {
      if (books[i].isAvailable) {
        count++;
      }
    }
  
    return count;
  }
  
//part 3
function lendBook(books, title) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            if (books[i].isAvailable) {
                books[i].isAvailable = false;
                return "The book \"" + title + "\" has been successfully lent! (isAvailable: " + books[i].isAvailable + ")";
            } else {
                return "The book \"" + title + "\" is not available!";
            }
        }
    }
    return "The book \"" + title + "\" does not exist in the library.";
  }

//1
console.log(getBooksByAuthor(books, "Fyodor Dostoevsky"));
//2
console.log("Number of available books: " + countAvailableBooks(books));
//3
console.log(lendBook(books, "War and Peace")); 