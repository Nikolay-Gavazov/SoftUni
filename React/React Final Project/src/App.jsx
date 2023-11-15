import { useState } from 'react'
import './styles/style.css'
import Home from './components/pages/home/Home'
import Topbar from './components/pages/layout/Topbar'
import Navbar from './components/pages/layout/Navbar'
import Footer from './components/pages/layout/Footer'

function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
