import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Counter from './components/Counter'
import Timer from './components/Timer'
import Data from './components/Data'
import movies from './assets/movies'

function App() {
  const [count, setCount] = useState(0)
  const arr = ["asd", 12, 543, "trye"]
  return (
    <>
      <Header/>
      <Counter/>
      <Timer/>
      <Data data = {movies}/>
    </>
  )
}

export default App
