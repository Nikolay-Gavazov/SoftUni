import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Create from "./Components/Games/Create";
import GameList from "./Components/Games/GameList";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";
import Logout from "./Components/user/Logout";
import Details from "./Components/Games/Details";
import Edit from "./Components/Games/Edit";
import AuthContext from "./context/authContext";
import { login, register } from "./services/userService";

function App() {
  const [auth, setAuth] = useState(() =>{
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (data) => {
    const result = await login( data.email, data.password );
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
  };

  const registerSubmitHandler = async (data) => {
    const result = await register( data.email, data.username, data.password );
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
  };
  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gameList" element={<GameList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/gameList/:id" element={<Details />} />
        <Route path="/gameList/:id/edit" element={<Edit />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
