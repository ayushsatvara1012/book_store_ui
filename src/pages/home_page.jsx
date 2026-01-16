export default function Home_page() {
    return (<>
        {/*------- Container ------- */}
        <div className='mt-11 p-4 w-full max-w-2xl text-sky-500 border border-gray-300 rounded-2xl flex flex-col sm:self-start'>

            {/*------- Title -------*/}
            <h1 className="text-2xl font-bold text-gray-800 ">Title</h1>
            <div>
                <div className="mt-2">
                    <div
                        className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:id'title focus-within]:outline-2 has-[input:id'title focus-within]:-outline-offset-2 has-[input:id'title focus-within]:outline-indigo-600">
                        <input id='title' name='title_input' type="text" placeholder="e.g. English Second"
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                    </div>
                </div>
            </div>

            {/*------- Author ------- */}
            <h1 className="mt-2 text-2xl font-bold text-gray-800">Author</h1>
            <div>
                <div className="mt-2">
                    <div
                        className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:id'title focus-within]:outline-2 has-[input:id'title focus-within]:-outline-offset-2 has-[input:id'title focus-within]:outline-indigo-600">
                        <input id='author' type="text" placeholder="e.g. H.C Verma"
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                    </div>
                </div>
            </div>

            {/*------- Year ------- */}
            <h1 className="mt-2 text-2xl font-bold text-gray-800">Year</h1>
            <div>
                <div className="mt-2">
                    <div
                        className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:id'title focus-within]:outline-2 has-[input:id'title focus-within]:-outline-offset-2 has-[input:id'title focus-within]:outline-indigo-600">
                        <input id='year' type="number" placeholder="e.g. 2002"
                               className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                    </div>
                </div>
            </div>

            {/*------- Button -------*/}
            <div className="flex items-center justify-center">
                <button
                    className="w-full h-10 mt-3 border border-blue-300 text-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white active:bg-blue-800 active:text-white active:scale-[0.98]">
                    Add Book
                </button>
            </div>

        </div>
    </>)
}
