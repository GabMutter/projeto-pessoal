const pool = require('../config/db');

exports.criarEvento = async (req, res) => {
  const { titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco } = req.body;

  const query = 'INSERT INTO eventos (titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco];

  try {
    const result = await pool.query(query, values);
    const evento = result.rows[0];
    res.status(201).json(evento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarEvento = async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarEvento = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco } = req.body;

  const query = `
    UPDATE eventos SET titulo = $1, descricao = $2, data_inicio = $3, data_final = $4, prioridade = $5, id_usuario = $6, id_endereco = $7, updated_at = CURRENT_TIMESTAMP
    WHERE id = $8 RETURNING *`;
  const values = [titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirEvento = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM eventos WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Evento não encontrada' });
    }
    res.status(200).json({ message: 'Evento excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};