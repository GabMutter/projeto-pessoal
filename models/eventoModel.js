const db = require('../config/db');

class Evento {
  static async getAll() {
    const result = await db.query('SELECT * FROM eventos');
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM eventos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO eventos (titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [data.titulo, data.descricao, data.data_inicio, data.data_final, data.prioridade, data.id_usuario, data.id_endereco]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      `UPDATE eventos SET titulo = $1, descricao = $2, data_inicio = $3, data_final = $4, prioridade = $5, id_usuario = $6, id_endereco = $7 WHERE id = $8 RETURNING *`,
      [data.titulo, data.descricao, data.data_inicio, data.data_final, data.prioridade, data.id_usuario, data.id_endereco, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM eventos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = Evento;
