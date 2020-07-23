import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "./conf";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState({});

  const [answer, setAnswer] = useState({
    titre: "",
    author: "",
    date: "",
    rate: "",
    comment: "",
  });

  const handleSubmitRedux = () => {
    console.log(answer);
  };

  const dispatchTitle = (va) =>
    dispatch({
      type: "ANSWER",
      book: "title",
      text: va,
    });
  const dispatchAuthor = (va) =>
    dispatch({
      type: "ANSWER",
      book: "author",
      text: va,
    });

  const dispatchDate = (va) =>
    dispatch({
      type: "ANSWER",
      book: "date",
      text: va,
    });

  const dispatchRate = (va) =>
    dispatch({
      type: "ANSWER",
      book: "rate",
      text: va,
    });

  const dispatchComment = (va) =>
    dispatch({
      type: "ANSWER",
      book: "comment",
      text: va,
    });

  const handleChangeTitle = (value) => {
    console.log(value);
    setAnswer(value);
    dispatchTitle(value);
  };

  const handleChangeAuthor = (value) => {
    console.log(value);
    setAnswer(value);
    dispatchAuthor(value);
  };

  const handleChangeDate = (value) => {
    console.log(value);
    setAnswer(value);
    dispatchDate(value);
  };

  const handleChangeRate = (value) => {
    console.log(value);
    setAnswer(value);
    dispatchRate(value);
  };

  const handleChangeComment = (value) => {
    console.log(value);
    setAnswer(value);
    dispatchComment(value);
  };

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
          e.preventDefault();
          handleSubmitRedux(e);
        }}
      >
        <input
          type="text"
          name="title"
          value={answer.title}
          onChange={(e) => {
            handleChangeTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="author"
          value={answer.author}
          onChange={(e) => {
            handleChangeAuthor(e.target.value);
          }}
        />
        <input
          type="date"
          name="date"
          onChange={(e) => {
            handleChangeDate(e.target.value);
          }}
        />
        <input
          type="number"
          name="rate"
          onChange={(e) => {
            handleChangeRate(e.target.value);
          }}
        />
        <input
          type="text"
          name="comment"
          onChange={(e) => {
            handleChangeComment(e.target.value);
          }}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default App;
