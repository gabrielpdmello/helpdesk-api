const TechinicianService = require("../services/technicianService");

class TechnicianController {
  static async getAll(req, res) {
    const technics = await TechinicianService.getAllTechnicians();
    return res.status(200).json(technics);
  }
}

module.exports = TechnicianController;
