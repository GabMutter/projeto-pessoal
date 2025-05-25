const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

router.post('/enderecos', enderecoController.criarEndereco);
router.get('/enderecos', enderecoController.listarEndereco);
router.put('/enderecos/:id', enderecoController.editarEndereco);
router.delete('/enderecos/:id', enderecoController.excluirEndereco);

module.exports = router;