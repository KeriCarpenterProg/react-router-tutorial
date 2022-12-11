import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/Booklist";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { Happy } from "./pages/Happy";
import { AddingMyName } from "./pages/AddingMyName";
import { PropsPractice } from "./pages/PropsPractice";

function App() {
  return (
    <>
      <div>
        <PropsPractice />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/booklist">Book List</Link>
            </li>
            <li>
              <Link to="/name">Add your name in the url</Link>
            </li>
            <li>
              <Link to="/happy">Happy</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/happy" element={<Happy />} />
          <Route path="/name" element={<AddingMyName />} />
          <Route path="/name/:name" element={<AddingMyName />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
