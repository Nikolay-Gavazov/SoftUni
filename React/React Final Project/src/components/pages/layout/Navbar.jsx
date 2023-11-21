import { Link } from "react-router-dom"

const Navbar = () => {
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
            <Link className="nav-link nav-link-1 active" aria-current="page"to="/">
              Photos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-2" to="/create">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-3" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-4" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link nav-link-1">
            Login
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/register" className="nav-link nav-link-2">
            Register
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/logout" className="nav-link nav-link-3">
            Logout
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar