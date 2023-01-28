import './App.css'
// import Login from './components/Login'
import Reelslist from './components/Reelslist'
import Sidenav from './components/Sidenav'


function App() {

  return (
   <><div className='h-[100vh] bg-white grid place-items-center-center'>
    <Sidenav/>
    <Reelslist/>
    {/* <Login/> */}
    </div>
   </>
  )
}

export default App
