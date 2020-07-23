import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { backend } from "../conf";

function OneBookDetails({ handleDelete }) {
  const params = useParams();
  const bookId = params.id;
  const [oneBook, setOneBook] = useState([{}]);

  useEffect(() => {
    axios.get(`${backend}/books/${bookId}`).then((res) => {
      setOneBook(res.data[0]);
    });
  }, [bookId]);

  return (
    <>
      <div>
        <p>Title : {oneBook.title}</p>
        <p>Author : {oneBook.author}</p>
        <p>Rate : {oneBook.rate}</p>
        <p>Book read : {oneBook.date}</p>
        <p>My comment: {oneBook.comment}</p>
        <button
          name={oneBook.id}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          X
        </button>
      </div>
      <div>
        <Link to={"/"}>Back to my library</Link>
      </div>
    </>
  );
}

export default OneBookDetails;
