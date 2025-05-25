const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.criarTask);
router.get('/tasks', taskController.listarTask);
router.put('/tasks/:id', taskController.editarTask);
router.delete('/tasks/:id', taskController.excluirTask);

module.exports = router;