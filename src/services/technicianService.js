const TechnicianModel = require("../models/technicianModel");

class TechinicianService {
  static async getAllTechnicians() {
    return await TechnicianModel.findAll();
  }
}

module.exports = TechinicianService;
