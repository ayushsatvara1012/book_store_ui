import SearchBar from './components/search_bar'

export default function Home_page({ newbook, setNewBook, handleCreateBook, editID, handleCancelEdit, searchTerm, setSearchTerm }) {
    return (
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-6 shrink-0">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <form
                onSubmit={handleCreateBook}
                className='p-6 w-full bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl flex flex-col'
            >
                <h1 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
                    {editID ? '✏️ Edit Book' : '✨ Add New Book'}
                </h1>

                {/*------- Title -------*/}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Title</label>
                    <div className="flex items-center rounded-xl bg-gray-50 px-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                        <input
                            id='title'
                            name='title_input'
                            type="text"
                            value={newbook.title}
                            placeholder="e.g. The Great Gatsby"
                            className="block w-full py-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
                            onChange={(e) => { setNewBook({ ...newbook, title: e.target.value }) }}
                            required
                        />
                    </div>
                </div>

                {/*------- Author ------- */}
                <div className="mb-4">
                    <label htmlFor="author" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Author</label>
                    <div className="flex items-center rounded-xl bg-gray-50 px-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                        <input
                            id='author'
                            type="text"
                            value={newbook.author}
                            placeholder="e.g. F. Scott Fitzgerald"
                            className="block w-full py-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
                            onChange={(e) => { setNewBook({ ...newbook, author: e.target.value }) }}
                            required
                        />
                    </div>
                </div>

                {/*------- Year ------- */}
                <div className="mb-4">
                    <label htmlFor="year" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Year</label>
                    <div className="flex items-center rounded-xl bg-gray-50 px-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                        <input
                            id='year'
                            type="number"
                            value={newbook.year}
                            placeholder="e.g. 1925"
                            className="block w-full py-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
                            onChange={(e) => { setNewBook({ ...newbook, year: e.target.value }) }}
                            required
                        />
                    </div>
                </div>

                {/*------- Image URL ------- */}
                <div className="mb-6">
                    <label htmlFor="image_url" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Cover Image URL</label>
                    <div className="flex items-center rounded-xl bg-gray-50 px-3 border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all relative">
                        <input
                            id='image_url'
                            type="url"
                            value={newbook.image_url || ''}
                            placeholder="https://example.com/cover.jpg"
                            className="block w-full py-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium pr-8"
                            onChange={(e) => { setNewBook({ ...newbook, image_url: e.target.value }) }}
                        />
                        {/* Preview Icon if URL exists */}
                        {newbook.image_url && (
                            <div className="absolute right-3 w-6 h-6 rounded overflow-hidden border border-gray-200 bg-white">
                                <img src={newbook.image_url} alt="Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        type="submit"
                        className={`w-full py-3.5 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex justify-center items-center gap-2 ${editID ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        {editID ? (
                            <>Update Book</>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add to Library
                            </>
                        )}
                    </button>
                    {editID && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="w-full py-3.5 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}
