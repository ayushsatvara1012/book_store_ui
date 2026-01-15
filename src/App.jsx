import './App.css'
import HomePage from './pages/home_page.jsx'
import ListPage from './pages/list_page.jsx'

function App() {

    return (
        <>
            <div className='m-4 flex flex-col items-center justify-center'>
                <HomePage/>
                <ListPage/>
            </div>
        </>
    )
}

export default App
