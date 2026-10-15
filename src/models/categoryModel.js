const db = require('../config/database');

class CategoryModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM categorias');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM categorias where id = ?', [id]);
    return rows;
  }
}

module.exports = CategoryModel;