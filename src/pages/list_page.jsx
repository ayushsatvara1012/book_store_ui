import { useState } from "react";
import { ChevronLeft, ChevronRight, Edit3, Trash2, BookOpen,Sparkles } from "lucide-react";

function List_page({ 
  allBooks, 
  handleEdit, 
  handleDelete, 
  currentPage, 
  totalPages, 
  onPageChange, 
  isLoading, 
  totalBooksCount,
  isAiMode // <--- New Prop
}) {

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num;
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 h-full lg:overflow-hidden">

      <div className="sticky top-14 z-30 shrink-0 pt-6 pb-4 bg-gray-50/95 backdrop-blur-sm lg:top-0">
        <div className="flex flex-row md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
              <div className={`p-2 rounded-xl shadow-lg transition-colors duration-300 ${isAiMode ? 'bg-purple-600 shadow-purple-200' : 'bg-blue-600 shadow-blue-200'}`}>
                {isAiMode ? <Sparkles className="text-white" size={24} /> : <BookOpen className="text-white" size={24} />}
              </div>
              {isAiMode ? "AI Discovery" : "Library"}
            </h1>
            <p className="mt-2 text-slate-500 font-medium italic">
              {isAiMode 
                ? `${allBooks.length} semantic matches found` 
                : `${formatNumber(totalBooksCount)} books in collection`}
            </p>
          </div>

          {/* CONDITIONAL PAGINATION: Hide when AI Mode is active */}
          {!isAiMode && (
            <div className="flex items-center bg-white p-1 rounded-2xl border border-gray-200 shadow-sm self-start md:self-auto">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-blue-600 hover:shadow-sm transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="px-2 text-sm font-bold text-slate-700">
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
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 pb-10 custom-scrollbar">
        {allBooks.length === 0 && isLoading ? (
          <div className="flex flex-col w-full h-full animate-pulse pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-3xl w-full border border-gray-100"></div>
              ))}
            </div>
          </div>
        ) : allBooks.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50 my-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">
              {isAiMode ? "🧠" : "📭"}
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              {isAiMode ? "AI couldn't find a match" : "The shelves are empty"}
            </h3>
            <p className="text-gray-500 text-sm mt-1">Try a different prompt or keyword.</p>
          </div>
        ) : (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 transition-opacity duration-300 ${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            {allBooks.map((book) => (
              <div
                key={book.id}
                className={`group relative bg-white p-4 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-5 ${isAiMode ? 'hover:border-purple-300 hover:shadow-purple-500/10' : 'hover:border-blue-300 hover:shadow-blue-500/10'}`}
              >
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
                  <div className="flex gap-2">
                    <span className="inline-block text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {book.year}
                    </span>
                    {/* Add a small 'AI' badge to results if in AI mode */}
                    {isAiMode && (
                      <span className="inline-block text-[11px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100">
                        AI Match
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => handleEdit(book)} className="p-2 bg-white shadow-md border border-gray-100 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all transform hover:scale-110">
                      <Edit3 size={16} />
                    </button>
                    <button onClick={() => handleDelete(book.id)} className="p-2 bg-white shadow-md border border-gray-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all transform hover:scale-110">
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