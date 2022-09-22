import ShelfSelect from "./ShelfSelect";
const Book = ({ authors, title, image, shelf, onMove, book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <ShelfSelect currentShelf={shelf} onMove={onMove} book={book} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join("-") : "NA"}
      </div>
    </div>
  );
};
export default Book;
