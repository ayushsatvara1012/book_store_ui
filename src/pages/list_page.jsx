function List_page({ allBooks }) {

  
  return (
    <>
      <div className="w-full max-w-xl grid grid-cols-1 gap-4 rounded-2xl sm:self-start max-h-[calc(100vh-4rem)] overflow-y-auto shadow-inner no-scrollbar">
        {/* Heading */}
        <p className="sticky top-0 z-20 bg-white font-black text-gray-500 text-xl place-items-center grid">
          📘 Your Total Books: {allBooks.length}
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
              className="w-auto h-48 p-2 rounded-2xl border border-gray-400 gap-3 "
              key={book.id}
            >
              <div className="h-3/4 flex flex-row ">
                <div className="w-2/5 m-3 border border-gray-400 rounded-2xl flex items-center justify-center text-6xl shadow-[2px_5px_4px_-4px_#000000]">
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
              <div className="h-1/4 grid grid-cols-2 place-items-center">
                <button className="edit_btn">EDIT</button>
                <button className="delete_btn">DELETE</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default List_page;
