import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "@material-ui/core/Link";
import { useParams } from "react-router-dom";
import { backend } from "../conf";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function OneBookDetails({ handleDelete }) {
  const params = useParams();
  const bookId = params.id;
  const [oneBook, setOneBook] = useState([{}]);

  useEffect(() => {
    axios.get(`${backend}/books/${bookId}`).then((res) => {
      setOneBook(res.data[0]);
    });
  }, [bookId]);
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
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

        {/* <IconButton
          aria-label="delete"
          color="secondary"
          name={oneBook.id}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          <DeleteIcon />
        </IconButton> */}
      </div>
      <div>
        <Link href={"/"}>Back to my library</Link>
      </div>
    </>
  );
}

export default OneBookDetails;
