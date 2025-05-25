const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.post('/eventos', eventoController.criarEvento);
router.get('/eventos', eventoController.listarEvento);
router.put('/eventos/:id', eventoController.editarEvento);
router.delete('/eventos/:id', eventoController.excluirEvento);

module.exports = router;