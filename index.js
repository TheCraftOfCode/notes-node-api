const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Dev environment configuration
morgan("tiny");
dotenv.config();

// Initialize app
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`.blue));
