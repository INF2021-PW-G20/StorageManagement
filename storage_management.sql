-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Jun-2021 às 23:48
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `storage_management`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `inputoutput`
--

CREATE TABLE `inputoutput` (
  `id` bigint(20) NOT NULL,
  `date_time` datetime DEFAULT NULL,
  `quantity` float DEFAULT NULL,
  `operation` tinyint(1) DEFAULT NULL,
  `storage_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `inputoutput`
--

INSERT INTO `inputoutput` (`id`, `date_time`, `quantity`, `operation`, `storage_id`, `product_id`) VALUES
(21, '2021-05-22 00:00:00', 12, 1, 10, 96),
(22, '2021-05-22 00:00:00', 12, 1, 10, 96),
(23, '2021-05-22 00:00:00', 12, 1, 10, 96),
(26, '2021-05-22 00:00:00', 12, 1, 10, 96),
(27, '2021-05-22 00:00:00', 3, 0, 10, 96),
(28, '2021-05-22 00:00:00', 3, 0, 10, 96),
(29, '2021-05-22 00:00:00', 3, 1, 10, 96),
(30, '2021-05-22 00:00:00', 2, 0, 10, 96),
(31, '2021-04-17 20:10:17', 10, 1, 20, 35),
(32, '2021-04-17 20:10:17', 10, 1, 35, 140),
(33, '2021-05-17 20:10:17', 100, 1, 35, 140),
(34, '2021-03-17 20:10:17', 200, 1, 30, 111),
(35, '2021-03-21 20:10:17', 80, 1, 15, 90),
(36, '2021-02-12 21:10:17', 80, 1, 23, 98),
(37, '2021-02-22 21:10:17', 21, 1, 25, 110),
(38, '2020-11-22 21:10:17', 25, 1, 11, 43),
(39, '2020-11-22 21:10:17', 15, 1, 22, 55),
(40, '2021-01-15 21:10:17', 45, 1, 30, 76),
(41, '2021-01-15 21:10:17', 222, 1, 38, 99),
(42, '2021-01-25 21:10:17', 120, 1, 36, 130),
(43, '2021-02-11 21:10:17', 90, 1, 33, 120),
(44, '2021-04-11 21:10:17', 122, 1, 12, 55),
(45, '2021-04-20 11:10:17', 140, 1, 20, 130),
(46, '2021-03-11 11:10:17', 55, 1, 13, 80),
(47, '2021-03-11 11:10:17', 160, 1, 19, 44),
(48, '2021-03-30 11:10:17', 133, 1, 30, 115),
(49, '2021-03-02 11:10:17', 60, 1, 12, 44),
(50, '2021-03-02 11:10:17', 120, 1, 22, 70),
(51, '2021-03-02 11:10:17', 11, 1, 34, 115),
(52, '2021-01-11 11:10:17', 32, 1, 12, 49);

--
-- Acionadores `inputoutput`
--
DELIMITER $$
CREATE TRIGGER `INSERT_PRODUCTST` BEFORE INSERT ON `inputoutput` FOR EACH ROW if ((SELECT COUNT(*) FROM productstorage where product_id=new.product_id and storage_id=new.storage_id) = 0 and new.operation=1) 
THEN
INSERT INTO productstorage (product_id,storage_id) VALUES(new.product_id,new.storage_id);
END IF
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `act_stock` AFTER INSERT ON `inputoutput` FOR EACH ROW if (new.operation > 0) THEN
UPDATE product set stock= stock+ NEW.quantity where id= new.product_id;
ELSE
UPDATE product set stock= stock- NEW.quantity where id= new.product_id;
END IF
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `uprice` decimal(9,2) NOT NULL,
  `stock` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id`, `name`, `type`, `uprice`, `stock`) VALUES
