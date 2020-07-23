import React from "react";

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

      <h2>Add a book to the shelf</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={answer.title}
          onChange={(e) => {
            handleChangeTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={answer.author}
          onChange={(e) => {
            handleChangeAuthor(e.target.value);
          }}
        />
        <input
          type="date"
          name="date"
          value={answer.date}
          onChange={(e) => {
            handleChangeDate(e.target.value);
          }}
        />
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          value={answer.rate}
          onChange={(e) => {
            handleChangeRate(e.target.value);
          }}
        />
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={answer.comment}
          onChange={(e) => {
            handleChangeComment(e.target.value);
          }}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default BookForm;
