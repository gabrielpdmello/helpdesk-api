const db = require('../config/database');

class CategoryModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM categorias');
    return rows;
  }
}

module.exports = CategoryModel;