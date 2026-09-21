USE helpdesk_api;

CREATE TABLE IF NOT EXISTS solicitantes (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL UNIQUE,
 setor VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100) NOT NULL UNIQUE,
 descricao VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS tecnicos (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL unique
);

CREATE TABLE IF NOT EXISTS chamados (
 id INT AUTO_INCREMENT PRIMARY KEY,
 titulo VARCHAR(200) NOT NULL,
 descricao TEXT NOT NULL,
 prioridade VARCHAR(10) NOT NULL,
 status VARCHAR(20) NOT NULL default 'ABERTO', 
 solucao TEXT,
 criado_em TIMESTAMP DEFAULT current_timestamp,
 solicitante_id INT NOT NULL,
 categoria_id INT NOT NULL,
 tecnico_id INT,
 FOREIGN KEY (solicitante_id) REFERENCES solicitantes(id),
 FOREIGN KEY (categoria_id) REFERENCES categorias(id),
 FOREIGN KEY (tecnico_id) REFERENCES tecnicos(id),
 CONSTRAINT chk_prioridade
  CHECK (prioridade IN ('BAIXA', 'MEDIA', 'ALTA')),
 CONSTRAINT chk_status
  CHECK (status IN ('ABERTO', 'EM_ATENDIMENTO', 'CONCLUIDO'))
);

