require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.use('/css', express.static(path.join(__dirname, 'views/CSS')));
app.use('/views/CSS', express.static(path.join(__dirname, 'views/CSS'))); // For backward compatibility

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    const userRoutes = require('./routes/userRoute');
    app.use('/users', userRoutes);
    app.use('/usuarios', userRoutes); // Add alias for backward compatibility

    const enderecoRoutes = require('./routes/enderecoRoute');
    app.use('/enderecos', enderecoRoutes);

    const taskRoutes = require('./routes/taskRoute');
    app.use('/tasks', taskRoutes);

    const eventoRoutes = require('./routes/eventoRoute');
    app.use('/eventos', eventoRoutes);

    const anotacaoRoutes = require('./routes/anotacaoRoute');
    app.use('/anotacaos', anotacaoRoutes);

    const frontendRoutes = require('./routes/frontRoute');
    app.use('/', frontendRoutes);

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Erro no servidor');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });