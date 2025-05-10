CREATE TABLE IF NOT EXISTS usuario (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS endereco (
    id INT PRIMARY KEY,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS evento (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    prioridade VARCHAR(20),
    id_usuario INT NOT NULL,
    id_endereco INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_endereco) REFERENCES endereco(id)
);

CREATE TABLE IF NOT EXISTS task (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    confirmar BOOLEAN DEFAULT 0,
    data DATE NOT NULL,
    id_usuario INT NOT NULL,
    id_evento INT,
    id_anotacao INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_evento) REFERENCES evento(id),
    FOREIGN KEY (id_anotacao) REFERENCES anotacao(id)
);

CREATE TABLE IF NOT EXISTS anotacao (
    id INT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    id_task INT,
    id_evento INT,
    FOREIGN KEY (id_task) REFERENCES task(id),
    FOREIGN KEY (id_evento) REFERENCES evento(id)
);

