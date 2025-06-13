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
      `INSERT INTO anotacaos (titulo, descricao) VALUES ($1, $2) RETURNING *`,
      [data.titulo, data.descricao]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE anotacaos SET titulo = $1, descricao = $2 WHERE id = $3 RETURNING *`,
      [data.titulo, data.descricao, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM anotacaos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Anotacao;