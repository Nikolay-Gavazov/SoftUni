import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleHandler(){
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-film mr-2" />
          Free Photos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleHandler}
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={isOpen ? {display:"block"} : {display:"none"}} >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-1"
                activeclassname = "active"
                aria-current="page"
                to="/gallery"
              >
                Photos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-link-3" to="/about" activeclassname = "active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-4" to="/contact" activeclassname = "active">
                Contact
              </NavLink>
            </li>
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link nav-link-1" activeclassname = "active">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link nav-link-2" activeclassname = "active">
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-2" to="/create" activeclassname = "active">
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link nav-link-3" activeclassname = "active">
                    Logout
                  </NavLink>
                </li>
                <button className="btn btn-primary nav-bar-btn" onClick={toggleHandler} style={{width:"60px", height:"30px", textAlign:"center", padding: 0}}>Close</button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
