const express = require('express');
const router = express.Router();
const { registerUser, loginUser, addSalesEntry, getTopSales, getTotalRevenue } = require('../controllers/apiController.js');



// Adding new sales entry
router.post('/add-sales', addSalesEntry);

// Top 5 sales for today
router.get('/top-sales', getTopSales);

// Total revenue
router.get('/total-revenue', getTotalRevenue);

module.exports = router;
