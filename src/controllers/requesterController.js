const RequesterService = require("../services/requesterService");

class RequesterController {
  static async getAll(req, res) {
    const requesters = await RequesterService.getAllRequesters();
    return res.status(200).json(requesters);
  }

  static async getById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Id deve ser um número.", id: req.params.id });
    }

    const requester = await RequesterService.getRequesterById(id);
    return res.status(200).json(requester);
  }

  static async post(req, res) {
    const { nome, email, setor } = req.body;

    if (!nome || !email || !setor) {
      return res
        .status(400)
        .json({ message: "nome, email e setor são obrigatórios." });
    }

    const requester = await RequesterService.createRequester(
      nome,
      email,
      setor,
    );
    return res.status(200).json(requester);
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

    await RequesterService.updateRequester(id, nome, email, setor);
    return res.sendStatus(200);
  }

  static async delete(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Id deve ser um número.", id: req.params.id });
    }

    await RequesterService.deleteRequester(id);
    return res.sendStatus(204);
  }
}

module.exports = RequesterController;
