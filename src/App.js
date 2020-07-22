import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5050/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const dataBook = { ...newBooks, [e.target.name]: e.target.value };
    setNewBooks(dataBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBooks);
  };

  // MIN 23 - https://drive.google.com/drive/folders/1Imb2D9lTFrkL5Qndcec9YFeyNTjlxrBq

  return (
    <div>
      <h1>My Little Library</h1>
      <h2>My shelves</h2>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.title}, {book.author}
            </li>
          );
        })}
      </ul>

      <h2>Add a book</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="title"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="author"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="date"
          name="date"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="number"
          name="rate"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="comment"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default App;
