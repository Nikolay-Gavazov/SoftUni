import { useState } from 'react'
import './styles/style.css'
import Topbar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Fact from './components/Fact'


function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <Fact/>
      <Footer/>
    </>
  )
}

export default App
