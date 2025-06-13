CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS enderecos (
    id SERIAL PRIMARY KEY,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS eventos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    prioridade VARCHAR(20),
    id_usuario INT NOT NULL,
    id_endereco INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_endereco) REFERENCES enderecos(id)
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    id_usuario INT NOT NULL,
    id_anotacao INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
);

CREATE TABLE IF NOT EXISTS anotacaos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
);

ALTER TABLE tasks
    ADD CONSTRAINT fk_tasks_anotacao
    FOREIGN KEY (id_anotacao) REFERENCES anotacaos(id);

INSERT INTO usuarios (id, nome, nascimento, email, senha) VALUES
(1, 'João da Silva', '1990-05-12', 'joao.silva@email.com', 'senha123'),
(2, 'Maria Oliveira', '1985-08-25', 'maria.oliveira@email.com', '123senha'),
(3, 'Carlos Souza', '1992-11-02', 'carlos.souza@email.com', 'abc123'),
(4, 'Ana Martins', '1998-03-18', 'ana.martins@email.com', 'minhasenha'),
(5, 'Fernanda Lima', '1995-07-10', 'fernanda.lima@email.com', 'limaf123');

INSERT INTO enderecos (id, rua, numero, bairro) VALUES
(1, 'Rua das Flores', 123, 'Jardim América'),
(2, 'Avenida Brasil', 456, 'Centro'),
(3, 'Rua dos Lírios', 789, 'Vila Nova'),
(4, 'Rua das Palmeiras', 321, 'Santa Clara'),
(5, 'Rua Dom Pedro', 654, 'Alvorada');

INSERT INTO eventos (id, titulo, descricao, data_inicio, data_final, prioridade, id_usuario, id_endereco) VALUES
(1, 'Reunião de Trabalho', 'Reunião mensal com a equipe de TI', '2025-06-01', '2025-06-01', 'Alta', 1, 1),
(2, 'Consulta Médica', 'Check-up anual', '2025-06-03', '2025-06-03', 'Média', 2, 2),
(3, 'Aniversário da Ana', 'Festa de aniversário em casa', '2025-07-10', '2025-07-10', 'Baixa', 4, 3),
(4, 'Workshop de Marketing', 'Evento online de capacitação', '2025-06-15', '2025-06-16', 'Alta', 5, NULL),
(5, 'Entrega de Projeto', 'Prazo final para entrega do sistema', '2025-06-20', '2025-06-20', 'Alta', 1, NULL);

INSERT INTO anotacaos (id, titulo, descricao, id_task, id_evento) VALUES
(1, 'Tópicos da Reunião', 'Focar na integração do sistema', NULL, 1),
(2, 'Perguntas para o médico', 'Levar exames anteriores', NULL, 2),
(3, 'Lista de compras', 'Comprar bolo e refrigerante', NULL, 3),
(4, 'Dicas de Marketing', 'Anotar ferramentas mencionadas', NULL, 4),
(5, 'Checklist do Projeto', 'Testar login, cadastro e agendamentos', NULL, 5);

INSERT INTO tasks (id, titulo, data, id_usuario, id_anotacao) VALUES
(1, 'Preparar apresentação', '2025-05-30', 1, 1),
(2, 'Imprimir exames', '2025-06-02', 2, 2),
(3, 'Comprar bolo', '2025-07-09', 4, 3),
(4, 'Assistir palestra', '2025-06-15', 5, 4),
(5, 'Testar sistema', '2025-06-19', 1, 5);

SELECT setval('usuarios_id_seq', (SELECT MAX(id) FROM usuarios));
SELECT setval('tasks_id_seq', (SELECT MAX(id) FROM tasks));