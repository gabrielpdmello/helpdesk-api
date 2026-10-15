const TicketModel = require("../models/ticketModel");
const RequesterModel = require("../models/requesterModel");
const CategoryModel = require("../models/categoryModel");

class TicketService {
  static async getAll() {
    return await TicketModel.findAll();
  }

  static async createTicket(
    titulo,
    descricao,
    prioridade,
    solicitante_id,
    categoria_id,
  ) {
    const solicitante = await RequesterModel.findById(solicitante_id);
    if (!solicitante) {
      const error = new Error("Solicitante não encontrado.");
      error.status = 404;
      throw error;
    }

    const categoria = await CategoryModel.findById(categoria_id);
    if (!categoria) {
      const error = new Error("Categoria não encontrada.");
      error.status = 404;
      throw error;
    }

    return await TicketModel.add(
      titulo,
      descricao,
      prioridade,
      solicitante_id,
      categoria_id,
    );
  }

  static async getById(id) {
    const ticket = await TicketModel.findById(id);
    return ticket;
  }
}

module.exports = TicketService;
