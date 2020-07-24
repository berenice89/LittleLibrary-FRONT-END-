import React from "react";
import Link from "@material-ui/core/Link";

function OneBook({ book, handleDelete }) {
  return (
    <div>
      <li key={book.id}>
        {book.title}, {book.author} -{" "}
        <Link href={`/book/${book.id}`}>More Details</Link>
      </li>
    </div>
  );
}

export default OneBook;
