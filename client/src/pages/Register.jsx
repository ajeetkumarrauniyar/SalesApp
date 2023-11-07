//Importing libraries and modules
import React, { useState } from "react";
import "../App.css";

import axios from "axios"; // Axios library for making HTTP requests
import { API_BASE_URL } from "../config/config";
import SweetAlert from "sweetalert2"; // SweetAlert for displaying alerts

const Register = () => {
  // Defining and initializing state variables
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching

  const [loading, setLoading] = useState(false); // State for loading icon during API calls

  // Function to handle user registration
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Show loading icon

    // Checking if the passwords match before making the API request
    if (password === confirmPassword) {
      setPasswordsMatch(true); // Passwords match

      // Creating a request data object
      const requestData = {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      };

      try {
        // Making a POST request to the registration API
        const response = await axios.post(
          `${API_BASE_URL}/api/user/register`,
          requestData
        );

        if (response) {
          setLoading(false); // Hide loading icon

          // Display an success message to the user
          SweetAlert.fire({
            icon: "success",
            title: "User Registered Successfully",
          });
          console.log("Registration successful:", response);
        }

        // Resetting (Clearing) the input fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        setLoading(false);
        
        // Display an error message to the user
        SweetAlert.fire({
          icon: "error",
          title: "Registration Failed",
        });
        console.error("Registration failed:", error);
        console.log(
          "Error during registration on the frontend API call",
          error
        );
      }
    } else {
      setPasswordsMatch(false); // Passwords do not match
      setLoading(false); // Hide loading icon
    }
  };

  // Return the registration form JSX
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            {/* Display the registration header */}
            <div className="card-header">
              <h4 className="text-center">Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => handleRegister(e)}>
                {/* First Name  */}
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  {/* First Name Input Field */}
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your first name"
                    required
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                {/* Last Name  */}
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  {/* Last Name Input Field */}
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
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
                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  {/* Confirm Password Input Field */}
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {/* Display an error message if passwords do not match (only when passwordsMatch is false) */}
                {!passwordsMatch && (
                  <p className="text-danger">Passwords do not match</p>
                )}

                {/* Registration Button */}
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleRegister}
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
                    Register
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

export default Register;
