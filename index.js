const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
require('dotenv').config()


const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // Enable this if you need to handle cookies with CORS
}));
app.use(cookieParser());
app.use(express.json()); // Middleware to parse JSON request bodies

// Routes
app.use("/api", router);

// Set the port
const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to DB:", err);
        process.exit(1); // Exit the process with failure code
    });
