CREATE DATABASE "sikoni"
TEMPLATE = 'template0'
ENCODING = 'UTF8'
CONNECTION LIMIT -1;

CREATE TABLE tb_users (
id		SERIAL,
name		VARCHAR(100),
login		VARCHAR(100),
password	VARCHAR(255),
entry_date	VARCHAR(100),
update_at	VARCHAR(100),
CONSTRAINT pk_tb_users_id PRIMARY KEY (id)
);

INSERT INTO tb_users VALUES
(DEFAULT, 'Administrador', 'admin', md5('admin'), '2017-11-28');

SELECT * 
FROM tb_users;

CREATE TABLE tb_tickets (
id		SERIAL,
name		VARCHAR(100),
email		VARCHAR(100),
descryption	VARCHAR(255),
status		VARCHAR(100),
entry_date	VARCHAR(100),
update_at	VARCHAR(100),
CONSTRAINT pk_tb_tickets_id PRIMARY KEY (id)
);

INSERT INTO tb_tickets VALUES
(DEFAULT, 'Solicitação de Acesso', 'sikoni@sikoni.com', 'Solicito acesso ao sistema sikoni', 'Em processamento', '2017-11-28');

SELECT *
FROM tb_tickets;