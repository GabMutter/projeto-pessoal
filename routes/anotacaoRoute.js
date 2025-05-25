const express = require('express');
const router = express.Router();
const anotacaoController = require('../controllers/anotacaoController');

router.post('/anotacaos', anotacaoController.criarAnotacao);
router.get('/anotacaos', anotacaoController.listarAnotacao);
router.put('/anotacaos/:id', anotacaoController.editarAnotacao);
router.delete('/anotacaos/:id', anotacaoController.excluirAnotacao);

module.exports = router;