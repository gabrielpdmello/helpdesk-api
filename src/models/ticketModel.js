const db = require("../config/database");

class TicketModel {
  static async findAll() {
    const [rows] = await db.query(`
      select 
      c.id, 
      c.titulo, 
      c.descricao, 
      c.prioridade, 
      c.status, 
      c.solucao, 
      c.criado_em, 
      s.nome as "solicitante", 
      s.setor,
      c2.nome as "categoria", 
      t.nome as "tecnico" 
      from chamados c
      inner join solicitantes s on c.solicitante_id = s.id
      inner join categorias c2 on c.categoria_id = c2.id 
      left join tecnicos t on c.tecnico_id = t.id 
      `);
    return rows;
  }

  static async add(
    titulo,
    descricao,
    prioridade,
    solicitante_id,
    categoria_id,
  ) {
    const [row] = await db.query(
      `
      INSERT INTO chamados
      (titulo, descricao, prioridade, solicitante_id, categoria_id)
      VALUES
      (?, ?, ?, ?, ?)
      `,
      [titulo, descricao, prioridade, solicitante_id, categoria_id],
    );

    const ticket = await this.findById(await row.insertId);

    return ticket;
  }

  static async findById(id) {
    const [row] = await db.query(`
      select 
      c.id, 
      c.titulo, 
      c.descricao, 
      c.prioridade, 
      c.status, 
      c.solucao, 
      c.criado_em, 
      s.nome as "solicitante", 
      s.setor,
      c2.nome as "categoria", 
      t.nome as "tecnico" 
      from chamados c
      inner join solicitantes s on c.solicitante_id = s.id
      inner join categorias c2 on c.categoria_id = c2.id 
      left join tecnicos t on c.tecnico_id = t.id 
      where c.id = ?	
      `, id);

    if (row.length < 1) {
      return null;
    }

    return row;
  }
}

module.exports = TicketModel;
