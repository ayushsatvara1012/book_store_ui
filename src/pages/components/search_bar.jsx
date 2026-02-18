import React, { useState } from 'react';

function SearchBar({ searchTerm, setSearchTerm, isAiMode, setIsAiMode }) {
    return (
        <div className="relative z-30 w-full py-3 flex flex-col gap-3 max-w-2xl mx-auto lg:mx-0">
            <div className="relative flex items-center grow">
                {/* AI Toggle Button - Absolute positioned inside or next to the bar */}
                <button
                    onClick={() => setIsAiMode(!isAiMode)}
                    className={`absolute left-2 z-40 p-1.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                        isAiMode 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    title={isAiMode ? "AI Semantic Search Active" : "Switch to AI Search"}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    {isAiMode && <span className="text-xs font-bold pr-1">AI MODE</span>}
                </button>

                <input
                    id="search-bar"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={isAiMode ? "Search by concept (e.g. 'dystopian future')..." : "Search book by title or author..."}
                    className={`w-full py-2.5 pr-10 text-gray-700 bg-white border rounded-2xl focus:outline-none transition-all shadow-sm ${
                        isAiMode 
                        ? 'pl-24 border-blue-400 ring-2 ring-blue-100' 
                        : 'pl-12 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className={`w-5 h-5 transition-colors ${isAiMode ? 'text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
            
            {/* Subtle Hint Text */}
            {isAiMode && (
                <p className="text-xs text-blue-500 font-medium ml-2 animate-pulse">
                    ✨ Understanding your intent with Vector Search...
                </p>
            )}
        </div>
    );
}

export default SearchBar;