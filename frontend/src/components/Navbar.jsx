import React from 'react'
import { Link,  useLocation } from 'react-router-dom';

const Navbar = () => {

const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-dark  navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="#">
            PostulApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="nav ">
              <li className="nav-item">
                <Link
                  className={
                    "nav-link text-white" +
                    (location.pathname === "/" ? "active" : "")
                  }
                  to="/"
                >
                  Bienvenido
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    "nav-link text-white" +
                    (location.pathname === "/home" ? "active" : "")
                  }
                  to="/home"
                >
                  Home
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar