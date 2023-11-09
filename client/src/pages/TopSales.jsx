//Importing libraries and modules
import React, { useState, useEffect } from "react";
import "../App.css";

import axios from "axios"; // Axios library for making HTTP requests
import { API_BASE_URL } from "../config/config";
import SweetAlert from "sweetalert2"; // SweetAlert for displaying alerts

const TopSales = () => {
  // Defining and initializing state variables
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    async function fetchTopSales() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/top-sales`);
        setTopSales(response.data.topSales);
        console.log("Top Sales Data", response.data.topSales);

      } catch (error) {
        console.error("Failed to fetch top sales:", error);
        SweetAlert.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch top sales. Please try again.",
        });
      }
    }

    fetchTopSales();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5 table-responsive">
          <h4 className="text-center">Top 5 Sales</h4>
          <table className="table table-dark table-striped table-hover align-middle">
            <thead>
              <tr className="align-middle">
                <th scope="col">#</th>
                <th scope="col">Sales ID:</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sale Amount</th>
              </tr>
            </thead>
            <tbody className="table-group-divider align-middle text-center">
              {topSales.map((sale, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{sale.salesId}</td>
                  <td>{sale.product}</td>
                  <td>{sale.quantity}</td>
                  <td>{sale.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
