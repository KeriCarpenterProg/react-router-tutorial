import { Link } from "react-router-dom";
export function BookList() {
  let games = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const a = games.map((game) => (
    <>
      <br></br>
      <Link to={`/books/${game}`}>Book {game}</Link>
    </>
  ));
  return (
    <>
      <h1>Book List</h1>
      <Link to="/books/1">Book 1</Link>
      <br></br>
      <Link to="/books/2">Book 2</Link>
      <br></br>
      <Link to="/books/new">This is the new Book!</Link>
      <br></br>
      <Link to="/name">Name</Link>
      <br></br>
      {a}
    </>
  );
}
