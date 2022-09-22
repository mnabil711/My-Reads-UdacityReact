import Book from "./Book";
const Shelf = ({ title, books, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book
                authors={book.authors}
                title={book.title}
                image={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
                book={book}
                onMove={updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
