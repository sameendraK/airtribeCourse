require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
// Middleware
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
const taskRoute = require('./src/routes/tasks');
app.use('/', taskRoute);

const userRoute = require('./src/routes/users.js');
app.use('/create', userRoute);

const loginRoute = require('./src/routes/login.js');
app.use('/login', loginRoute);

const settingsRoute = require('./src/routes/settings.js');
app.use('/settings', settingsRoute);

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