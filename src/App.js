import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "./conf";

function App() {
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState({});

  useEffect(() => {
    axios.get(`${backend}/books`).then((res) => {
      setBooks(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const dataBook = { ...newBooks, [e.target.name]: e.target.value };
    setNewBooks(dataBook);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(newBooks);
    axios
      .post(`${backend}/books`, newBooks)
      .then()
      .catch((err) => {
        console.log("Erreur:", err);
      });
  };

  const handleDelete = (e) => {
    const id = e.target.name;
    axios
      .delete(`${backend}/books/${id}`)
      .then(
        axios.get(`${backend}/books`).then((res) => {
          setBooks(res.data);
        })
      )
      .catch((err) => {
        console.log("Erreur:", err);
      });
  };

  return (
    <div>
      <h1>My Little Library</h1>
      <h2>My shelf</h2>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              {book.title}, {book.author}
              <button
                name={book.id}
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                X
              </button>
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
