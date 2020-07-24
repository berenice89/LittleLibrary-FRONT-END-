import React from "react";
import OneBook from "./OneBook";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
  },
  margin: {
    margin: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function BookForm({
  books,
  handleDelete,
  handleSubmit,
  answer,
  handleChangeTitle,
  handleChangeAuthor,
  handleChangeDate,
  handleChangeRate,
  handleChangeComment,
}) {
  const classes = useStyles();
  return (
    <>
      <h1>My Little Library</h1>
      <div className="bookForm">
        <div className="addBook">
          <h2>Add a book to the shelf</h2>

          <form
            className={classes.root}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextField
              id="standard-basic"
              label="Title"
              type="text"
              name="title"
              placeholder="Title"
              value={answer.title}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleChangeTitle(e.target.value);
              }}
            />

            <br />
            <TextField
              id="standard-basic"
              label="Author"
              type="text"
              name="author"
              placeholder="Author"
              value={answer.author}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleChangeAuthor(e.target.value);
              }}
            />
            <br />
            <TextField
              id="date"
              label="Date"
              type="date"
              value={answer.date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleChangeDate(e.target.value);
              }}
            />
            <br />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              name="rate"
              placeholder="Rate"
              value={answer.rate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleChangeRate(e.target.value);
              }}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Comment"
              type="text"
              name="comment"
              placeholder="Comment"
              value={answer.comment}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                handleChangeComment(e.target.value);
              }}
            />
            <br />
            <Button
              size="large"
              className={classes.margin}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="shelf">
          <h2>My shelf</h2>
          <ul>
            {books.map((book) => {
              return (
                <li key={book.id}>
                  <OneBook book={book} handleDelete={handleDelete} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BookForm;
