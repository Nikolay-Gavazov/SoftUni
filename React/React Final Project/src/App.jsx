import { Route, Routes } from 'react-router-dom'
import About from "./components/pages/About"
import Contacts from "./components/pages/Contacts"
import Create from "./components/pages/Create"
import NotFound from "./components/pages/NotFound"
import Home from "./components/pages/home/Home"
import Footer from "./components/pages/layout/Footer"
import Navbar from "./components/pages/layout/Navbar"
import Topbar from "./components/pages/layout/Topbar"
import Login from "./components/pages/user/Login"
import Logout from "./components/pages/user/Logout"
import Register from "./components/pages/user/Register"
import PageLoader from './components/shared/PageLoader'

function App() {
  return (
    <>
        <PageLoader/>
      <Navbar/>
      <Topbar/>
      <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
      <Footer/>
    </>
  )
}

export default App
