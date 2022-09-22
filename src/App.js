import "./App.css";
import { useState, useEffect } from "react";

import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const updateShelf = (book, newShelf) => {
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = newShelf;
        return book;
      }
      return b;
    });

    setBooks(newBooks);
    BooksAPI.update(book, newShelf);
  };

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await BooksAPI.getAll();
        setBooks(res);
      } catch (error) {
        alert("Erorr: Server dosen't response!");
      }
    };
    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} updateShelf={updateShelf} />}
      />
      <Route
        exact
        path="/search"
        element={<SearchPage books={books} updateShelf={updateShelf} />}
      />
    </Routes>
  );
}

export default App;
