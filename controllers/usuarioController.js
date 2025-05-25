const pool = require('../config/db');

exports.criarUsuario = async (req, res) => {
  const { nome, nascimento, email, senha } = req.body;

  const query = 'INSERT INTO usuarios (nome, nascimento, email, senha) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [nome, nascimento, email, senha];

  try {
    const result = await pool.query(query, values);
    const usuario = result.rows[0];
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarUsuario = async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, nascimento, email, senha } = req.body;

  const query = `
    UPDATE usuarios SET nome = $1, nascimento = $2, email = $3, senha = $4, updated_at = CURRENT_TIMESTAMP
    WHERE id = $5 RETURNING *`;
  const values = [nome, nascimento, email, senha, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }
    res.status(200).json({ message: 'Usuario excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};