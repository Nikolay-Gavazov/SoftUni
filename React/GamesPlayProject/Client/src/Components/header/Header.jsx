import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const Header = () => {
  const {
    isAuthenticated,
    username
  } = useContext(AuthContext);
    return(
        <header>
  <h1>
    <Link className="home" to="/">
      GamesPlay
    </Link>
  </h1>
  <nav>
    <Link to="/gameList">All games</Link>
    {isAuthenticated ? (
      <div id="user">
      <Link to="/create">Create Game</Link>
      <Link to="/logout">Logout</Link>
      <span>| Hello {username}!</span>
    </div>
    ) : (<div id="guest">
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>)}
  </nav>
</header>
    );
};

export default Header;