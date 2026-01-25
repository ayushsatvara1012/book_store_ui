function List_page({ allBooks }) {


  return (
    <>
      <div className="w-full max-w-2xl mt-5 grid grid-cols-1 gap-4 rounded-2xl sm:self-start max-h-[calc(100vh-15rem)] overflow-y-auto shadow-inner no-scrollbar ">

        {/* <div className="flex flex-col sm:flex-row"> */}

          {/* Heading */}
          <p className="sticky top-0 z-20 bg-white font-black text-gray-500 text-xl place-items-center grid">
            📘 Your Books: {allBooks.length}
          </p>

        {allBooks.length === 0 ? (
          /* Show this when EMPTY */
          <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
            <span className="text-6xl mb-4">📭</span>
            <h3 className="text-xl font-bold text-gray-500">No Books Found</h3>
            <p className="text-gray-400">
              Your library is currently empty. Add a book to get started!
            </p>
          </div>
        ) : (
          allBooks.map((book) => (
            <div
              className="w-auto h-32 p-2 rounded-2xl border border-gray-400 gap-3 flex items-center justify-between"
              key={book.id}
            >
              <div className="h-3/4 flex flex-row ">
                <div className="w-2/5 m-3 flex items-center justify-center text-6xl ">
                  📚
                </div>

                <div className="w-full pl-5 flex flex-col items-start justify-center">
                  <h3 className="font-sans font-bold text-xl antialiased">
                    {book.title}
                  </h3>
                  <p className="italic font-serif font-light antialiased">
                    {book.author}
                  </p>
                  <p className="font-sans text-gray-700 antialiased">
                    {book.year}
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="w-1/3 h-full grid grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-center">
                <button className="text-green-800 w-15 h-10 bg-green-100 place-items-center border border-green-300 rounded-2xl active:bg-green-800 active:text-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
                <button className="text-red-800 w-15 h-10 bg-red-100 place-items-center border border-red-300 rounded-2xl active:bg-red-800 active:text-red-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default List_page;
