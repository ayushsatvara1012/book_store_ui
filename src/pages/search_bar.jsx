function search_bar() {
    return (
        <div className="sticky mt-1 p-2 flex items-center max-w-md mx-auto">
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
                    className="w-full py-2 pl-4 pr-10 text-gray-700 bg-white border border-gray-200 rounded-l-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
            </div>
            <button className="px-6 py-2 bg-blue-100 text-blue-500 font-medium border border-blue-200 rounded-r-lg hover:bg-blue-700 active:bg-blue-800 transition-colors">
                Search
            </button>
        </div>

    )
}

export default search_bar