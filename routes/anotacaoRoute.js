const express = require('express');
const router = express.Router();
const anotacaoController = require('../controllers/anotacaoController');

router.get('/', anotacaoController.getAllAnotacoes);
router.get('/:id', anotacaoController.getAnotacaoById);
router.post('/', anotacaoController.createAnotacao);
router.put('/:id', anotacaoController.updateAnotacao);
router.delete('/:id', anotacaoController.deleteAnotacao);

module.exports = router;