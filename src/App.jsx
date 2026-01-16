import './App.css'
import HomePage from './pages/home_page.jsx'
import ListPage from './pages/list_page.jsx'
import Navbar from './pages/navbar.jsx'

function App() {

    return (
        <>
            <Navbar/>
            <div className='m-4 max-h-[calc(100vh-5rem)] gap-2 flex flex-col items-center justify-center sm:flex-row'>
                <HomePage/>
                <ListPage/>
            </div>
        </>
    )
}

export default App
