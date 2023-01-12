import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
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
                    "nav-link  text-white" +
                    (location.pathname === "/home" ? "active" : "")
                  }
                  to="/home"
                >
                  Postulaciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
