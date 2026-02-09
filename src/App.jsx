import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home_page.jsx";
import ListPage from "./pages/list_page.jsx";
import Navbar from "./pages/components/navbar.jsx";
import Notification from "./pages/components/notification.jsx";

function App() {
  const [books, setBooks] = useState([]); // for fetching the books
  const [newbook, setNewBook] = useState({ title: '', author: '', year: '', image_url: '' });
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success');
  const [editID, setEditID] = useState(null);

  // New States
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Get the books from the backend
  const fetchBook = async () => {
    setIsLoading(true);
    try {
      // Simulating a small delay to show loading state if API is too fast
      // await new Promise(resolve => setTimeout(resolve, 800)); 
      const response = await fetch("http://127.0.0.1:8000/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
      showNotification("Failed to fetch books. Is the backend running?", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (message, type = 'success') => {
    setNotification(message);
    setNotificationType(type);
  }

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
          "year": parseInt(newbook.year),
          "image_url": newbook.image_url
        })
      });
      if (response.ok) {
        const createdBook = await response.json();
        setBooks((prevBooks) => [...prevBooks, createdBook]);

        setNewBook({ title: '', author: '', year: '', image_url: '' });
        showNotification("Book Added Successfully! 🎉");
      }
      else {
        showNotification('Failed to create a book!! Try again', 'error');
      }
    }
    catch (error) {
      console.error('Error connecting to the server', error);
      showNotification('Error connecting to the server', 'error');
    }
  }

  // Edit book by id / Handle book
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/books/${editID}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            "title": newbook.title,
            "author": newbook.author,
            "year": parseInt(newbook.year),
            "image_url": newbook.image_url
          })
        });
      if (response.ok) {
        const updatedBook = await response.json();
        setBooks((prevBooks) => prevBooks.map((book) => (book.id === editID ? updatedBook : book)));

        setNewBook({ title: '', author: '', year: '', image_url: '' });
        setEditID(null);
        showNotification("Book Updated Successfully! 🎉");
      }
      else {
        showNotification('Failed to update book!! Try again', 'error');
      }
    }
    catch (error) {
      console.error('Error connecting to the server !!');
      showNotification('Error connecting to the server !!', 'error');
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      const response = await fetch(`http://127.0.0.1:8000/books/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setBooks(books.filter(book => book.id !== id));
        showNotification("Book Deleted Successfully", "success");

        // Adjust current page if empty
        const remainingBooks = books.length - 1;
        const totalPages = Math.ceil(remainingBooks / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) {
          setCurrentPage(totalPages);
        }
      } else {
        showNotification("Failed to delete book", "error");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      showNotification("Error deleting book", "error");
    }
  }

  const handleEdit = (book) => {
    setEditID(book.id);
    setNewBook({ title: book.title, author: book.author, year: book.year, image_url: book.image_url || '' });
    // Scroll to top on mobile to see the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleCancelEdit = () => {
    setEditID(null);
    setNewBook({ title: '', author: '', year: '', image_url: '' });
  }

  useEffect(() => {
    fetchBook();
  }, []);

  // Filter and Pagination Logic
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage));
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  }

  return (
    <>
      <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden bg-gray-50">
        <Navbar />

        <Notification
          message={notification}
          type={notificationType}
          onClose={() => setNotification(null)}
        />

        {/* Main content */}
        <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 gap-6 flex flex-col lg:flex-row lg:overflow-hidden">
          <HomePage
            newbook={newbook}
            setNewBook={setNewBook}
            handleCreateBook={editID ? handleUpdateBook : handleCreateBook}
            editID={editID}
            handleCancelEdit={handleCancelEdit}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <ListPage
            allBooks={currentBooks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
            totalBooksCount={filteredBooks.length}
          />
        </div>
      </div>
    </>
  );
}

export default App;
