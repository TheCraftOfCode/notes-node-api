const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");

// Routes
const noteRoutes = require("./routes/notes");
const userRoutes = require("./routes/user");

// Dev environment configuration
if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv");
  dotenv.config();
  morgan("tiny");
}

// Connect to mongodb
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoutes);
app.use(errorHandler);

app.get("/", function (req, res) {
  res.send(`Hello, ${req.ip}!`);
  console.log(`Request from ${req.ip}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`.blue));
