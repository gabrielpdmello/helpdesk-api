const db = require("../config/database");

class RequesterModel {
  static async findAll() {
    const [rows] = await db.query("SELECT * FROM solicitantes");
    return rows;
  }

  static async findById(id) {
    const [row] = await db.query("SELECT * FROM solicitantes where id = ?", id);

    if (row.length < 1) {
      return null;
    }

    return row;
  }

  static async create(nome, email, setor) {
    const [row] = await db.query(
      `INSERT INTO solicitantes (nome, email, setor) VALUES (?, ?, ?)`,
      [nome, email, setor],
    );

    const requester = await this.findById(await row.insertId);

    return requester;
  }

  static async updateById(id, nome, email, setor) {
    const [row] = await db.query(
      `UPDATE solicitantes SET
      nome = ?,
      email = ?,
      setor = ?
      WHERE id = ?`,
      [nome, email, setor, id],
    );

    return row;
  }

  static async deleteById(id) {
    const [row] = await db.query(
      `DELETE FROM solicitantes
        WHERE id = ?`,
      [id],
    );
    return row;
  }
}

module.exports = RequesterModel;
