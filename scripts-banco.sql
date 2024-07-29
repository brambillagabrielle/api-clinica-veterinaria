-- CREATE DATABASE bdclinicaveterinaria;
--- \c bdclinicaveterinaria
--- \d (listas tabelas)

-- criação da tabela usuários
CREATE TABLE usuarios (
    email VARCHAR(50) NOT NULL PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(30) NOT NULL
);

-- inserir dados na tabela usuário
INSERT INTO usuarios(email, nome, senha) VALUES
    ('gabriellebrambilla@gmail.com', 'Gabrielle Brambilla', '123456'), 
    ('joaosilva@gmail.com', 'Joao Silva', '456789'),
    ('mariacardoso@gmail.com', 'Maria Cardoso', '999999');

-- criação da tabela pacientes
--- C = Cachorro / G = Gato / A = Ave / R = Roedor
CREATE TABLE pacientes (
    id SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie CHAR(1) NOT NULL,
    tutor VARCHAR(50) NOT NULL,
    CHECK (especie = 'C' OR especie = 'G' OR especie = 'A' OR especie = 'R'),
    FOREIGN KEY (tutor) REFERENCES usuarios(email)
);

-- criação da tabela consultas
CREATE TABLE consultas (
    id SERIAL NOT NULL PRIMARY KEY,
    paciente INTEGER NOT NULL,
    data TIMESTAMP NOT NULL,
    realizada BOOLEAN NOT NULL DEFAULT false,
    observacoes VARCHAR(100) NOT NULL,
    FOREIGN KEY (paciente) REFERENCES pacientes(id)
);

-- inserir dados na tabela pacientes
INSERT INTO pacientes (nome, especie, tutor) VALUES
    ('Princesa', 'C', 'mariacardoso@gmail.com'),
    ('Perebas', 'G', 'gabriellebrambilla@gmail.com'),
    ('Cocada', 'A', 'mariacardoso@gmail.com'),
    ('Romeu', 'A', 'mariacardoso@gmail.com');

-- inserir dados na tabela consultas
INSERT INTO consultas (paciente, data, observacoes) VALUES
    (1, '2024-08-10 16:30:00.00000-00', 'Castração'),
    (2, '2024-07-30 14:00:00.00000-00', 'Rotina'),
    (2, '2024-08-30 15:15:00.00000-00', 'Rotina'),
    (4, '2024-07-25 11:00:00.00000-00', 'Pontos');