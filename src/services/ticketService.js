const TicketModel = require("../models/ticketModel");
const RequesterModel = require("../models/requesterModel");
const CategoryModel = require("../models/categoryModel");
const TechnicianModel = require("../models/technicianModel");

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

    if (!ticket) {
      const error = new Error("Chamado não encontrado.");
      error.status = 404;
      throw error;
    }

    return ticket;
  }

  static async update(id, prioridade, status, solucao, tecnicoId) {
    const ticket = await TicketModel.findById(id);

    if (!ticket) {
      const error = new Error("Ticket não encontrado.");
      error.status = 404;
      throw error;
    }

    if (tecnicoId) {
      const tecnico = await TechnicianModel.findById(tecnicoId);

      if (!tecnico) {
        const error = new Error("Técnico não encontrado.");
        error.status = 404;
        throw error;
      }
    }

    const fields = {
      prioridade: prioridade,
      status: status,
      solucao: solucao,
      tecnico_id: tecnicoId,
    };

    const ticketPatch = await TicketModel.update(id, fields);
    return ticketPatch;
  }

  static async delete(id) {
    try {
      const row = await TicketModel.deleteById(id);
      if (row.affectedRows === 0) {
        const error = new Error("Chamado não encontrado.");
        error.status = 404;
        throw error;
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = TicketService;
