-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: SPOTIFY
-- ------------------------------------------------------
-- Server version       8.0.32

DROP DATABASE IF EXISTS spotify;
DROP DATABASE IF EXISTS SPOTIFY;
CREATE DATABASE SPOTIFY;
USE SPOTIFY;

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
INSERT INTO `ALBUM` VALUES (1,1,10,'Akuma no Ko','/Src/Client/img/Album/AkumaNoKo.jpg','','00:02:47','2022-10-01');
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
INSERT INTO `AUTHOR_SONG` VALUES (1,1);
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
                           `ID_RECEIPT` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
                           `ID_USER` int NOT NULL,
                           `DATE_BUY` date DEFAULT NULL,
                           `TOTAL_PRICE` int DEFAULT NULL,
                           `PAYMENT` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `RETAILER` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `ADDRESS` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `VAT_NUMBER` int DEFAULT NULL,
                           `PRODUCT` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
                           `TOTAL_TAX` int DEFAULT NULL,
                           `TAX` int DEFAULT NULL,
                           `PRICE` int DEFAULT NULL,
                           PRIMARY KEY (`ID_RECEIPT`),
                           KEY `FK_RECE_BUY_USER` (`ID_USER`),
                           CONSTRAINT `RECEIPT_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `USER` (`USER_ID`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RECEIPT`
--

LOCK TABLES `RECEIPT` WRITE;
/*!40000 ALTER TABLE `RECEIPT` DISABLE KEYS */;
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
INSERT INTO `SING_BY` VALUES (1,1);
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
INSERT INTO `SONG` VALUES (1,'Akuma no Ko','/Src/Client/img/Album/AkumaNoKo.jpg',0,224,'/Src/Client/mp3/AkumaNoKo.mp3','[[1, \"鉄の弾が 正義の証明\"], [4, \"貫けば 英雄に近づいた\"], [6, \"その目を閉じて 触れてみれば\"], [9, \"同じ形 同じ体温の悪魔\"], [15, \"僕はダメで あいつはいいの？\"], [17, \"そこに壁があっただけなのに\"], [19, \"生まれてしまった 運命嘆くな\"], [22, \"僕らはみんな 自由なんだから\"], [26, \"鳥のように 羽があれば\"], [31, \"どこへだって行けるけど\"], [37, \"帰る場所が なければ\"], [41, \"きっとどこへも行けない\"], [46, \"ただただ生きるのは嫌だ\"], [52, \"世界は残酷だ それでも君を愛すよ\"], [62, \"なにを犠牲にしても それでも君を守るよ\"], [72, \"間違いだとしても 疑ったりしない\"], [78, \"正しさとは 自分のこと 強く信じることだ\"], [93, \"鉄の雨が 降り散る情景\"], [96, \"テレビの中 映画に見えたんだ\"], [98, \"戦争なんて 愚かな凶暴\"], [102, \"関係ない 知らない国の話\"], [104, \"それならなんで あいつ憎んで\"], [106, \"黒い気持ち 隠しきれない理由\"], [109, \"説明だって できやしないんだ\"], [111, \"僕らはなんて 矛盾ばっかなんだ\"], [137, \"この言葉も 訳されれば\"], [143, \"本当の意味は伝わらない\"], [148, \"信じるのは その目を開いて\"], [153, \"触れた世界だけ\"], [157, \"ただただ生きるのは嫌だ\"], [166, \"世界は残酷だ それでも君を愛すよ\"], [176, \"なにを犠牲にしても それでも君を守るよ\"], [186, \"選んだ人の影 捨てたものの屍\"], [191, \"気づいたんだ 自分の中 育つのは悪魔の子\"], [197, \"正義の裏 犠牲の中 心には悪魔の子\"]]','2023-04-07 01:35:49');
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
INSERT INTO `SONG_ALBUM` VALUES (1,1);
/*!40000 ALTER TABLE `SONG_ALBUM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
                        `USER_ID` int NOT NULL,
                        `NAME` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
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
INSERT INTO `USER` VALUES (1,'Ai Higuchi','','/Src/Client/img/Album/AkumaNoKo.jpg',1,'2003-07-27',1,'Japan','',1,2,100);
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

-- Dump completed on 2023-04-10 15:37:56