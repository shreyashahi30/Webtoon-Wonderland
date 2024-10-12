// server/app.js
const express = require('express');
const connectDB = require('./database/db');
const webtoonRoutes = require('./routes/webtoons');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/webtoons', webtoonRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

