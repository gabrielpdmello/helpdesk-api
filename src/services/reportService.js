const TicketModel = require("../models/ticketModel");

class CategoryService {
  static async getTicketCountPerStatus() {
    return await TicketModel.getTicketCountPerStatus();
  }
}

module.exports = CategoryService;
