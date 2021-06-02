const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Routes
// const notes = require("./routes/notes");
const userRoutes = require("./routes/user");

// Dev environment configuration
dotenv.config();
if (process.env.NODE_ENV === "development") {
  morgan("tiny");
}

// Connect to mongodb
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// Routes Middleware
// app.use("/api/notes", notes);
app.use("/api/auth", userRoutes);
app.use(errorHandler);

app.get("/", function (req, res) {
  res.send(`Hello, ${req.ip}!`);
  console.log(`Request from ${req.ip}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`.blue));

