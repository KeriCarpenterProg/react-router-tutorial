import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BookList } from "./pages/Booklist";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { Happy } from "./pages/Happy";
import { AddingMyName } from "./pages/AddingMyName";
import { PropsPractice } from "./pages/PropsPractice";
import { LiveStream } from "./pages/LiveStream";
import { BrowserHistory } from "./pages/BrowserHistory";
import { Nav } from "./pages/Nav";
function App() {
  return (
    <>
      <div>
        <div className="container mt-4">
          <Nav />
          <Routes>
            <Route path="/" element={<LiveStream />} />
            <Route path="/browserhistory" element={<BrowserHistory />} />
            <Route path="/books" element={<Book />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/books/new" element={<NewBook />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/name" element={<AddingMyName />} />
            <Route path="/name/:name" element={<AddingMyName />} />
            <Route path="*" element={<LiveStream />} />
          </Routes>
        </div>

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
      </div>
    </>
  );
}

export default App;
