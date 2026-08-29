CREATE DATABASE codex_ashes;

USE codex_ashes;

CREATE TABLE musica(
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    jogo VARCHAR(100) NOT NULL,
    compositor VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    local VARCHAR(150) NOT NULL,
    duracao VARCHAR(10) NOT NULL
);

select * from musica;