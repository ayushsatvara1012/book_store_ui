function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="relative z-30 w-full py-3 flex items-center max-w-2xl mx-auto lg:mx-0">
            <div className="relative grow">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    id="search-bar"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search book by title or author..."
                    className="w-full py-2.5 pl-4 pr-10 text-gray-700 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
                />
            </div>
        </div>

    )
}

export default SearchBar