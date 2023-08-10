const Task = require("../models/Task");

// Get All Tasks Controller
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

// Create Task Controller
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Get Single Task Controller
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

// Update Task Controller
const updateTask = (req, res) => {
  res.send("update task");
};

// Delete Task Controller
const deleteTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
