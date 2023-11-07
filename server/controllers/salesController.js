// Importing necessary libraries and modules
const SalesModel = require("../models/salesModel");

// Add Sales Controller
const addSalesEntry = async (req, res) => {
  try {
    // Destructure the product, quantity, and rate from the request body
    const { product, quantity, rate } = req.body;

    // Calculate the total amount by multiplying quantity and rate
    const amount = quantity * rate;

    // Create a new SalesModel instance with product, quantity, rate, and amount
    const newSale = new SalesModel({
      product,
      quantity,
      rate,
      amount,
    });

    // Save the new sale entry to the database
    await newSale.save();

    // Respond with a 201 status code and a JSON message for a successful sale entry
    res.status(201).json({ message: "Sale added successfully", sale: newSale });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" }); // Respond with a 500 status code for internal server error
  }
};


// Top 5 Sales of the day (today)
const getTopSales = async (req, res) => {
  // Implement logic to retrieve top sales of the day
};

// Total Revenue
const getTotalRevenue = async (req, res) => {
  // Implement logic to calculate total revenue
};

// Exporting the Add Sales, Top 5 sales of the day, and Total Revenue controllers
module.exports = { addSalesEntry, getTopSales, getTotalRevenue };
