import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ condition }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Py Jonathon
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {condition ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              ) : null}

              {condition ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/upload">
                    Upload Memories
                  </NavLink>
                </li>
              ) : null}

              {condition ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/showMemories">
                    show Memories
                  </NavLink>
                </li>
              ) : null}

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Conatct
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Sing In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
