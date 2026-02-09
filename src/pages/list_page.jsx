import { useState } from "react";
import { ChevronLeft, ChevronRight, Edit3, Trash2, BookOpen } from "lucide-react";

function List_page({ allBooks, handleEdit, handleDelete, currentPage, totalPages, onPageChange, isLoading, totalBooksCount }) {

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-full max-w-6xl mx-auto px-4 sm:px-6 animate-pulse">
        <div className="h-20 bg-gray-200 rounded-2xl mb-6 w-full"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-2xl w-full"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    // MAIN WRAPPER: Responsive height
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 h-full overflow-hidden">

      {/* 1. HEADER */}
      <div className="shrink-0 pt-0 pb-4 bg-gray-50">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
                <BookOpen className="text-white" size={24} />
              </div>
              Library
            </h1>
            <p className="mt-2 text-slate-500 font-medium">
              {totalBooksCount} books in collection
            </p>
          </div>

          {/* MINIMALIST PAGINATION */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="px-4 text-sm font-bold text-slate-700">
              {currentPage} <span className="text-slate-400 mx-1">/</span> {totalPages}
            </div>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <div className="flex-1 overflow-y-auto pr-1 pb-10 custom-scrollbar">
        {allBooks.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50 my-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">📭</div>
            <h3 className="text-lg font-bold text-gray-800">The shelves are empty</h3>
            <p className="text-gray-500 text-sm mt-1">Try changing your search or add a book.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {allBooks.map((book) => (
              <div
                key={book.id}
                className="group relative bg-white p-4 rounded-[1.5rem] border border-gray-100 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex items-center gap-5"
              >
                {/* Book Card Content */}
                <div className="relative shrink-0 w-20 h-28 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                  <BookImage src={book.image_url} title={book.title} />
                </div>

                <div className="flex-1 min-w-0 py-1">
                  <h3 className="text-lg font-bold text-slate-800 truncate leading-tight mb-1" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="text-slate-500 text-sm truncate font-medium mb-3">
                    {book.author}
                  </p>
                  <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                    {book.year}
                  </span>

                  {/* Actions (Floating) */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => handleEdit(book)} className="p-2 bg-white shadow-md border border-gray-100 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all transform hover:scale-110 active:scale-95">
                      <Edit3 size={16} />
                    </button>
                    <button onClick={() => handleDelete(book.id)} className="p-2 bg-white shadow-md border border-gray-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all transform hover:scale-110 active:scale-95">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function BookImage({ src, title }) {
  const [isError, setIsError] = useState(false);

  if (!src || isError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300 italic text-xs text-center p-2 font-medium">
        No Cover
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      onError={() => setIsError(true)}
    />
  );
}
export default List_page;