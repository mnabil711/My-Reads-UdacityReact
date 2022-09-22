import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import Book from "./componants/Book";

const SearchPage = ({ books, updateShelf }) => {
  const [query, setQuery] = useState("");
  const [resultBooks, setResultBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const emptyUrl =
    "http://books.google.com/books/content?id=73kNFV4sDx8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  useEffect(() => {
    if (query === "") {
      setResultBooks([]);
      setNoResults(false);
    } else {
      const result = async () => {
        const res = await BooksAPI.search(query);

        if (res.error) {
          setResultBooks([]);
          setNoResults(true);
        } else {
          res.forEach((book) => {
            book.shelf = "none";
            books.forEach((myBook) => {
              if (myBook.id === book.id) {
                book.shelf = myBook.shelf;
              }
            });
          });
          console.log(res);
          setResultBooks(res);
          setNoResults(false);
        }
      };
      result();
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks.map((book) => (
            <li key={book.id}>
              <Book
                authors={book.authors}
                title={book.title}
                image={
                  book.imageLinks ? book.imageLinks.smallThumbnail : emptyUrl
                }
                id={book.id}
                shelf={book.shelf}
                book={book}
                onMove={updateShelf}
              />
            </li>
          ))}
          {noResults ? "No results found" : ""}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
