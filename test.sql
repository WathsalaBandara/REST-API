-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2023 at 07:31 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(1, 'jgdj', 'snksf', 'dsf', 'afdf@gmail.com', 'sfusgudgf', 174564820),
(5, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(9, 'Janitha', 'Hashan', 'Male', 'janitha@gmail.com', 'abc', 458975541),
(13, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(14, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(15, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(16, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(17, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0),
(18, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
