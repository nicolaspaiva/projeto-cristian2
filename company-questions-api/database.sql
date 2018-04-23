CREATE DATABASE IF NOT EXISTS company_questions;

USE company_questions;

CREATE TABLE company
( 
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    CONSTRAINT `company_pk` PRIMARY KEY (`id`)
);

CREATE TABLE store
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `company_id` INT(11) NOT NULL,
    CONSTRAINT `store_pk` PRIMARY KEY (`id`),
    CONSTRAINT `store_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`)
);

CREATE TABLE product
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    `store_id` INT(11) NOT NULL,
    `coin` INT (11) NULL,
    CONSTRAINT `product_pk` PRIMARY KEY (`id`),
    CONSTRAINT `product_store_fk` FOREIGN KEY ( `store_id` ) REFERENCES store (`id`)
);

CREATE TABLE user
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(60) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    password VARCHAR(75) NOT NULL,
    `company_id` INT(11) NOT NULL,
    CONSTRAINT `user_pk` PRIMARY KEY (`id`)
    CONSTRAINT `user_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`),
);

CREATE TABLE difficulty
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `initials` VARCHAR(5) NOT NULL,
    CONSTRAINT `difficulty_pk` PRIMARY KEY (`id`)
);

CREATE TABLE adventure
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `coin` int(11) NULL,
    `company_id` INT(11) NOT NULL,
    `difficulty_id` INT(11) NOT NULL,
    CONSTRAINT `adventure_pk` PRIMARY KEY (`id`),
    CONSTRAINT `adventure_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`),
    CONSTRAINT `question_difficulty_fk` FOREIGN KEY ( `difficulty_id` ) REFERENCES difficulty (`id`)
);

CREATE TABLE question
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(65) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `coin` int(11) NULL,
    `company_id` INT(11) NOT NULL,
    `difficulty_id` INT(11) NOT NULL,
    CONSTRAINT `question_pk` PRIMARY KEY (`id`),
    CONSTRAINT `question_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`),
    CONSTRAINT `question_difficulty_fk` FOREIGN KEY ( `difficulty_id` ) REFERENCES difficulty (`id`)
);




