import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
function List_page({ allBooks, handleEdit }) {
  return (
    <>
      <div className="flex-1 w-full sm:max-w-3xl mt-4 flex flex-col gap-4 rounded-2xl sm:self-start max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar px-4 sm:px-0">

        {/* Heading */}
        <div className="sticky top-0 z-20 bg-gray-50 flex flex-col sm:flex-row items-center justify-between">
          <div className=" bg-gray-50 py-4 font-black text-gray-700 text-2xl ">
            📘Your Library <span className="text-sm font-bold bg-gray-200 text-gray-600 px-3 py-1 rounded-full">{allBooks.length}</span>
          </div>
          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-4 py-6">
            {/* Left Arrow Button */}
            <button
              className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-20"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>

            {/* The Page Display: < 1 ... 200 > */}
            <div className="flex items-center gap-3 font-sans text-lg font-medium text-gray-700">
              <span className="text-blue-600 cursor-pointer hover:underline">1</span>
              <span className="text-gray-400">...</span>
              <span className="hover:text-blue-600 cursor-pointer hover:underline">13500</span>
            </div>

            {/* Right Arrow Button */}
            <button
              className="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-20"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {allBooks.length === 0 ? (
          /* Show this when EMPTY */
          <div className=" flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
            <span className="text-6xl mb-4">📭</span>
            <h3 className="text-xl font-bold text-gray-500">No Books Found</h3>
            <p className="text-gray-400">
              Your library is currently empty. Add a book to get started!
            </p>
          </div>
        ) : (
          <>
            <div className="w-full gap-1 grid grid-cols-1 lg:grid-cols-2">
              {allBooks.map((book) => (
                <div
                  className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
                  key={book.id}
                >
                  <div className="flex flex-row items-center gap-4 flex-1 min-w-0">

                    <div className="shrink-0 w-16 h-16 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      {/* Use the new component here */}
                      <BookImage src={book.image_url} title={book.title} />
                    </div>


                    <div className="flex flex-col min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 truncate antialiased">
                        {book.title}
                      </h3>
                      <p className="text-gray-500 italic text-sm truncate antialiased">
                        {book.author}
                      </p>
                      <p className="mt-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md w-fit antialiased">
                        {book.year}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button onClick={() => handleEdit(book)} className="flex items-center justify-center text-green-700 w-10 h-10 bg-green-50 border border-green-200 rounded-xl hover:bg-green-600 hover:text-white transition-colors active:scale-95">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button>
                    <button className="flex items-center justify-center text-red-700 w-10 h-10 bg-red-50 border border-red-200 rounded-xl hover:bg-red-600 hover:text-white transition-colors active:scale-95">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </>
        )}
      </div>
    </>
  );
}

function BookImage({ src, title }) {
  const [isError, setIsError] = useState(false);

  if (!src || isError) {
    return (
      <div className="w-full h-full bg-blue-50 flex items-center justify-center text-3xl">
        📚
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover"
      onError={() => setIsError(true)}
    />
  );
}

export default List_page;
