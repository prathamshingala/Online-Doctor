import React from "react";
import logo from "./Assets/Media/Logo.png";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav
        className={`modern-navbar navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container">
          <Link className="navbar-brand modern-brand" to="/">
            <div className="brand-container">
              <img className="logo modern-logo" src={logo} alt="logo" />
              <div className="brand-text">
                <span className="brand-primary">Click</span>
                <span className="brand-secondary">Doctor</span>
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler modern-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link modern-nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  <i className="material-icons nav-icon"></i>
                  {props.Home}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link modern-nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  <i className="material-icons nav-icon"></i>
                  {props.About}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link modern-nav-link ${
                    location.pathname === "/Services" ? "active" : ""
                  }`}
                  to="/Services"
                >
                  <i className="material-icons nav-icon"></i>
                  {props.Services}
                </Link>
              </li>
            </ul>

            <div className="navbar-actions">
              <button className="btn modern-appointment-btn" type="button">
                <i className="material-icons1 btn-icon">Book Appointment</i>
              </button>

              <div className="mode-toggle-wrapper">
                <div
                  className={`form-check form-switch modern-switch text-${
                    props.Mode === "light" ? "dark" : "light"
                  }`}
                >
                  <input
                    className="form-check-input modern-toggle"
                    type="checkbox"
                    onClick={props.toggleMode}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label toggle-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    <i className="material-icons mode-icon">
                      {props.Mode === "light" ? "Mode" : "Mode"}
                    </i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