(18, 'Lâmpada flurescente 58W/840', 'Philips', '16.00', 0),
(19, 'Fichas pneumáticas de árvore de pintura', 'Venjakob', '30.00', 0),
(20, 'Tubos de pesca circuitos de tinta L&S', 'Venjakob', '4.00', 0),
(21, 'Lâmpada OSRAM', ' OSRAM', '84.00', 0),
(22, 'Lâmpada flurescente 18W/840', 'Philips', '4.00', 0),
(23, 'Balastro TRIDONIC', 'TRIDONIC', '81.00', 0),
(24, 'Conversor de frequência Lenze Ac Tech', 'Lenze Ac Tech', '93.00', 0),
(25, 'Micro - Filtro ar comprimido 0.01µm', 'FESTO', '90.00', 0),
(26, 'Disco de Cerda - 80 grão (escova de limpeza)', 'Scotch-Brite', '23.00', 0),
(27, 'Disco de Cerda -120 grão (escova de limpeza)', 'Scotch-Brite', '63.00', 0),
(28, 'Filtro ar comprimido AK 05/25', 'ULTRAFILTER', '44.00', 0),
(29, 'Filtro ar comprimido AK 07/30', 'ULTRAFILTER', '21.00', 0),
(30, 'Pressostato Beck', 'Beck', '69.00', 0),
(31, 'Pressostato Sauter', 'SAUTER', '54.00', 0),
(32, ' Cabo de coneção + licença e backups Heck KS9', 'Heck', '52.00', 0),
(33, 'Controlador Heck KS98', 'Heck', '30.00', 0),
(34, 'Proteção do Motor', 'Heck', '35.00', 0),
(35, 'Filtro 50µm ', 'Big Blue', '26.00', 10),
(36, 'Interruptor de nível', 'NIVOSTOP', '98.00', 0),
(37, 'Sensor de posição UV', 'SICK', '28.00', 0),
(38, 'Sensor de limite UV', 'SICK', '24.00', 0),
(39, 'Válvula selenóide UV', 'SMC', '83.00', 0),
(40, 'Vidro grande lâmpada UV', 'Venjakob', '6.00', 0),
(41, 'Vidro pequeno lâmpada UV', 'Venjakob', '25.00', 0),
(42, 'Ligador Branco UV', 'Venjakob', '9.00', 0),
(43, 'Variador ESMD Lenze AC Tech', ' Lenze AC Tech', '84.00', 25),
(44, 'Kit reparação Valvula OSMOSE velha', 'burkert', '34.00', 220),
(45, 'Kit reparação Valvula OSMOSE velha (corpo)', 'burkert', '56.00', 0),
(46, 'Filtro de tecido', 'Cartuccia PA', '96.00', 0),
(47, 'Medidor de caudal', 'GEMU', '82.00', 0),
(48, 'Medidor de caudal', 'GEMU', '51.00', 0),
(49, 'Solenóide nass magnet', 'nass magnet', '1.00', 32),
(50, 'Filtro 95-140µm', 'oventrop', '54.00', 0),
(51, 'Pressostato Schneider', 'Schneider', '100.00', 0),
(52, 'União de cotovelo ajustável', 'SERTO', '56.00', 0),
(53, 'Mangueira malha de aço 750mm', 'Co2', '87.00', 0),
(54, 'Eletroválvula 1/8', 'GSR Ventiltechnik', '10.00', 0),
(55, 'Eletroválvula 1/4', 'GSR Ventiltechnik', '45.00', 137),
(56, 'Eletroválvula 1/4', 'GSR Ventiltechnik', '97.00', 0),
(57, 'Mangueira malha de aço 3/4 750mm - 1000mm', 'Serto Cz', '81.00', 0),
(58, 'Gás 2.5% para calibração Co2', 'Tecnilab', '53.00', 0),
(59, 'Sensor XNX MPD Co2', 'Tecnilab', '21.00', 0),
(60, 'Válvula pneumática 1/4', 'timmer', '83.00', 0),
(61, 'Pistola Co2 Clean Ice', 'Venjakob', '100.00', 0),
(62, 'Casquilho de pistóla Co2 M30x1.5', 'Venjakob', '40.00', 0),
(63, 'Bicos das pistolas de Co2 - 0.30mm', 'Venjakob', '40.00', 0),
(64, 'Bicos das pistolas de Co2 - 0.325mm', 'Venjakob', '52.00', 0),
(65, 'Sensor de temperatura da pistóla Co2', 'Venjakob', '80.00', 0),
(66, 'Passador 1/4 inox', 'Venjakob', '51.00', 0),
(67, 'Oil Pumps', 'Venjakob', '70.00', 0),
(68, 'Pluguer Pipe NP25/50C', 'Venjakob', '8.00', 0),
(69, 'Kit Valves NP25/50-120C', 'Venjakob', '60.00', 0),
(70, 'Kit valves NP25/41C NP25/50C', 'Venjakob', '59.00', 120),
(71, 'Spare part package DV1', 'Venjakob', '63.00', 0),
(72, 'Kit Filter 1200', 'Venjakob', '51.00', 0),
(73, 'Reguladores pneumáticos', 'FESTO', '94.00', 0),
(74, 'Conetores HARTING', 'HARTING', '39.00', 0),
(75, 'Acessórios Pneumáticos', 'Venjakob', '4.00', 0),
(76, 'Correia dentada Megadyne 1280 SLV 8 Isoran Si', 'MEGADYNE', '30.00', 45),
(77, 'Cabo de sensor-atuador', 'Phoenix Contact', '58.00', 0),
(78, 'Sensor de posição', 'SICK', '53.00', 0),
(79, 'Correia optibelt RB PJ457', 'Trofa Hidráulica', '31.00', 0),
(80, 'Cabo de extençao de ionização', 'Venjakob', '99.00', 55),
(81, 'Cabo de ionização KE/LI050', 'Venjakob', '19.00', 0),
(82, 'Correia dentada 0.9', 'Venjakob', '32.00', 0),
(83, 'Ionizador quadrado', 'Venjakob', '1.00', 0),
(84, 'Fonte de alimentação ar ionizao', 'ellex', '79.00', 0),
(85, 'Vidros quartzo 29X20', 'Qurteck', '69.00', 0),
(86, 'RF Screen irradiator', 'Qurteck', '25.00', 0),
(87, 'Lâmpadas UV', 'Qurteck', '82.00', 0),
(88, 'Photodetetor ', 'Qurteck', '76.00', 0),
(89, 'Kit XFMR,FILAMENT,I600,LHI10', 'Qurteck', '70.00', 0),
(90, 'Kit Magnetron LHI10', 'Qurteck', '22.00', 80),
(91, 'Painel de comando touch da lâmpada UV', 'Siemens', '24.00', 0),
(92, 'Caimes', 'Venjakob', '79.00', 0),
(93, 'Rolamentos apoio dos tabuleiros', 'Venjakob', '85.00', 0),
(94, 'Kit reparação agitadores pneumáticos', 'Ingersoll Rand', '65.00', 0),
(95, 'Variador SMD Lenze AC Tech', ' Lenze AC Tech', '51.00', 0),
(96, 'Variador SMD Lenze AC Tech', ' Lenze AC Tech', '35.00', 7),
(97, 'Chave acionada por cabo', '.steute', '72.00', 0),
(98, 'Conetor M12 5 pinos', 'AMPHENOL', '46.00', 80),
(99, 'Eletroválvula 5/2', 'burkert', '50.00', 222),
(100, 'Limitador de corrente', 'EATON', '31.00', 0),
(101, 'Cabo de sensor-atuador', 'Phoenix Contact', '62.00', 0),
(102, 'Switch de segurança Schmersal', 'SCHMERSAL', '1.00', 0),
(103, 'Contactores 24V', 'Siemens', '63.00', 0),
(104, 'Contacto Auxiliar 24V', 'Siemens', '30.00', 0),
(105, 'Switch de segurança em alavanca', 'Siemens', '14.00', 0),
(106, 'Switch de segurança Siemens', 'Siemens', '56.00', 0),
(107, 'Relé de Segurança', 'Turck', '14.00', 0),
(108, 'Contactor 220V', 'Siemens', '24.00', 0),
(109, 'Sensor de segurança', 'PILZ', '28.00', 0),
(110, 'Slot + Relé - Siemens', 'Siemens', '90.00', 21),
(111, 'Slot + Relé - Farnell', 'Farnell', '36.00', 200),
(112, 'Drive de controlo de eixo pequeno', 'IAI', '56.00', 0),
(113, 'Drive de controlo de eixo grande', 'IAI', '3.00', 0),
(114, 'Motor controlo eixo Z Laser 7', 'iselgermany', '32.00', 0),
(115, 'Correia aspirador velho', 'Laser', '19.00', 144),
(116, 'Fita isoladora do aspirador velho', 'Laser', '10.00', 0),
(117, 'Antena RF ID', 'nordicidstix', '38.00', 0),
(118, 'Acessórios Circuitos tinta L&S', 'L&S', '69.00', 0),
(119, 'Filtro de pulmão', 'L&S', '22.00', 0),
(120, 'Bomba  Krautzberger', 'Krautzberger', '71.00', 90),
(121, 'Sensor de temperatura e humidade', 'JUMO', '89.00', 0),
(122, 'Transformador Queimador', 'Scaldalai', '61.00', 0),
(123, 'Controlador do queimador', 'Siemens', '80.00', 0),
(124, 'Sensor de temperatura e humidade', 'JUMO', '65.00', 0),
(125, 'Drive amortecedor AL.KO', 'Delimo', '49.00', 0),
(126, 'Controlador do queimador', 'Siemens', '81.00', 0),
(127, 'Vela de Ignição do queimador', 'Eclipse', '3.00', 0),
(128, 'Vela de leitura da chama', 'Eclipse', '37.00', 0),
(129, 'Bomba Graco 4D150', 'Graco', '78.00', 0),
(130, 'Bomba Co2', 'Speck', '62.00', 260),
(131, 'Caixilhos de suporte filtros de saco', 'Venjakob', '73.00', 0),
(132, 'Correia dentada AT 10', 'MEGADYNE', '70.00', 0),
(133, 'cerbomotor do braço da cabine pintura', 'Lenze', '53.00', 0),
(134, 'cerbomotor do braço da cabine Co2', 'SEW', '11.00', 0),
(135, 'Caixa Redutora ', 'Venjakob', '40.00', 0),
(136, 'Suporte para cinta dentada', 'Venjakob', '54.00', 0),
(137, 'Unidade de decapagem ', 'Venjakob', '44.00', 0),
(138, 'Rolamento SKF ', 'SKF', '34.00', 0),
(139, 'Rolamento SKF ', 'SKF', '5.00', 0),
(140, 'Rolamento INA', 'INA', '27.00', 110),
(141, 'Rolamento INA', 'INA', '42.00', 0),
(142, 'Rolamento SKF ', 'SKF', '58.00', 0),
(143, 'Rolamento SKF ', 'SKF', '75.00', 0),
(144, 'Rolamento SKF ', 'SKF', '84.00', 0),
(145, 'Rolamento SKF ', 'SKF', '48.00', 0),
(146, 'Rolamento SKF ', 'SKF', '70.00', 0),
(147, 'Rolamento FAG', 'FAG', '31.00', 0),
(148, 'Rolamento FAG', 'FAG', '27.00', 0),
(149, 'Rolamento FAG', 'FAG', '88.00', 0),
(150, 'Roda de Nilon 80x20x25', 'Venjakob', '10.00', 0),
(151, 'Junta vedante de óleo', 'SFK', '28.00', 0),
(152, 'Bucha cónica 42mm', 'taper bush', '68.00', 0),
(153, 'Empanque para bomba de água (vedante 024)', 'CIRCOR', '39.00', 0),
(154, 'Empanque para bomba de água (vedante 030)', 'CIRCOR', '79.00', 0),
(155, 'Tira de rodo 70x1.5 75ShA P0 Viton', 'Venjakob', '45.00', 0),
(156, 'Parafuso excêntrico ZLD 10-10R 6mm rosca', 'Venjakob', '45.00', 0),
(157, 'Parafuso ZLD 10-10R 7mm rosca', 'Venjakob', '74.00', 0),
(158, 'Laçadeira de cinta ZLD 10-10R', 'ZOLLERN', '49.00', 0),
(159, 'Motor Ventilação UV', 'Elektror', '47.00', 0),
(160, 'Sensor nivel de óleo', 'Heck', '66.00', 0),
(161, 'Sensor de pressão', 'Heck', '34.00', 0),
(162, 'Sensor de pressão', 'Heck', '78.00', 0),
(163, 'Controlador de ventiladores com tensão 3~', 'Heck', '88.00', 0),
(164, 'Controlador de temperatura', 'Siemens', '63.00', 0),
(165, 'Sensor de pressão da válvula de expanção', 'Heck', '34.00', 0),
(166, 'Sensor de temperatura', 'Heck', '49.00', 0),
(167, 'Medidor de nível de água', 'VEGASON', '64.00', 0),
(168, 'Perfil de guia com eixo ', 'Venjakob', '67.00', 0),
(169, 'Correia dentada 1.2', 'Venjakob', '82.00', 0),
(170, 'Lâmpada IR', 'Venjakob', '92.00', 0),
(171, 'Eixo do laser', 'IAI Corp.', '56.00', 0),
(172, 'Eixo do laser', 'IAI Corp.', '60.00', 0),
(173, 'Barra de ionização', 'ellex', '21.00', 0),
(174, 'Lâmpada UV (mercurio)', 'honle', '55.00', 0),
(175, 'Lâmpada UV (ferro)', 'honle', '87.00', 0),
(176, 'Módulo controlo lâmpada UV', 'honle', '62.00', 0),
(177, 'Mangueira do Co2', 'Venjakob', '10.00', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `productstorage`
--

CREATE TABLE `productstorage` (
  `id` bigint(20) NOT NULL,
  `storage_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `productstorage`
--

INSERT INTO `productstorage` (`id`, `storage_id`, `product_id`) VALUES
(19, 10, 96),
(20, 11, 18),
(54, 11, 43),
(65, 12, 44),
(68, 12, 49),
(60, 12, 55),
(21, 12, 87),
(62, 13, 80),
(22, 13, 128),
(23, 14, 100),
(24, 15, 90),
(25, 16, 45),
(26, 17, 66),
(27, 18, 104),
(63, 19, 44),
(28, 19, 176),
(49, 20, 35),
(61, 20, 130),
(29, 20, 136),
(30, 21, 81),
(31, 22, 37),
(55, 22, 55),
(66, 22, 70),
(52, 23, 98),
(32, 23, 157),
(33, 24, 120),
(34, 25, 68),
(53, 25, 110),
(35, 26, 124),
(36, 27, 80),
(37, 28, 84),
(38, 29, 74),
(56, 30, 76),
(39, 30, 92),
(51, 30, 111),
(64, 30, 115),
(40, 31, 22),
(41, 32, 172),
(42, 33, 36),
(59, 33, 120),
(43, 34, 25),
(67, 34, 115),
(50, 35, 140),
(44, 35, 170),
(58, 36, 130),
(45, 36, 144),
(46, 37, 54),
(57, 38, 99),
(47, 38, 105),
(48, 39, 141);

-- --------------------------------------------------------

--
-- Estrutura da tabela `storage`
--

CREATE TABLE `storage` (
  `id` bigint(20) NOT NULL,
  `corridor` int(11) NOT NULL,
  `shelf` int(11) NOT NULL,
  `box` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `storage`
--

INSERT INTO `storage` (`id`, `corridor`, `shelf`, `box`, `name`) VALUES
(10, 1, 1, 1, 'L111'),
(11, 1, 1, 2, 'L112'),
(12, 1, 2, 1, 'L121'),
(13, 1, 2, 2, 'L122'),
(14, 1, 3, 1, 'L131'),
(15, 1, 3, 2, 'L132'),
(16, 2, 1, 1, 'L211'),
(17, 2, 1, 2, 'L212'),
(18, 2, 2, 1, 'L221'),
(19, 2, 2, 2, 'L222'),
(20, 2, 3, 1, 'L231'),
(21, 2, 3, 2, 'L232'),
(22, 3, 1, 1, 'L311'),
(23, 3, 1, 2, 'L312'),
(24, 3, 2, 1, 'L321'),
(25, 3, 2, 2, 'L322'),
(26, 3, 3, 1, 'L331'),
(27, 3, 3, 2, 'L332'),
(28, 4, 1, 1, 'L411'),
(29, 4, 1, 2, 'L412'),
(30, 4, 2, 1, 'L421'),
(31, 4, 2, 2, 'L422'),
(32, 4, 3, 1, 'L431'),
(33, 4, 3, 2, 'L432'),
(34, 5, 1, 1, 'L511'),
(35, 5, 1, 2, 'L512'),
(36, 5, 2, 1, 'L521'),
(37, 5, 2, 2, 'L522'),
(38, 5, 3, 1, 'L531'),
(39, 5, 3, 2, 'L532');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `inputoutput`
--
ALTER TABLE `inputoutput`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id_io` (`product_id`),
  ADD KEY `fk_storage_id_io` (`storage_id`);

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `productstorage`
--
ALTER TABLE `productstorage`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_ps` (`storage_id`,`product_id`),
  ADD KEY `fk_product_id` (`product_id`);

--
-- Índices para tabela `storage`
--
ALTER TABLE `storage`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `inputoutput`
--
ALTER TABLE `inputoutput`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT de tabela `productstorage`
--
ALTER TABLE `productstorage`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de tabela `storage`
--
ALTER TABLE `storage`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `inputoutput`
--
ALTER TABLE `inputoutput`
  ADD CONSTRAINT `fk_product_id_io` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_storage_id_io` FOREIGN KEY (`storage_id`) REFERENCES `storage` (`id`);

--
-- Limitadores para a tabela `productstorage`
--
ALTER TABLE `productstorage`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `fk_storage_id` FOREIGN KEY (`storage_id`) REFERENCES `storage` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
