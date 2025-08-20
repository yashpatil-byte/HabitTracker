const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const habitRoutes = require('./routes/habitRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/habitDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Routes
app.use('/habits', habitRoutes);

// Optional root route
app.get('/', (req, res) => {
    res.send('<h1>Habit Tracker Backend Running!</h1>');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
