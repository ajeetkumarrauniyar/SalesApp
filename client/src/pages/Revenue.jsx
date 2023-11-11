//Importing libraries and modules
import React, { useState, useEffect } from "react";
import "../App.css";

import axios from "axios"; // Axios library for making HTTP requests
import { API_BASE_URL } from "../config/config";
import SweetAlert from "sweetalert2"; // SweetAlert for displaying alerts
const Revenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch revenue data from the backend when the component mounts
    async function fetchRevenue() {
      try {
        // Make a GET request to the total-revenue endpoint
        const response = await axios.get(
          `${API_BASE_URL}/api/user/total-revenue`
        );

        setTotalRevenue(response.data.totalRevenue);
      } catch (error) {
        SweetAlert.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch total revenue. Please try again.",
        });
      }
    }

    fetchRevenue();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5">
          <h4 className="text-center">Today's Revenue</h4>
          {/* Card element to display revenue */}
          <div className="card border border-2 rounded-3">
            <div className="card-body">
              {/* Display revenue amount with currency symbol */}
              <p className="d-flex justify-content-center align-items-center display-4 fw-bold">
                <span className="pe-3">&#8377;</span>
                {totalRevenue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
