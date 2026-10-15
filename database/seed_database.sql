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

INSERT INTO chamados
(titulo, descricao, prioridade, status, solucao,
solicitante_id, categoria_id, tecnico_id)
VALUES
(
  'Computador não liga',
  'O computador não liga após pressionar o botão de energia.',
  'ALTA',
  'ABERTO',
  NULL,
  1, 1, NULL
),
(
  'Erro ao abrir o sistema financeiro',
  'O sistema financeiro apresenta uma mensagem de erro ao iniciar.',
  'ALTA',
  'EM_ATENDIMENTO',
  NULL,
  1, 2, 1
),
(
  'Internet instável',
  'A conexão com a internet cai diversas vezes durante o expediente.',
  'MEDIA',
  'EM_ATENDIMENTO',
  NULL,
  3, 3, 3
),
(
  'Solicitação de acesso ao sistema',
  'Solicito acesso ao sistema de gestão de documentos.',
  'BAIXA',
  'ABERTO',
  NULL,
  2, 4, NULL
),
(
  'Teclado com teclas defeituosas',
  'Algumas teclas do teclado não respondem corretamente.',
  'BAIXA',
  'CONCLUIDO',
  'O teclado foi substituído por um novo equipamento.',
  4, 1, 2
),
(
  'Instalação de software',
  'Solicito a instalação de um programa para edição de documentos.',
  'MEDIA',
  'CONCLUIDO',
  'O software foi instalado e testado com sucesso.',
  2, 2, 4
),
(
  'Senha expirada',
  'Não consigo acessar minha conta porque a senha expirou.',
  'MEDIA',
  'EM_ATENDIMENTO',
  NULL,
  3, 4, 1
);

