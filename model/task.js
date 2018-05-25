const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  start: Date,
  end: Date,
  description: String,
  time: Number,
  manual: Boolean
});

mongoose.model("Task", taskSchema);
module.exports = mongoose.model("Task");
