//Importing libraries and modules
import React, { useState } from "react";
import "../App.css";

import axios from "axios"; // Axios library for making HTTP requests
import { API_BASE_URL } from "../config/config";
import SweetAlert from "sweetalert2"; // SweetAlert for displaying alerts

import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Defining and initializing state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false); // State for loading icon during API calls

  const dispatch = useDispatch(); // Access the dispatch function from a Redux store
  const navigate = useNavigate(); // Access the navigation function from a routing library

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Show loading icon

    // Creating a request data object
    const requestData = {
      email,
      password,
    };

    try {
      // Making a GET request to the login API
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        requestData
      );

      if (response) {
        setLoading(false); // Hide loading icon
        // SweetAlert.fire({
        //   icon: "success",
        //   title: "LoggedIn Successfully",
        // });

       // Saving the JWT token and user data in the browser's localStorage
        localStorage.setItem("JWTToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.userId));

        //Dispatching the data to the action type in Redux Tool
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.userId });
        setLoading(false);

        // Navigate the user to a destination after successful login
        navigate("/api/user/add-sales"); 

        console.log("LogIn successful:", response);
      }

      // Resetting (Clearing) the input fields
      // setEmail("");
      // setPassword("");
    } catch (error) {
      setLoading(false);

      // Display an error message to the user
      SweetAlert.fire({
        icon: "error",
        title: "Login Failed",
      });
      console.error("Login failed:", error);
      console.log("Error during login on the frontend API call", error);
    }
  };

  // Return the login form JSX
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              {/* Display the login header */}
              <h4 className="text-center">Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => handleLogin(e)}>
                {/* Email address */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  {/* Email Input Field */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  {/* Password Input Field */}
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Login Button */}
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleLogin}
                  >
                    {/* For Loading Icon  */}
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      ""
                    )}
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
