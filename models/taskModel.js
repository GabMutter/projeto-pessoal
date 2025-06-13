const db = require('../config/db');

class Task {
  static async getAll() {
    const result = await db.query('SELECT * FROM tasks');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO tasks (titulo, data, id_usuario, id_anotacao) VALUES ($1, $2, $3, $4) RETURNING *`,
      [data.titulo, data.data, data.id_usuario, data.id_anotacao]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE tasks SET titulo = $1, data = $2, id_usuario = $3, id_anotacao = $4 WHERE id = $5 RETURNING *`,
      [data.titulo, data.data, data.id_usuario, data.id_anotacao, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Task;
