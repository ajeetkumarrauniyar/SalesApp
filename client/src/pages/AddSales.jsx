import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";

const AddSales = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddSale = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/add-sales', {
        product,
        quantity,
        amount,
      });
      // Handle successful sale entry here
    } catch (error) {
      // Handle sale entry error here
      console.error('Sale entry failed:', error);
    }
  };

  return (
    // Main container
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5">
          <h4 className="text-center">Add Sale Entry</h4>
          <div className="card border border-2 rounded-3">
            <div className="card-body">
              {/* Product selection */}
              <div className="form-group">
                <label htmlFor="product" className="label">
                  Product
                </label>
                <select className="form-select" id="product" name="product">
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
                <input
                  type="number"
                  className="form-control"
                  id="qty"
                  name="qty"
                />
              </div>
              {/* Unit Price input */}
              <div className="form-group">
                <label htmlFor="rate" className="label">
                  Rate (Unit Price)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rate"
                  name="rate"
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
                  name="amt"
                  disabled
                />
              </div>
              {/* Submit button */}
              <div className="d-flex flex-column mt-5">
                <button type="submit" className="btn btn-primary">
                  Add Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSales;