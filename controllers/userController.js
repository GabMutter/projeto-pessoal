// controllers/userController.js

const userService = require('../services/userService');
const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { nome, nascimento, email, senha } = req.body;
    await userService.createUser(nome, nascimento, email, senha);
    res.redirect('/login');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log('Login recebido:', email, senha);
    const user = await userService.getUserByEmail(email);
    console.log('Usuário retornado:', user);
    if (user && user.senha === senha) {
      res.json({ success: true, redirect: '/home' });
    } else {
      res.json({ success: false, message: 'Email ou senha inválidos.' });
    }
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ success: false, message: 'Erro ao fazer login.' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { nome, nascimento, email, senha } = req.body;
    const updatedUser = await userService.updateUser(req.params.id, nome, nascimento, email, senha);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  loginUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
