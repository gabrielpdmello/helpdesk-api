USE helpdesk_api;

INSERT INTO categorias (nome, descricao) VALUES
('Hardware', 'Problemas físicos em computadores e periféricos'),
('Software', 'Erros ou instalação de programas e sistemas'),
('Rede', 'Falhas de conexão, internet e infraestrutura de rede'),
('Acesso', 'Solicitações de login, senha e permissões de acesso');

INSERT INTO tecnicos (nome, email) VALUES
('João Silva', 'joao.silva@empresa.com'),
('Mariana Costa', 'mariana.costa@empresa.com'),
('Pedro Almeida', 'pedro.almeida@empresa.com'),
('Camila Santos', 'camila.santos@empresa.com');

INSERT INTO solicitantes (nome, email, setor) VALUES
('Gabriel Silva', 'gabriel.silva@empresa.com', 'Financeiro'),
('Mariana Souza', 'mariana.souza@empresa.com', 'Recursos Humanos'),
('Carlos Oliveira', 'carlos.oliveira@empresa.com', 'TI'),
('Juliana Costa', 'juliana.costa@empresa.com', 'Comercial');