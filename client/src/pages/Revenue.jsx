import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

// This component displays today's revenue in a card format
const Revenue = () => {
  const [revenue, setRevenue] = useState([]);

  useEffect(() => {
    // Fetch revenue data from the backend when the component mounts
    async function fetchRevenue() {
      try {
        const response = await axios.get('/revenue');
        setRevenue(response.data);
      } catch (error) {
        // Handle error when fetching revenue
        console.error('Failed to fetch revenue:', error);
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
                <span className="pe-3">&#8377;</span>25220
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
