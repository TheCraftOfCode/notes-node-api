const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Routes
const notes = require("./routes/api/notes");

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
app.use("/api/notes", notes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`.blue));

app.get("/", function (req, res) {
  res.send(`Hello, ${req.ip}!`);
  console.log(`Request from ${req.ip}`);
});
