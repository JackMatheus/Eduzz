-- https://web.digitalinnovation.one/course/nodejs-com-bancos-de-dados-relacionais-sql/learning/73cda550-7f1d-48d1-b856-68b353ef4897?back=/track/eduzz-fullstack-developer
-- Primeiros passos para a criação do banco de dados e tabelas
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (username, password) VALUES ('jackson', crypt('123456', 'my_salt'));

