import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home_page.jsx";
import ListPage from "./pages/list_page.jsx";
import Navbar from "./pages/navbar.jsx";
import SearchBar from "./pages/search_bar";

function App() {
  const [books, setBooks] = useState([]); // for fetching the books
  const [newbook, setNewBook] = useState({ title: '', author: '', year: '' });
  const [notification, setNotification] = useState(null);

  // Get the books from the backend
  const fetchBook = async () => {
    const response = await fetch("http://127.0.0.1:8000/books");
    const data = await response.json();
    setBooks(data);
  };

  // Post the book / create book in the backend
  const handleCreateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": newbook.title,
          "author": newbook.author,
          "year": parseInt(newbook.year)
        })
      });
      if (response.ok) {
        const createdBook = await response.json();
        setBooks((prevBooks) => [...prevBooks, createdBook])

        setNewBook({ title: '', author: '', year: '' })
        setNotification("Book Added Successfully! 🎉");

        // Auto-hide after 3 seconds
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      }
      else {
        alert('Failed to create a book!! Try again')
      }
    }
    catch (error) {
      console.error('Error connectiong to the server', error)
    }

  }
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="flex flex-col mx-auto">
        <Navbar />
        <SearchBar/>
        {/* Notification UI */}
        {notification && (
          <div className="fixed top-20 right-5 z-50 animate-in fade-in slide-in-from-right-10 duration-300">
            <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-b-4 border-green-800">
              <div className="bg-white text-green-600 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Success!</p>
                <p className="text-sm opacity-90 text-white">{notification}</p>
              </div>
            </div>
          </div>
        )}
        {/* Main content */}
        <div className="m-2 max-h-[calc(100vh-5rem)] gap-4 flex flex-col items-center justify-center sm:flex-row">
          <HomePage newbook={newbook}
            setNewBook={setNewBook}
            handleCreateBook={handleCreateBook} />
          <ListPage allBooks={books} />
        </div>
      </div>
    </>
  );
}

export default App;
