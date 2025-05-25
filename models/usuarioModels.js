const db = require('../config/db');

class Usuario {
  static async getAll() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO usuarios (nome, nascimento, email, senha) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.nascimento, data.email, data.senha]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE usuarios SET nome = $1, nascimento = $2, email = $3, senha = $4 WHERE id = $5 RETURNING *',
      [data.nome, data.nascimento, data.email, data.senha, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Usuario;