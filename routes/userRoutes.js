const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para o login do usuário
router.post('/usuarios/login', userController.loginUser);

module.exports = router;