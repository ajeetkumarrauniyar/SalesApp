// app.js

const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Body parser middleware
app.use(express.json());

// API routes
app.use('/routes', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
