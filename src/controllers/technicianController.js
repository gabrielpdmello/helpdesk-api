const TechinicianService = require("../services/technicianService");

class TechnicianController {
  static async getAll(req, res) {
    try {
      const technics = await TechinicianService.getAllTechnicians();
      return res.status(200).json(technics);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TechnicianController;
