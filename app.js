const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("./model");

const taskController = require("./controller/taskController");

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(function(req, res, next) {
  console.log("reqest received");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/task", taskController);

// Start server
app.listen(PORT, function() {
  console.log("Server started");
});

// Start db
mongoose.connect("mongodb://localhost:27017/timetracker");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Database connected");
});
