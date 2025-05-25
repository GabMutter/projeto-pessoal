const db = require('../config/db');

class Endereco {
  static async getAll() {
    const result = await db.query('SELECT * FROM enderecos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM enderecos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO enderecos (rua, numero, bairo) VALUES ($1, $2, $3) RETURNING *',
      [data.rua, data.numero, data.bairo]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE enderecos SET rua = $1, numero = $2, senha = $3, WHERE id = $4 RETURNING *',
      [data.rua, data.numero, data.bairo, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM enderecos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Endereco;