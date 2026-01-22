import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home_page.jsx";
import ListPage from "./pages/list_page.jsx";
import Navbar from "./pages/navbar.jsx";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await fetch("http://127.0.0.1:8000/books");
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="m-4 max-h-[calc(100vh-5rem)] gap-2 flex flex-col items-center justify-center sm:flex-row">
        <HomePage />
        <ListPage allBooks={books} />
        {/* <div>
          <h2>Book List</h2>
          {books.map((book) => (
            <p key={book.id}>{book.title}</p>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default App;
