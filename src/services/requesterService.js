const RequesterModel = require("../models/requesterModel");

class RequesterService {
  static async getAllRequesters() {
    return await RequesterModel.findAll();
  }

  static async getRequesterById(id) {
    const requester = await RequesterModel.findById(id);

    if (!requester) {
      const error = new Error("Solicitante não encontrado.");
      error.status = 404;
      throw error;
    }

    return requester;
  }

  static async createRequester(nome, email, setor) {
    try {
      const requester = await RequesterModel.create(nome, email, setor);
      return requester;
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        const error = new Error("Este email já está cadastrado.");
        error.status = 409;
        throw error;
      }
      throw err;
    }
  }

  static async updateRequester(id, nome, email, setor) {
    try {
      const row = await RequesterModel.updateById(id, nome, email, setor);

      if (row.affectedRows === 0) {
        const error = new Error("Solicitante não encontrado.");
        error.status = 404;
        throw error;
      }
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        const error = new Error("Este email já está cadastrado.");
        error.status = 409;
        throw error;
      }
      throw err;
    }
  }

  static async deleteRequester(id) {
    const row = await RequesterModel.deleteById(id);
    if (row.affectedRows === 0) {
      const error = new Error("Solicitante não encontrado.");
      error.status = 404;
      throw error;
    }
  }
}

module.exports = RequesterService;
