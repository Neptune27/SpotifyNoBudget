-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: SPOTIFY
-- ------------------------------------------------------
-- Server version       8.0.32

DROP DATABASE IF EXISTS spotify;
DROP DATABASE IF EXISTS SPOTIFY;
CREATE DATABASE SPOTIFY;
USE SPOTIFY;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: SPOTIFY
-- ------------------------------------------------------
-- Server version       8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ALBUM`
--

DROP TABLE IF EXISTS `ALBUM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ALBUM` (
                         `ALBUM_ID` int NOT NULL,
                         `NUMBER_OF_SONG` int DEFAULT NULL,
                         `TOTAL_LISTENER` int DEFAULT NULL,
                         `ALBUM_NAME` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
                         `ALBUM_IMG` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
                         `DESCRIPTIONS` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
                         `TIME` time DEFAULT NULL,
                         `DATE` date DEFAULT NULL,
                         PRIMARY KEY (`ALBUM_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ALBUM`
--

LOCK TABLES `ALBUM` WRITE;
/*!40000 ALTER TABLE `ALBUM` DISABLE KEYS */;
INSERT INTO `ALBUM` VALUES (1,1,10,'Akuma no Ko','/Src/Client/img/Album/AkumaNoKo.jpg','','00:02:47','2022-10-01'),(2,NULL,NULL,'a','/Src/Client/img/Album/Romance.jpg',' ',NULL,NULL);
/*!40000 ALTER TABLE `ALBUM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ALBUM_CREATED_BY`
--

DROP TABLE IF EXISTS `ALBUM_CREATED_BY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ALBUM_CREATED_BY` (
                                    `USER_ID` int NOT NULL,
                                    `ALBUM_ID` int NOT NULL,
                                    PRIMARY KEY (`USER_ID`,`ALBUM_ID`),
                                    KEY `FK_CREA_CREA_ALBU` (`ALBUM_ID`),
                                    CONSTRAINT `ALBUM_CREATED_BY_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT,
                                    CONSTRAINT `ALBUM_CREATED_BY_ibfk_2` FOREIGN KEY (`ALBUM_ID`) REFERENCES `ALBUM` (`ALBUM_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ALBUM_CREATED_BY`
--

LOCK TABLES `ALBUM_CREATED_BY` WRITE;
/*!40000 ALTER TABLE `ALBUM_CREATED_BY` DISABLE KEYS */;
INSERT INTO `ALBUM_CREATED_BY` VALUES (1,1);
/*!40000 ALTER TABLE `ALBUM_CREATED_BY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AUTHOR_SONG`
--

DROP TABLE IF EXISTS `AUTHOR_SONG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AUTHOR_SONG` (
                               `SONG_ID` int NOT NULL,
                               `AUTHOR_ID` int NOT NULL,
                               PRIMARY KEY (`SONG_ID`,`AUTHOR_ID`),
                               KEY `AUTHOR_ID` (`AUTHOR_ID`),
                               CONSTRAINT `AUTHOR_SONG_ibfk_1` FOREIGN KEY (`SONG_ID`) REFERENCES `SONG` (`SONG_ID`),
                               CONSTRAINT `AUTHOR_SONG_ibfk_2` FOREIGN KEY (`AUTHOR_ID`) REFERENCES `USER` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTHOR_SONG`
--

LOCK TABLES `AUTHOR_SONG` WRITE;
/*!40000 ALTER TABLE `AUTHOR_SONG` DISABLE KEYS */;
INSERT INTO `AUTHOR_SONG` VALUES (1,1),(3,1),(4,1),(5,1),(6,1),(7,1);
/*!40000 ALTER TABLE `AUTHOR_SONG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FOLLOW`
--

DROP TABLE IF EXISTS `FOLLOW`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FOLLOW` (
                          `USER_ID` int NOT NULL,
                          `USER_FOLLOW_BY_ID` int NOT NULL,
                          PRIMARY KEY (`USER_ID`,`USER_FOLLOW_BY_ID`),
                          KEY `FK_FOLL_FOLL_USER` (`USER_FOLLOW_BY_ID`),
                          CONSTRAINT `FOLLOW_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT,
                          CONSTRAINT `FOLLOW_ibfk_2` FOREIGN KEY (`USER_FOLLOW_BY_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FOLLOW`
--

LOCK TABLES `FOLLOW` WRITE;
/*!40000 ALTER TABLE `FOLLOW` DISABLE KEYS */;
/*!40000 ALTER TABLE `FOLLOW` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HISTORY`
--

DROP TABLE IF EXISTS `HISTORY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HISTORY` (
                           `LISTEN_DATE` datetime NOT NULL,
                           `USER_ID` int NOT NULL,
                           `MUSIC_ID` int NOT NULL,
                           PRIMARY KEY (`LISTEN_DATE`,`USER_ID`,`MUSIC_ID`),
                           KEY `FK_HIST_HIS__MUSI` (`MUSIC_ID`),
                           KEY `FK_HIST_USER_USER` (`USER_ID`),
                           CONSTRAINT `HISTORY_ibfk_1` FOREIGN KEY (`MUSIC_ID`) REFERENCES `SONG` (`SONG_ID`) ON DELETE RESTRICT,
                           CONSTRAINT `HISTORY_ibfk_2` FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HISTORY`
--

LOCK TABLES `HISTORY` WRITE;
/*!40000 ALTER TABLE `HISTORY` DISABLE KEYS */;
/*!40000 ALTER TABLE `HISTORY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RECEIPT`
--

DROP TABLE IF EXISTS `RECEIPT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RECEIPT` (
                           `ID_RECEIPT` int NOT NULL AUTO_INCREMENT,
                           `ID_USER` int NOT NULL,
                           `DATE_BUY` datetime DEFAULT NULL,
                           `TOTAL_PRICE` int DEFAULT NULL,
                           `PAYMENT` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `PRODUCT` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `IS_VERIFY` tinyint(1) DEFAULT NULL,
                           PRIMARY KEY (`ID_RECEIPT`),
                           KEY `FK_RECE_BUY_USER` (`ID_USER`),
                           CONSTRAINT `RECEIPT_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RECEIPT`
--

LOCK TABLES `RECEIPT` WRITE;
/*!40000 ALTER TABLE `RECEIPT` DISABLE KEYS */;
INSERT INTO `RECEIPT` VALUES (1,2,'2023-05-05 04:05:33',30,'Transfer','Premium',0);
/*!40000 ALTER TABLE `RECEIPT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SING_BY`
--

DROP TABLE IF EXISTS `SING_BY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SING_BY` (
                           `AUTHOR_ID` int NOT NULL,
                           `MUSIC_ID` int NOT NULL,
                           PRIMARY KEY (`AUTHOR_ID`,`MUSIC_ID`),
                           KEY `FK_SING_BY_SING_BY_MUSI` (`MUSIC_ID`),
                           CONSTRAINT `SING_BY_ibfk_1` FOREIGN KEY (`AUTHOR_ID`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT,
                           CONSTRAINT `SING_BY_ibfk_2` FOREIGN KEY (`MUSIC_ID`) REFERENCES `SONG` (`SONG_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SING_BY`
--

LOCK TABLES `SING_BY` WRITE;
/*!40000 ALTER TABLE `SING_BY` DISABLE KEYS */;
INSERT INTO `SING_BY` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7);
/*!40000 ALTER TABLE `SING_BY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SONG`
--

DROP TABLE IF EXISTS `SONG`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SONG` (
                        `SONG_ID` int NOT NULL,
                        `SONG_NAME` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `SONG_IMG` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
                        `TOTAL_VIEW` int DEFAULT NULL,
                        `DURATION` int DEFAULT NULL,
                        `SONG_LOCATION` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `LYRICS` json DEFAULT NULL,
                        `ADDED_DATE` datetime DEFAULT NULL,
                        PRIMARY KEY (`SONG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SONG`
--

LOCK TABLES `SONG` WRITE;
/*!40000 ALTER TABLE `SONG` DISABLE KEYS */;
INSERT INTO `SONG` VALUES (1,'Akuma no Ko','/Src/Client/img/Album/AkumaNoKo.jpg',0,224,'/Src/Client/mp3/AkumaNoKo.mp3','[[1, \"鉄の弾が 正義の証明\"], [3, \"貫けば 英雄に近づいた\"], [6, \"その目を閉じて 触れてみれば\"], [9, \"同じ形 同じ体温の悪魔\"], [14, \"僕はダメで あいつはいいの？\"], [17, \"そこに壁があっただけなのに\"], [20, \"生まれてしまった 運命嘆くな\"]]','2023-04-07 01:35:49'),(2,'Romance','/Src/Client/img/Album/Romance.jpg',0,140,'/Src/Client/mp3/Romance.mp3','[]','2023-04-07 01:38:49'),(3,'Romance2','/Src/Client/img/Album/AkumaNoKo.jpg',0,194,'/Src/Client/mp3/1/1/AkumaNoKo2.mp3','[[0, \"Hello World!\"]]','2023-04-27 20:49:04'),(4,'Welcome to the Internet','/Src/Client/img/Album/AkumaNoKo.jpg',0,280,'/Src/Client/mp3/1/1/Welcome to the Internet.mp3','[[0, \"Welcome to the Internet\"]]','2023-04-27 20:50:38'),(5,'WTF','/Src/Client/img/Album/AkumaNoKo.jpg',0,280,'/Src/Client/mp3/1/1/AkumaNoKo2.mp3','[[0, \"Hello\"]]','2023-04-28 02:17:26'),(6,'c','/Src/Client/img/Album/AkumaNoKo.jpg',0,3,'/Src/Client/mp3/1/1/AkumaNoKo2cas.mp3','[[0, \".\"]]','2023-04-28 02:22:59'),(7,'ciahs','/Src/Client/img/Album/AkumaNoKo.jpg',0,0,'/Src/Client/mp3/1/1/ncaiosnvias.mp3','[]','2023-05-05 04:15:23');
/*!40000 ALTER TABLE `SONG` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SONG_ALBUM`
--

DROP TABLE IF EXISTS `SONG_ALBUM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SONG_ALBUM` (
                              `SONG_ID` int NOT NULL,
                              `ALBUM_ID` int NOT NULL,
                              PRIMARY KEY (`SONG_ID`,`ALBUM_ID`),
                              KEY `FK_MUSI_MUSI_ALBU` (`ALBUM_ID`),
                              CONSTRAINT `SONG_ALBUM_ibfk_1` FOREIGN KEY (`SONG_ID`) REFERENCES `SONG` (`SONG_ID`) ON DELETE RESTRICT,
                              CONSTRAINT `SONG_ALBUM_ibfk_2` FOREIGN KEY (`ALBUM_ID`) REFERENCES `ALBUM` (`ALBUM_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SONG_ALBUM`
--

LOCK TABLES `SONG_ALBUM` WRITE;
/*!40000 ALTER TABLE `SONG_ALBUM` DISABLE KEYS */;
INSERT INTO `SONG_ALBUM` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1);
/*!40000 ALTER TABLE `SONG_ALBUM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
                        `USER_ID` int AUTO_INCREMENT NOT NULL,
                        `NAME` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `USERNAME` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `PASSWORD` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `AVATAR` varchar(100) NOT NULL,
                        `GENDER` tinyint(1) DEFAULT NULL,
                        `BIRTH` date DEFAULT NULL,
                        `VERIFY` tinyint(1) DEFAULT NULL,
                        `COUNTRY` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `EMAIL` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                        `HAVE_PREMIUM` tinyint(1) DEFAULT NULL,
                        `TYPE` int DEFAULT NULL,
                        `MONTHLY_LISTENER` int DEFAULT NULL,
                        PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'Ai Higuchi','AUTO-GENERATED','','/Src/Client/img/Album/AkumaNoKo.jpg',1,'2003-07-27',1,'Japan','',1,2,100),(2,'Nep','Nep','123',' ',0,'2003-07-27',0,'VN','vominhtri13@gmail.com',0,0,0);
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-12  3:20:04