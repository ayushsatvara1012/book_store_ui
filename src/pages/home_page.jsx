export default function Home_page({ newbook, setNewBook, handleCreateBook }) {
    return (<>
        {/*------- Container ------- */}
        <form
            onSubmit={handleCreateBook}
            className='mt-8 p-6 w-full max-w-2xl bg-white border border-gray-200 shadow-sm rounded-2xl flex flex-col sm:mt-16 sm:w-1/3 sm:self-start'
        >
            <h1 className="text-3xl font-black text-gray-900 mb-6">Add New Book</h1>

            {/*------- Title -------*/}
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Title</label>
                <div className="mt-1">
                    <div className="flex items-center rounded-xl bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600 transition-all">
                        <input
                            id='title'
                            name='title_input'
                            type="text"
                            value={newbook.title}
                            placeholder="e.g. The Great Gatsby"
                            className="block min-w-0 grow py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                            onChange={(e) => { setNewBook({ ...newbook, title: e.target.value }) }}
                            required
                        />
                    </div>
                </div>
            </div>

            {/*------- Author ------- */}
            <div className="mb-4">
                <label htmlFor="author" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Author</label>
                <div className="mt-1">
                    <div className="flex items-center rounded-xl bg-white px-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600 transition-all">
                        <input
                            id='author'
                            type="text"
                            value={newbook.author}
                            placeholder="e.g. F. Scott Fitzgerald"
                            className="block min-w-0 grow py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                            onChange={(e) => { setNewBook({ ...newbook, author: e.target.value }) }}
                            required
                        />
                    </div>
                </div>
            </div>

            {/*------- Year ------- */}
            <div className="mb-6">
                <label htmlFor="year" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">Year</label>
                <div className="mt-1">
                    <div className="flex items-center rounded-xl bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600 transition-all">
                        <input
                            id='year'
                            type="number"
                            value={newbook.year}
                            placeholder="e.g. 1925"
                            className="block min-w-0 grow py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                            onChange={(e) => { setNewBook({ ...newbook, year: e.target.value }) }}
                            required
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
            >
                Add to Library
            </button>
        </form>
    </>)
}
