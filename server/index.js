const mongoose = require("mongoose");
require("dotenv").config(); // Allow .env variables to load in
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000; // Load in PORT env var or use default 3000
const connectDB = require("./config/db");
const usersRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

app.use(express.json()); // Parse incoming JSON requests
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); // Enable CORS for cross-origin requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// connect to mongoDB
connectDB();

app.get("/", (req, res) => {
    res.json({
        status: "running",
        db: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
    });
});

// connect api routes to the app
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({
        message: 'Something went wrong on the server',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});