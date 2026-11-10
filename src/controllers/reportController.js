const ReportService = require("../services/reportService");

class ReportController {
  static async getTicketCountPerStatus(req, res) {
    const tickets = await ReportService.getTicketCountPerStatus();
    return res.status(200).json(tickets);
  }
}

module.exports = ReportController;
