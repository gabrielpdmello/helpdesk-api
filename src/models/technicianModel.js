const db = require("../config/database");

class TechnicianModel {
  static async findAll() {
    const [rows] = await db.query("SELECT * FROM tecnicos order by id");
    return rows;
  }

  static async findById(id) {
    const [row] = await db.query("SELECT * FROM tecnicos where id = ?", id);
    if (row.length < 1) {
      return null;
    }
    return row;
  }
}

module.exports = TechnicianModel;
