import { useCallback, useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home_page.jsx";
import ListPage from "./pages/list_page.jsx";
import Navbar from "./pages/components/navbar.jsx";
import Notification from "./pages/components/notification.jsx";

function App() {
  const [books, setBooks] = useState([]); // for fetching the books
  const [newbook, setNewBook] = useState({ title: '', author: '', year: '', image_url: '', isbn: '' });
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success');
  const [editID, setEditID] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBooksCount, setTotalBooksCount] = useState(0);

  // New States
 const [isAiMode, setIsAiMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Get the books from the backend
  // 1. Update the useCallback to be more stable
const fetchBook = useCallback(async (page = 1, searchQuery = '') => {
  setIsLoading(true);
  try {
    let url = `http://127.0.0.1:8000/books?page=${page}&limit=${itemsPerPage}`;
    if (searchQuery.trim()) {
      url += `&search=${encodeURIComponent(searchQuery)}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.books || []);
    setTotalBooksCount(data.total || 0);
    setTotalPages(Math.ceil(data.total / itemsPerPage) || 1);
  } catch (error) {
    console.error("Fetch error:", error);
    showNotification("Failed to fetch books.", "error");
  } finally {
    setIsLoading(false);
  }
}, [itemsPerPage]);

// 2. Separate Semantic Search into its own stable function
const handleSemanticSearch = useCallback(async (query) => {
  if (!query.trim()) return;
  
  setIsLoading(true);
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/books/search/semantic/?query=${encodeURIComponent(query)}&limit=20`
    );
    const data = await response.json();
    setBooks(data || []);
    setTotalPages(1); // AI results are usually a single relevant set
    setTotalBooksCount(data?.length || 0);
  } catch (error) {
    console.error("AI Search error:", error);
    showNotification("AI Search failed.", "error");
  } finally {
    setIsLoading(false);
  }
}, []);

// 3. Single Source of Truth for Data Fetching
useEffect(() => {
  if (isAiMode) {
    if (searchTerm.trim().length > 2) {
      const delayDebounceFn = setTimeout(() => {
        handleSemanticSearch(searchTerm);
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    } else {
        // If AI mode is on but search is empty, maybe show empty or default?
        setBooks([]); 
    }
  } else {
    // Standard Mode: Fetch based on page
    const delayDebounceFn = setTimeout(() => {
      fetchBook(currentPage, searchTerm);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }
}, [searchTerm, isAiMode, currentPage, fetchBook, handleSemanticSearch]);

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
          "image_url": newbook.image_url,
          "isbn": newbook.isbn
        })
      });
      if (response.ok) {
        const createdBook = await response.json();
        setBooks((prevBooks) => [...prevBooks, createdBook]);

        setNewBook({ title: '', author: '', year: '', image_url: '', isbn: '' });
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
            "image_url": newbook.image_url,
            "isbn": newbook.isbn
          })
        });
      if (response.ok) {
        const updatedBook = await response.json();
        setBooks((prevBooks) => prevBooks.map((book) => (book.id === editID ? updatedBook : book)));

        setNewBook({ title: '', author: '', year: '', image_url: '', isbn: '' });
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
      showNotification("Book Deleted Successfully", "success");
      // IMPORTANT: Re-fetch the current page from the server 
      // This ensures the next book in the database "slides up" into the 20th slot
      fetchBook(currentPage, searchTerm);
    } else {
      showNotification("Failed to delete book", "error");
    }
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

  const handleEdit = (book) => {
    setEditID(book.id);
    setNewBook({ title: book.title, author: book.author, year: book.year, image_url: book.image_url || '', isbn: book.isbn });
    // Scroll to top on mobile to see the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleCancelEdit = () => {
    setEditID(null);
    setNewBook({ title: '', author: '', year: '', image_url: '', isbn: '' });
  }

useEffect(() => {
  // Reset to page 1 whenever the user types a new search
  setCurrentPage(1);
}, [searchTerm]);




  // Filter and Pagination Logic

  // const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage));
  // const indexOfLastBook = currentPage * itemsPerPage;
  // const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  // const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const currentBooks = books;

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
            isAiMode={isAiMode}
            setIsAiMode={setIsAiMode}
          />

          <ListPage
            allBooks={currentBooks}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
            totalBooksCount={totalBooksCount}
            isAiMode={isAiMode}
          />
        </div>
      </div>
    </>
  );
}

export default App;
