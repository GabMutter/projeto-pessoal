const pool = require('../config/db');

exports.criarAnotacao = async (req, res) => {
  const { titulo, descricao, id_task, id_evento } = req.body;

  const query = 'INSERT INTO anotacaos (titulo, descricao, id_task, id_evento) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [titulo, descricao, id_task, id_evento];

  try {
    const result = await pool.query(query, values);
    const anotacao = result.rows[0];
    res.status(201).json(anotacao);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarAnotacao = async (req, res) => {
  const query = 'SELECT * FROM anotacaos';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarAnotacao = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, id_task, id_evento } = req.body;

  const query = `
    UPDATE anotacaos SET titulo = $1, descricao = $2, id_task = $3, id_evento = $4, updated_at = CURRENT_TIMESTAMP
    WHERE id = $5 RETURNING *`;
  const values = [titulo, descricao, id_task, id_evento, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Anotação não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirAnotacao = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM anotacaos WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Anotação não encontrada' });
    }
    res.status(200).json({ message: 'Anotação excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};