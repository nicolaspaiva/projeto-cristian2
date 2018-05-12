-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 12-Maio-2018 às 23:09
-- Versão do servidor: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company_questions`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `adventure`
--

CREATE TABLE `adventure` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `coin` int(11) DEFAULT NULL,
  `question_coin` int(11) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `difficulty_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `adventure`
--

INSERT INTO `adventure` (`id`, `name`, `coin`, `question_coin`, `company_id`, `difficulty_id`, `category_id`) VALUES
(1, 'Feedback sobre a plataforma', 200, 5, 1, 1, 2),
(2, 'Atentedente nível 1', 500, 10, 1, 1, 1),
(3, 'Atentedente nível 2', 650, 10, 1, 1, 1),
(4, 'Cuidados Básicos', 200, 5, 1, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `color` varchar(10) NOT NULL,
  `logo` varchar(10) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `category`
--

INSERT INTO `category` (`id`, `name`, `color`, `logo`, `company_id`) VALUES
(1, 'Oi', '#9E29FF', '/assets/lo', 1),
(2, 'Best Choice', '#00CF77', '/assets/lo', 1),
(3, 'Primeiros Socorros', '#F00', '/assets/lo', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `company`
--

INSERT INTO `company` (`id`, `name`) VALUES
(1, 'oi');

-- --------------------------------------------------------

--
-- Estrutura da tabela `difficulty`
--

CREATE TABLE `difficulty` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `initials` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `difficulty`
--

INSERT INTO `difficulty` (`id`, `name`, `initials`) VALUES
(1, 'Fácil', 'FC'),
(2, 'Médio', 'MD'),
(3, 'Difícil', 'DF'),
(4, 'Desafio', 'DSF');

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `store_id` int(11) NOT NULL,
  `coin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  `difficulty_id` int(11) NOT NULL,
  `adventure_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `question_options`
--

CREATE TABLE `question_options` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `correct` tinyint(1) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(75) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adventure`
--
ALTER TABLE `adventure`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adventure_category_fk` (`category_id`),
  ADD KEY `adventure_company_fk` (`company_id`),
  ADD KEY `question_difficulty_fk` (`difficulty_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_company_fk` (`company_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `difficulty`
--
ALTER TABLE `difficulty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_store_fk` (`store_id`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_adventure_fk` (`adventure_id`),
  ADD KEY `question_company_fk` (`company_id`);

--
-- Indexes for table `question_options`
--
ALTER TABLE `question_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_options_question_fk` (`question_id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`),
  ADD KEY `store_company_fk` (`company_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_company_fk` (`company_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adventure`
--
ALTER TABLE `adventure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `difficulty`
--
ALTER TABLE `difficulty`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_options`
--
ALTER TABLE `question_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `adventure`
--
ALTER TABLE `adventure`
  ADD CONSTRAINT `adventure_category_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `adventure_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `question_difficulty_fk` FOREIGN KEY (`difficulty_id`) REFERENCES `difficulty` (`id`);

--
-- Limitadores para a tabela `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);

--
-- Limitadores para a tabela `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_store_fk` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`);

--
-- Limitadores para a tabela `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_adventure_fk` FOREIGN KEY (`adventure_id`) REFERENCES `adventure` (`id`),
  ADD CONSTRAINT `question_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);

--
-- Limitadores para a tabela `question_options`
--
ALTER TABLE `question_options`
  ADD CONSTRAINT `question_options_question_fk` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Limitadores para a tabela `store`
--
ALTER TABLE `store`
  ADD CONSTRAINT `store_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);

--
-- Limitadores para a tabela `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
