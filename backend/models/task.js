const mongoose = require("mongoose");

// Define the schema for a task
const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// Export the Task model
module.exports = mongoose.model("Task", taskSchema);
