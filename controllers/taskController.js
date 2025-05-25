const pool = require('../config/db');

exports.criarTask = async (req, res) => {
  const { titulo, confirmar, data, id_usuario, id_evento, id_anotacao } = req.body;

  const query = 'INSERT INTO tasks (titulo, confirmar, data, id_usuario, id_evento, id_anotacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [titulo, confirmar, data, id_usuario, id_evento, id_anotacao];

  try {
    const result = await pool.query(query, values);
    const task = result.rows[0];
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarTask = async (req, res) => {
  const query = 'SELECT * FROM tasks';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarTask = async (req, res) => {
  const { id } = req.params;
  const { titulo, confirmar, data, id_usuario, id_evento, id_anotacao } = req.body;

  const query = `
    PDATE tasks SET ttitulo = $1, confirmar = $2, data = $3, id_usuario = $4, id_evento = $5, id_anotacao = $6, updated_at = CURRENT_TIMESTAMP
    WHERE id = $7 RETURNING *`;
  const values = [titulo, confirmar, data, id_usuario, id_evento, id_anotacao, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'task não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirTask = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tasks WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'task não encontrada' });
    }
    res.status(200).json({ message: 'task excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};