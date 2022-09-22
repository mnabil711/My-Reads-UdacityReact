import { Link } from "react-router-dom";
import BookShelves from "./componants/BookShelves";

const MainPage = ({ books, updateShelf }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelves books={books} updateShelf={updateShelf} />
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
