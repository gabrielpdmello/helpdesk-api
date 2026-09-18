const db = require('../config/database');

class TechnicianModel {
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM tecnicos');
    return rows;
  }
}

module.exports = TechnicianModel;