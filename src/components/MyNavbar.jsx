import React from "react";
import logo from "../assets/logo/logo.png";

function MyNavbar() {
  // Funzione di ricerca
  const search = (event) => {
    // Implementa la logica di ricerca qui
    event.preventDefault(); // Impedisce il comportamento predefinito del modulo
    console.log("Esegui ricerca");
  };

  return (
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img
            src={logo} //logo
            alt="Spotify Logo"
            width="131"
            height="40"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </a>
              </li>
              <li>
                <form className="input-group mt-3" onSubmit={search}>
                  <input
                    type="text"
                    className="form-control"
                    id="searchField"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                      GO
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <a href="#"> Cookie Policy | Privacy</a>
      </div>
    </nav>
  );
}

export default MyNavbar;
