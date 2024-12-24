class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity == this.books.length) {
      throw Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      paid: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    for (const book of this.books) {
      if (book.bookName == bookName) {
        if (book.paid) {
          throw Error(`${bookName} has already been paid.`);
        } else {
          book.paid = true;
          return `${bookName} has been successfully paid.`;
        }
      }
    }
    throw new Error(`${bookName} is not in the collection.`);
  }

  removeBook(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      const el = this.books[i];
      if (el.bookName == bookName) {
        if (!el.paid) {
          throw Error(
            `${bookName} need to be paid before removing from the collection.`
          );
        } else {
          this.books.splice(i, 1);
          return `${bookName} remove from the collection.`;
        }
      }
    }
    throw new Error(`The book, you're looking for, is not found.`);
  }

  getStatistics(bookAuthor) {
    if (!bookAuthor) {
      let result = `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.`;
      let sorted = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      for (const book of sorted) {
        result += `\n${book.bookName} == ${book.bookAuthor} - ${
          book.paid ? "Has Paid" : "Not Paid"
        }.`;
      }
      return result;
    }
    let result = [];
    for (const book of this.books) {
      if (book.bookAuthor == bookAuthor) {
        result.push(
          `${book.bookName} == ${book.bookAuthor} - ${
            book.paid ? "Has Paid" : "Not Paid"
          }.`
        );
      }
      return result.join("\n");
    }
    throw Error(`${bookAuthor} is not in the collection.`);
  }
}

const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
