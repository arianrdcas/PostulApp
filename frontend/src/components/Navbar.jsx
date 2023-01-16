import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-dark  navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="nav ">
              <li className="nav-item ">
                <NavLink
                  className={
                    "nav-link text-white " +
                    (location.pathname === "/" ? "active" : "")
                  }
                  to="/"
                >
                  Bienvenido
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={
                    "nav-link text-white " +
                    (location.pathname === "/postulaciones" ? "active" : "")
                  }
                  to="/postulaciones"
                >
                  Postulaciones
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
