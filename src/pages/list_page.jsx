function List_page() {
    return (
        <>
            <div className="w-full m-2 grid grid-cols-1 gap-4 rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
                <div className="w-auto h-48 p-2 rounded-2xl border border-blue-300 gap-3">
                    <div className='h-3/4 flex flex-row '>
                        <div
                            className='w-2/5 m-3 border border-gray-400 rounded-2xl flex items-center justify-center text-6xl shadow-[2px_5px_4px_-4px_#000000]'>📚
                        </div>

                        <div className='w-full pl-5 flex flex-col items-start justify-center'>
                            <p className='font-sans font-bold text-xl antialiased'>Book Name </p>
                            <p className='italic font-serif font-light antialiased'>by author</p>
                            <p className='font-sans text-gray-700 antialiased'>2002</p>
                        </div>
                    </div>
                    <div className='h-1/4 grid grid-cols-2 place-items-center'>
                        <button
                            className='edit_btn'>EDIT
                        </button>
                        <button
                            className='delete_btn'>DELETE
                        </button>
                    </div>
                </div>
                {/*Book 2*/}
                <div className="w-auto h-48 p-2 rounded-2xl border border-blue-300 gap-3">
                    <div className='h-3/4 flex flex-row '>
                        <div
                            className='w-2/5 m-3 border border-gray-400 rounded-2xl flex items-center justify-center text-6xl shadow-[2px_5px_4px_-4px_#000000]'>📚
                        </div>
                        <div
                            className='w-full pl-5 flex flex-col items-start justify-center'>
                            <p className='font-sans font-bold text-xl antialiased'>Book Name </p>
                            <p className='italic font-serif font-light antialiased'>by author</p>
                            <p className='font-sans text-gray-700 antialiased'>2002</p>
                        </div>
                    </div>
                    <div className='h-1/4 grid grid-cols-2 place-items-center'>
                        <button
                            className='edit_btn'>EDIT
                        </button>
                        <button
                            className='delete_btn'>DELETE
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default List_page
