import React, { useState } from "react";
import "../App.css";

import axios from "axios"; // Axios library for making HTTP requests
import { API_BASE_URL } from "../config/config";
import SweetAlert from "sweetalert2"; // SweetAlert for displaying alerts

const AddSales = () => {
  // Defining and initializing state variables
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false); // State for loading icon during API calls

  // Function to handle add sale
  const handleAddSale = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Show loading icon

    // Creating a request data object
    const requestData = {
      product,
      quantity,
      rate,
      amount,
    };

    try {
      // Making a POST request to the registration API
      const response = await axios.post(
        `${API_BASE_URL}/api/user/add-sales`,
        requestData
      );
      if (response) {
        setLoading(false); // Hide loading icon

        // Display an success message to the user
        SweetAlert.fire({
          icon: "success",
          title: "Sales Added Successfully",
        });
        console.log("Sales add successful:", response);
      }

      // Resetting (Clearing) the input fields
      setProduct("");
      setRate("");
      setQuantity("");
      setAmount("");
    } catch (error) {
      // Display an error message to the user
      SweetAlert.fire({
        icon: "error",
        title: "Registration Failed",
      });
      console.error("Sale entry failed:", error);
      console.log("Error during sale adding on the frontend API call", error);
    }
  };

  // Return the add sale form JSX
  return (
    // Main container
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5">
          {/* Display the Add sale header */}
          <h4 className="text-center">Add Sale</h4>
          <div className="card border border-2 rounded-3">
            <div className="card-body">
              <form onSubmit={(e) => handleAddSale(e)}>
                {/* Product selection */}
                <div className="form-group">
                  <label htmlFor="product" className="label">
                    Product
                  </label>
                  {/* Products Selection field */}
                  <select
                    className="form-select"
                    id="product"
                    name="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    {/* Products option */}
                    <option defaultValue>Select the product</option>
                    <option value="1">RSO 1 LT PCH</option>
                    <option value="2">KGMO 1 LT PCH</option>
                    <option value="3">RBO 1 LT PCH</option>
                    <option value="4">Sunflower Oil 1 LT PCH</option>
                    <option value="5">Coconut Oil 1 LT PCH</option>
                  </select>
                </div>
                {/* Quantity input */}
                <div className="form-group">
                  <label htmlFor="qty" className="label">
                    Quantity
                  </label>
                  {/* Quantity input field */}
                  <input
                    type="number"
                    className="form-control"
                    id="qty"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                {/* Unit Price input */}
                <div className="form-group">
                  <label htmlFor="rate" className="label">
                    Rate (Unit Price)
                  </label>
                  {/* Unit Price input field */}
                  <input
                    type="number"
                    className="form-control"
                    id="rate"
                    name="rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                {/* Amount & Calculated Field */}
                <div className="form-group">
                  <label htmlFor="amt" className="label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="amt"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled
                  />
                </div>
                {/* Submit button */}
                <div className="d-flex flex-column mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddSale}
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
                    Add Sale
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

export default AddSales;
