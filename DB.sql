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
(DEFAULT, 'Ítalo César Ferreira da Costa', 'icfcosta', md5('123'), '2017-11-28');

SELECT * 
FROM tb_users;

CREATE TABLE tb_tickets (
id		SERIAL,
user_id		INTEGER,
name		VARCHAR(100),
email		VARCHAR(100),
descryption	VARCHAR(255),
entry_date	VARCHAR(100),
update_at	VARCHAR(100),
CONSTRAINT pk_tb_tickets_id PRIMARY KEY (id),
CONSTRAINT fk_tb_tickets_user_id FOREIGN KEY (user_id) REFERENCES tb_users (id)
);

INSERT INTO tb_tickets VALUES
(DEFAULT, 1, 'Solicitação de Acesso', 'olatiferreira@gmail.com', 'Solicito acesso ao sistema sikoni', '2017-11-28');

SELECT *
FROM tb_tickets;

