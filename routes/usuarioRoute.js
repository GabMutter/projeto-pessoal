const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.criarUsuario);
router.get('/usuarios', usuarioController.listarUsuario);
router.put('/usuarios/:id', usuarioController.editarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;