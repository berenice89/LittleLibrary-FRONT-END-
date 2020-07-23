import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../conf";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import BookForm from "./BookForm";
import OneBookDetails from "./OneBookDetails";

function BooksData() {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [answer, setAnswer] = useState({
    titre: "",
    author: "",
    date: "",
    rate: "",
    comment: "",
  });

  useEffect(() => {
    axios.get(`${backend}/books`).then((res) => {
      setBooks(res.data);
    });
  }, []);

  const submitedData = useSelector((state) => state.book);

  const handleSubmit = () => {
    console.log(submitedData);
    axios
      .post(`${backend}/books`, submitedData)
      .then(
        axios.get(`${backend}/books`).then((res) => {
          setBooks(res.data);
        })
      )
      .catch((err) => {
        console.log("Erreur:", err);
      });
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

  const handleDelete = (e) => {
    const id = e.target.name;
    axios
      .delete(`${backend}/books/${id}`)

      .then(
        axios.get(`${backend}/books`).then((res) => {
          setBooks(res.data);
        })
      )
      .then(alert("Book removed from my shelf"))

      .catch((err) => {
        console.log("Erreur:", err);
      });
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <BookForm
            books={books}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            answer={answer}
            handleChangeTitle={handleChangeTitle}
            handleChangeAuthor={handleChangeAuthor}
            handleChangeDate={handleChangeDate}
            handleChangeRate={handleChangeRate}
            handleChangeComment={handleChangeComment}
          />
        </Route>
        <Route path="/book/:id">
          <OneBookDetails handleDelete={handleDelete} />
        </Route>
      </Switch>
    </div>
  );
}

export default BooksData;
