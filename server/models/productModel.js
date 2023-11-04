// Importing Mongoose library for schema and model creation
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

// Defining the Sale schema
const saleSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    unit_price:{
        type: Decimal,
        required: true,
    }
  }
);

// Creating and registering the Sale model using the schema
module.exports = mongoose.model("SaleModel", saleSchema); // Exporting Sale Model


