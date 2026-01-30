export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md h-20 px-6 flex items-center justify-between shadow-sm border-b border-gray-100">
        <div className="text-blue-600 font-black font-serif text-3xl tracking-tight cursor-pointer hover:opacity-80 transition-opacity">Book Store</div>
        
{/* // LOG IN BUTTON */}
        <button className="w-12 h-12 flex items-center justify-center border border-blue-100 bg-blue-50 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md active:scale-95 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </button>

      </nav>
    </>
  )
}
