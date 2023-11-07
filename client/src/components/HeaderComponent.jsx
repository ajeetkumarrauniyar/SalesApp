import React from "react";
import '../App.css'

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('JWTToken');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGIN_ERROR' });
    navigate('/Login');
  };
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <h3>MangalShree</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Dashboard</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/api/user/add-sales">Add Sales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/api/user/top-sales">Today's Top Sales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/api/user/revenue">Total Revenue</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/SigUp
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/api/auth/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/api/auth/register">Register</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={() => logout()}>Logout</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default HeaderComponent;
