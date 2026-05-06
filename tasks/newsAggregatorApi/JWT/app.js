require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
const taskRoute = require('./src/routes/tasks');
app.use('/', taskRoute);

// Start server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});