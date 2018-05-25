const mongoose = require("mongoose");
const express = require("express");

const Task = mongoose.model("Task")

const router = express.Router();

router.get("/", function(req, res) {
  Task.find({}, function(err, response) {
    if (err) return res.status(403).send(err.reason);
  
    res.status(200).send(response);
  });
})

router.post("/", function(req, res) {
  const { start, end, time } = req.body;
  
  const objectToInsert = {
    start: new Date(start),
    end: new Date(end),
    time: time,
  }

  console.log(objectToInsert, "insert");

  Task.create(objectToInsert, function(err, response) {
    console.log(err, response, "here");
    if (err) return res.status(403).send(err.reason);

    res.status(200).send("done");
  });
})

module.exports = router;
