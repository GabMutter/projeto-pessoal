const db = require('../config/db');

class User {
  static async getAllUsers() {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(data) {
    const result = await db.query(
      'INSERT INTO usuarios (nome, nascimento, email, senha) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.nascimento, data.email, data.senha]
    );
    return result.rows[0];
  }

  static async loginUsuario(email, senha) {
    const result = await db.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, senha]
    );
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const result = await db.query(
      'UPDATE usuarios SET nome = $1, nascimento = $2, email = $3, senha = $4 WHERE id = $5 RETURNING *',
      [data.nome, data.nascimento, data.email, data.senha, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id) {
    const result = await db.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = User;
