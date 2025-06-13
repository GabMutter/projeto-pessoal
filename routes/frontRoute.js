const express = require('express');
const router = express.Router();
const path = require('path');
const taskModel = require('../models/taskModel');

// Roteamento para páginas dinâmicas
router.get('/login', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página Login',
    content: path.join(__dirname, '../views/pages/page1')
  });
});

router.get('/home', async (req, res) => {
  try {
    const userId = 9; // Por enquanto fixo, depois virá da sessão
    const tasks = await taskModel.getAll();
    
    res.render(path.join(__dirname, '../views/layout/main'), {
      pageTitle: 'Página Inicial',
      content: path.join(__dirname, '../views/pages/page3'),
      userId: userId,
      tasks: tasks
    });
  } catch (error) {
    console.error('Erro ao buscar tasks:', error);
    res.render(path.join(__dirname, '../views/layout/main'), {
      pageTitle: 'Página Inicial',
      content: path.join(__dirname, '../views/pages/page3'),
      userId: 9,
      tasks: []
    });
  }
});

router.get('/cadastro', (req, res) => {
  res.render(path.join(__dirname, '../views/layout/main'), {
    pageTitle: 'Página cadastro',
    content: path.join(__dirname, '../views/pages/page2')
  });
});

module.exports = router;
