const taskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskModel.getById(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const novaTask = await taskModel.create(req.body);
    res.status(201).json(novaTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskAtualizada = await taskModel.update(req.params.id, req.body);
    if (taskAtualizada) {
      res.status(200).json(taskAtualizada);
    } else {
      res.status(404).json({ error: 'Task não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const foiDeletada = await taskModel.delete(req.params.id);
    if (foiDeletada) {
      res.status(200).json({ message: 'Task deletada com sucesso' });
    } else {
      res.status(404).json({ error: 'Task não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
