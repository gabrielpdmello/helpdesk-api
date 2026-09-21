const RequesterService = require("../services/requesterService");

class RequesterController {
  static async getAll(req, res) {
    try {
      const requesters = await RequesterService.getAllRequesters();
      return res.status(200).json(requesters);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Id deve ser um número.", id: req.params.id });
    }

    try {
      const requester = await RequesterService.getRequesterById(id);
      return res.status(200).json(requester);
    } catch (error) {
      return res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async post(req, res) {
    const { nome, email, setor } = req.body;

    if (!nome || !email || !setor) {
      return res
        .status(400)
        .json({ message: "nome, email e setor são obrigatórios." });
    }

    try {
      const requester = await RequesterService.createRequester(
        nome,
        email,
        setor,
      );
      return res.status(200).json(requester);
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          message: "Este email já está cadastrado.",
          email: email,
        });
      }
      return res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async put(req, res) {
    const id = Number(req.params.id);
    const { nome, email, setor } = req.body;

    if (Number.isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Id deve ser um número.", id: req.params.id });
    }

    if (!nome || !email || !setor) {
      return res
        .status(400)
        .json({ message: "nome, email e setor são obrigatórios." });
    }

    try {
      await RequesterService.updateRequester(id, nome, email, setor);
      return res.sendStatus(200);
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          message: "Este email já está cadastrado.",
          email: email,
        });
      }
      return res.status(error.status || 500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Id deve ser um número.", id: req.params.id });
    }

    try {
      await RequesterService.deleteRequester(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(error.status || 500).json({ error: error.message });
    }
  }
}

module.exports = RequesterController;
