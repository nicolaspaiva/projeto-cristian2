CREATE DATABASE IF NOT EXISTS company_questions;

USE company_questions;

CREATE TABLE IF NOT EXISTS company
( 
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    CONSTRAINT `company_pk` PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS store
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `company_id` INT(11) NOT NULL,
    CONSTRAINT `store_pk` PRIMARY KEY (`id`),
    CONSTRAINT `store_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`)
);

CREATE TABLE IF NOT EXISTS product
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    `store_id` INT(11) NOT NULL,
    `coin` INT (11) NULL,
    CONSTRAINT `product_pk` PRIMARY KEY (`id`),
    CONSTRAINT `product_store_fk` FOREIGN KEY ( `store_id` ) REFERENCES store (`id`)
);

CREATE TABLE IF NOT EXISTS user
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(20) NOT NULL,
    `last_name` VARCHAR(60) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(75) NOT NULL,
    `company_id` INT(11) NOT NULL,
    CONSTRAINT `user_pk` PRIMARY KEY (`id`),
    CONSTRAINT `user_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`)
);

CREATE TABLE IF NOT EXISTS category
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `color` VARCHAR(10) NOT NULL,
    `logo` VARCHAR(10) NOT NULL,
    `company_id` INT(11) NOT NULL,
    CONSTRAINT `category_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`),
    CONSTRAINT `category_pk` PRIMARY KEY (`id`)
);  

CREATE TABLE IF NOT EXISTS difficulty
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `initials` VARCHAR(5) NOT NULL,
    CONSTRAINT `difficulty_pk` PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS adventure
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `coin` int(11) NULL,
    `question_coin` int(11) NULL,
    `company_id` INT(11) NOT NULL,
    `difficulty_id` INT(11) NOT NULL,
    `category_id` INT(11) NOT NULL,
    CONSTRAINT `adventure_pk` PRIMARY KEY (`id`),
    CONSTRAINT `adventure_category_fk` FOREIGN KEY ( `category_id` ) REFERENCES category (`id`),
    CONSTRAINT `adventure_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`),
    CONSTRAINT `question_difficulty_fk` FOREIGN KEY ( `difficulty_id` ) REFERENCES difficulty (`id`)
);

CREATE TABLE IF NOT EXISTS question
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `company_id` INT(11) NOT NULL,
    `difficulty_id` INT(11) NOT NULL,
    `adventure_id` INT(11) NOT NULL,
    CONSTRAINT `question_pk` PRIMARY KEY (`id`),
    CONSTRAINT `question_adventure_fk` FOREIGN KEY ( `adventure_id` ) REFERENCES adventure (`id`),
    CONSTRAINT `question_company_fk` FOREIGN KEY ( `company_id` ) REFERENCES company (`id`)
);

CREATE TABLE IF NOT EXISTS question_options
(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `correct` BOOLEAN NOT NULL,
    `question_id` INT(11) NOT NULL,
    CONSTRAINT `question_options_pk` PRIMARY KEY (`id`),
    CONSTRAINT `question_options_question_fk` FOREIGN KEY ( `question_id` ) REFERENCES question (`id`)
);



