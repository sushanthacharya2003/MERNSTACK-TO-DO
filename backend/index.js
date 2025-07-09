/**
 * Import the Express framework for building web applications.
 */
const express = require("express");

/**
 * Import Mongoose for MongoDB object modeling.
 */
const mongoose = require("mongoose");

const app = express();
/* Import CORS middleware to enable Cross-Origin Resource Sharing.
 */
const cors = require("cors");

/**
 * Load environment variables from a .env file into process.env.
 */
require("dotenv").config();

/**
 * Enable CORS for all routes in the Express app.
 */
app.use(cors());

/**
 * Parse incoming JSON requests and put the parsed data in req.body.
 */
app.use(express.json());

// connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// creating the schema

const Task = require("./models/task");

//routes

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const newtask = new Task({ text: req.body.text });
  await newtask.save();
  res.json(newtask);
});

// Listen
app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
