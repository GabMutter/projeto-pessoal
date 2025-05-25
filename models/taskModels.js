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
      'INSERT INTO tasks (titulo, confirmar, data, id_usuario, id_evento, id_anotacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [data.titulo, data.confirmar, data.data, data.id_usuario, data.id_evento, data.id_anotacao]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE tasks SET ttitulo = $1, confirmar = $2, data = $3, id_usuario = $4, id_evento = $5, id_anotacao = $6 WHERE id = $7 RETURNING *',
      [data.titulo, data.confirmar, data.data, data.id_usuario, data.id_evento, data.id_anotacao, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Task;