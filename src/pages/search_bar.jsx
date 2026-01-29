function search_bar() {
    return (
        <div className="sticky top-20 z-30 bg-white rounded-2xl w-full py-3 px-4 flex items-center max-w-2xl mx-auto shadow-sm">
            <div className="relative grow">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    id="search-bar"
                    type="text"
                    placeholder="Search book..."
                    className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border border-gray-200 rounded-l-2xl focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium border border-blue-600 rounded-r-2xl hover:bg-blue-700 active:bg-blue-800 transition-colors">
                Search
            </button>
        </div>

    )
}

export default search_bar