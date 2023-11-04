// Importing Mongoose library for schema and model creation
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

// Defining the Sale schema
const saleSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User", // Reference to the user who made the sale
    },
    productId: {
      type: ObjectId,
      ref: "Product", // References to the products list
    },
    rate: {
      type: Number,
      required: "true",
    },
    quantity: {
      type: Number,
      required: "true",
    },
    amount: {
      type: Number,
      required: true, // Automatically Calculated field
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt timestamps
  }
);

// Creating and registering  & also exporting the Sales model using the schema
module.exports = mongoose.model("SaleModel", saleSchema);

sale_date(Timestamp);