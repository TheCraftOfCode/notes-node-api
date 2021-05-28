const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Dev environment configuration
morgan("tiny");
dotenv.config();

// Connect to mongodb
connectDB();

// Initialize app
const app = express();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`.blue));
app.get("/", function (req,res){
	  res.send(`Hello, ${req.ip}!`)
	console.log(`Request from ${req.ip}`)
})
