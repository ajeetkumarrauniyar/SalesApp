// Importing Mongoose library for schema and model creation
const mongoose = require("mongoose");

// Defining the Product schema
const productsSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    }
  }
);

// Creating and registering  & also exporting the Products model using the schema
module.exports = mongoose.model("ProductsModel", productsSchema); // Exporting Sale Model


