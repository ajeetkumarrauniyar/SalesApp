//Importing libraries and modules
import React from "react";
import "../App.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderComponent = () => {
  const dispatch = useDispatch(); // Access the dispatch function from a Redux store
  const navigate = useNavigate(); // Access the navigation function from a routing library

  const user = useSelector(state => state.userReducer)  // Retrieve user-related data from the Redux store if necessary

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user-related data from local storage
    localStorage.removeItem("JWTToken");
    localStorage.removeItem("user");

    // Dispatch an action to indicate a login error
    dispatch({ type: "LOGIN_ERROR" });

    // Redirect the user to the login page
    navigate("/api/auth/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h3>MangalShree</h3>
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
        <div
          className="collapse navbar-collapse ms-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">Dashboard</Link>
        </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/api/user/add-sales">
                Add Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/api/user/top-sales">
                Today's Top Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/api/user/revenue">
                Total Revenue
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login/SigUp
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/api/auth/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/api/auth/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </li>
            {user ? <li className="nav-item">
              <NavLink className="nav-link" to="/api/auth/login" onClick={() => handleLogout()} >
                Logout
              </NavLink>
            </li> : ''}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
