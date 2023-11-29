import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-link-1"
                activeClassName = "active"
                aria-current="page"
                to="/gallery"
              >
                Photos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav-link-3" to="/about" activeClassName = "active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-link-4" to="/contact" activeClassName = "active">
                Contact
              </NavLink>
            </li>
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link nav-link-1" activeClassName = "active">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link nav-link-2" activeClassName = "active">
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link nav-link-2" to="/create" activeClassName = "active">
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link nav-link-3" activeClassName = "active">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
