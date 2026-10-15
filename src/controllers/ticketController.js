const TicketService = require("../services/ticketService");

class TicketController {
  static async getAll(req, res) {
    const tickets = await TicketService.getAll();
    return res.status(200).json(tickets);
  }

  static async addTicket(req, res) {
    const { titulo, descricao, prioridade } = req.body;
    const solicitanteId = Number(req.body.solicitanteId);
    const categoriaId = Number(req.body.categoriaId);

    if (
      solicitanteId === undefined ||
      categoriaId === undefined ||
      titulo === undefined ||
      descricao === undefined ||
      prioridade === undefined
    ) {
      return res.status(400).json({
        message:
          "Os campos solicitanteId, categoriaId, titulo, descricao, e prioridade são obrigatórios.",
        solicitanteId: req.body.solicitanteId,
        categoriaId: req.body.categoriaId,
      });
    }

    if (Number.isNaN(solicitanteId) || Number.isNaN(categoriaId)) {
      return res.status(400).json({
        message: "Os campos solicitanteId e categoriaId devem ser números.",
        solicitanteId: req.body.solicitanteId,
        categoriaId: req.body.categoriaId,
      });
    }

    const ticket = await TicketService.createTicket(
      titulo,
      descricao,
      prioridade,
      solicitanteId,
      categoriaId,
    );

    return res.status(201).json(ticket);
  }

  static async getTicketById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({
        message: "Id deve ser um número.",
        id: req.params.id,
      });
    }

    const ticket = await TicketService.getById(id);
    return res.status(200).json(ticket);
  }
}

module.exports = TicketController;
