import React from "react";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

function OneBook({ book, handleDelete }) {
  return (
    <>
      <li key={book.id}>
        {book.title}, {book.author} -{" "}
        <Link href={`/book/${book.id}`}>More Details</Link>
        <Button
          variant="contained"
          color="secondary"
          name={book.id}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          X
        </Button>
      </li>
    </>
  );
}

export default OneBook;
