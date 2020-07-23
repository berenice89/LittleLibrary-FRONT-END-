import React from "react";
import OneBook from "./OneBook";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  return (
    <div>
      <Typography variant="h1" m={2}>
        My Little Library
      </Typography>

      <Typography variant="h2" m={2}>
        Add a book to the shelf
      </Typography>

      <form
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <Typography variant="h2">My shelf</Typography>
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
  );
}

export default BookForm;
