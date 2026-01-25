export default function navbar() {
  return (
    <>
      <div className="sticky h-20 p-3 flex flex-row justify-between place-items-center shadow">
        <div className="text-blue-600 italic font-bold font-serif text-2xl">Book Store</div>
        
{/* // LOG IN BUTTON */}
        <div className="w-15 h-full text-3xl border border-blue-200 bg-blue-50 rounded-xl text-blue-800 place-items-center justify-center flex ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

        </div>

      </div>
    </>
  )
}
