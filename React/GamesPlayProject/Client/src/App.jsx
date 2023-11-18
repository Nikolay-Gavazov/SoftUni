import { Routes, Route } from "react-router-dom"
import Header from "./Components/header/Header"
import Home from "./Components/home/Home"
import Create from "./Components/Games/Create"
import GameList from "./Components/Games/GameList"
import Login from "./Components/user/Login"
import Register from "./Components/user/Register"
import Logout from "./Components/user/Logout"
import Details from "./Components/Games/Details"
import Edit from "./Components/Games/Edit"


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/gameList" element={<GameList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/gameList/:id" element={<Details/>}/>
        <Route path="/gameList/:id/edit" element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
