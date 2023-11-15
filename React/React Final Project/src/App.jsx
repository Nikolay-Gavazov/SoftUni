import { useState } from 'react'
import './styles/style.css'
import Home from './components/pages/home/Home'
import Topbar from './components/pages/layout/Topbar'
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/user/Login'
import Register from './components/pages/user/Register'
import About from './components/pages/About'
import Booking from './components/pages/Booking'
import Contacts from './components/pages/Contacts'
import NotFound from './components/pages/NotFound'
import Logout from './components/pages/user/Logout'
import Service from './components/pages/home/Service'

function App() {

    return (
        <>
            <Topbar />
            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/booking' element={<Booking/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/services' element={<Service/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <Footer />
        </>
    )
}

export default App
