CREATE TABLE board (
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `subject` VARCHAR(100) NOT NULL,
    `content` TEXT NULL,
    `name` VARCHAR(30) NOT NULL,
    `date` TIMESTAMP default current_timestamp NOT NULL,
    `like` INT(11) default 0 NOT NULL,
    `hit` INT(11) default 0 NOT NULL
)CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO board(subject,content,name) VALUES("subject3","content3","name3");

SELECT * FROM board;
INSERT INTO board(필드1,필드2...) VALUES(1,2,...)

DROP table board;

UPDATE
DELETE