const pool = require('../config/db');

exports.criarEndereco = async (req, res) => {
  const { rua, numero, bairo } = req.body;

  const query = 'INSERT INTO enderecos (rua, numero, bairo) VALUES ($1, $2, $3) RETURNING *';
  const values = [rua, numero, bairo];

  try {
    const result = await pool.query(query, values);
    const endereco = result.rows[0];
    res.status(201).json(endereco);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarEndereco = async (req, res) => {
  const query = 'SELECT * FROM enderecos';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarEndereco = async (req, res) => {
  const { id } = req.params;
  const { rua, numero, bairo } = req.body;

  const query = `
    UPDATE enderecos SET rua = $1, numero = $2, senha = $3, updated_at = CURRENT_TIMESTAMP
    WHERE id = $4 RETURNING *`;
  const values = [rua, numero, bairo, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Endereço não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirEndereco = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM enderecos WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Endereço não encontrada' });
    }
    res.status(200).json({ message: 'Endereço excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};