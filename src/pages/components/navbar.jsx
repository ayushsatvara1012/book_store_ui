export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md h-16 px-4 sm:px-8 flex items-center justify-between shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📚</span>
          <div className="font-extrabold text-xl tracking-tight text-slate-800 group-hover:text-blue-800 transition-colors">
            Lumina<span className="text-blue-600">Lib</span>
          </div>
        </div>

        {/* // LOG IN BUTTON */}
        <button className="px-5 py-2 rounded-full font-medium text-sm bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg active:scale-95 transition-all duration-200">
          Sign In
        </button>

      </nav>
    </>
  )
}
