const db = require('../config/db');

class Anotacao {
  static async getAll() {
    const result = await db.query('SELECT * FROM anotacaos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM anotacaos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO anotacaos (titulo, descricao, id_task, id_evento) VALUES ($1, $2, $3, $4) RETURNING *`,
      [data.titulo, data.descricao, data.id_task, data.id_evento]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE anotacaos SET titulo = $1, descricao = $2, id_task = $3, id_evento = $4 WHERE id = $5 RETURNING *`,
      [data.titulo, data.descricao, data.id_task, data.id_evento, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM anotacaos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Anotacao;