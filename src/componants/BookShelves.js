import Shelf from "./Shelf";

const BookShelves = ({ books, updateShelf }) => {
  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );

  const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const readBooks = books.filter((book) => book.shelf === "read");
  return (
    <div>
      <Shelf
        title="Currently Reading"
        books={currentlyReadingBooks}
        updateShelf={updateShelf}
      />
      <Shelf
        title="Want to Read"
        books={wantToReadBooks}
        updateShelf={updateShelf}
      />
      <Shelf title="Read" books={readBooks} updateShelf={updateShelf} />
    </div>
  );
};

export default BookShelves;
