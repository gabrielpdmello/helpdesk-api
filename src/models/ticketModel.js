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
      order by c.id
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
    const [row] = await db.query(
      `
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
      `,
      id,
    );

    if (row.length < 1) {
      return null;
    }

    return row;
  }

  // atualiza somente os campos com valores fornecidos
  static async update(id, fields) {
    // transforma o objeto fields em um array de arrays, onde cada array é um par chave e valor
    const entries = Object.entries(fields).filter(
      ([_, value]) => value !== undefined, // é removido os arrays com valor undefined
    );

    if (entries.length === 0) {
      const error = new Error("Nenhum campo para atualizar.");
      error.status = 400;
      throw error;
    }

    const columns = entries.map(([key]) => `${key} = ?`).join(", ");
    const values = entries.map(([_, value]) => value);

    const sql = `
    UPDATE chamados
    SET ${columns}
    WHERE id = ?
  `;

    await db.query(sql, [...values, id]);

    const ticket = await this.findById(id);

    return ticket;
  }

  static async deleteById(id) {
    const [row] = await db.query(
      `DELETE FROM chamados
        WHERE id = ?`,
      [id],
    );
    return row;
  }
}

module.exports = TicketModel;
