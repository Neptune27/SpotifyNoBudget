drop database if exists spotify;
create database spotify;
use spotify;

drop table if exists  ALBUM;
 
drop table if exists AUTHOR_MUSIC;

drop table if exists ALBUM_CREATED_BY;

drop table if exists FOLLOW;

drop table if exists HISTORY;

drop table if exists MUSIC;

drop table if exists MUSIC_ALBUM;

drop table if exists RECEIPT;

drop table if exists SING_BY;


drop table if exists USER;

/*==============================================================*/
/* Table: ALBUM                                                 */
/*==============================================================*/
create table ALBUM (
ID_ALBUM integer not null,
NUMBER_SONG integer,
LISTENERS integer,
ALBUM_NAME nvarchar(255) NOT NULL,
ALBUM_IMG nvarchar(255) NOT NULL,
DESCRIPTIONS nvarchar(255) NOT NULL,
TIME time,
DATE date,
primary key (ID_ALBUM)
);


/*==============================================================*/
/* Table: AUTHOR_MUSIC                                          */
/*==============================================================*/
create table AUTHOR_MUSIC (
ID_AUT integer not null,
ID_MUSIC integer not null,
primary key (ID_AUT, ID_MUSIC)
);

/*==============================================================*/
/* Table: CREAT                                                 */
/*==============================================================*/
create table ALBUM_CREATED_BY (
ID_USER integer not null,
ID_ALBUM integer not null,
primary key (ID_USER, ID_ALBUM)
);

/*==============================================================*/
/* Table: FOLLOW                                                */
/*==============================================================*/
create table FOLLOW (
ID_USER integer not null,
ID_USER2 integer not null,
primary key (ID_USER, ID_USER2)
);

/*==============================================================*/
/* Table: HISTORY                                               */
/*==============================================================*/
create table HISTORY (
NUMBER_ORDER INTEGER auto_increment,
ID_ALBUM integer not null,
ID_USER integer not null,
ID_MUSIC integer not null,
primary key (NUMBER_ORDER)
);

/*==============================================================*/
/* Table: MUSIC                                                 */
/*==============================================================*/
create table MUSIC (
ID_MUSIC integer not null,
MUSIC_NAME nvarchar(255),
MUSIC_IMG nvarchar(255) NOT NULL,
VIEW integer,
TIME time,
SONG_LOCATION nvarchar(255),
LYRICS json,
primary key (ID_MUSIC)
);

/*==============================================================*/
/* Table: MUSIC_ALBUM                                           */
/*==============================================================*/
create table MUSIC_ALBUM (
ID_MUSIC integer not null,
ID_ALBUM integer not null,
primary key (ID_MUSIC, ID_ALBUM)
);

/*==============================================================*/
/* Table: RECEIPT                                               */
/*==============================================================*/
create table RECEIPT (
ID_RECEIPT nvarchar(255) not null,
ID_USER integer not null,
DATE_BUY date,
TOTAL_PRICE integer,
PAYMENT nvarchar(255),
RETAILER nvarchar(255),
ADDRESS nvarchar(255),
VAT_NUMBER integer,
PRODUCT nvarchar(255),
TOTAL_TAX integer,
TAX integer,
PRICE integer,
primary key (ID_RECEIPT)
);

/*==============================================================*/
/* Table: SING_BY                                                  */
/*==============================================================*/
create table SING_BY (
ID_SINGER integer not null,
ID_MUSIC integer not null,
primary key (ID_SINGER, ID_MUSIC)
);


/*==============================================================*/
/* Table: USER                                                */
/*==============================================================*/
create table USER (
ID_USER integer not null,
NAME nvarchar(255),
avatar nvarchar(255),
PASSWORD nvarchar(255),
GENDER boolean,
BIRTH date,
verify boolean,
COUNTRY nvarchar(255),
EMAIL nvarchar(255),
HAVE_PRIMIUM boolean,
TYPE integer,
MONTHLY_LISTENER integer,
primary key (ID_USER)
);


alter table AUTHOR_MUSIC
   add foreign key FK_AUTH_AUTH_AUTH (ID_AUT)
      references USER (ID_USER)
      on delete restrict;

alter table AUTHOR_MUSIC
   add foreign key FK_AUTH_AUTH_MUSI (ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table ALBUM_CREATED_BY
   add foreign key FK_CREA_CREA_USER (ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table ALBUM_CREATED_BY
   add foreign key FK_CREA_CREA_ALBU (ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table FOLLOW
   add foreign key FK_FOLL_FOLL_USER (ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table FOLLOW
   add foreign key FK_FOLL_FOLL_USER (ID_USER2)
      references USER (ID_USER)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_HIS__ALBU (ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_HIS__MUSI (ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_USER_USER (ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table MUSIC_ALBUM
   add foreign key FK_MUSI_MUSI_MUSI (ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table MUSIC_ALBUM
   add foreign key FK_MUSI_MUSI_ALBU (ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table RECEIPT
   add foreign key FK_RECE_BUY_USER (ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table SING_BY
   add foreign key FK_SING_BY_SING_BY_SING_BY (ID_SINGER)
      references USER (ID_USER)
      on delete restrict;

alter table SING_BY
   add foreign key FK_SING_BY_SING_BY_MUSI (ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;
     
     -- data test linh tinh
-- thêm vào bản album-- --       
INSERT INTO `spotify`.`album` (`ID_ALBUM`, `NUMBER_SONG`, `LISTENERS`, `ALBUM_NAME`, `ALBUM_IMG`, `DESCRIPTIONS`, `TIME`, `DATE`) VALUES ('1', '3', '0', 's1', '...', 'mô tả', '1:00', '2023-4-4');
INSERT INTO `spotify`.`album` (`ID_ALBUM`, `NUMBER_SONG`, `LISTENERS`, `ALBUM_NAME`, `ALBUM_IMG`, `DESCRIPTIONS`, `TIME`, `DATE`) VALUES ('2', '2', '0', 's2', '...', 'mô tả', '1:00', '2023-4-4');
INSERT INTO `spotify`.`album` (`ID_ALBUM`, `NUMBER_SONG`, `LISTENERS`, `ALBUM_NAME`, `ALBUM_IMG`, `DESCRIPTIONS`, `TIME`, `DATE`) VALUES ('3', '1', '0', 's3', '...', 'mô tả', '1:00', '2023-4-4');
INSERT INTO `spotify`.`album` (`ID_ALBUM`, `NUMBER_SONG`, `LISTENERS`, `ALBUM_NAME`, `ALBUM_IMG`, `DESCRIPTIONS`, `TIME`, `DATE`) VALUES ('4', '3', '0', 's4', '...', 'mô tả', '1:00', '2023-4-4');
INSERT INTO `spotify`.`album` (`ID_ALBUM`, `NUMBER_SONG`, `LISTENERS`, `ALBUM_NAME`, `ALBUM_IMG`, `DESCRIPTIONS`, `TIME`, `DATE`) VALUES ('5', '1', '0', 's5', '...', 'mô tả', '1:00', '2023-4-4');
 --  thêm vào bài hát music     
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('1', 'music1', '...', '0', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('2', 'music2', '...', '9', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('3', 'music3', '...', '8', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('4', 'music4', '...', '7', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('5', 'music5', '...', '6', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('6', 'music6', '...', '5', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('7', 'music7', '...', '4', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('8', 'music8', '...', '3', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('9', 'music9', '...', '2', '00:01:00', '...', '0');
INSERT INTO `spotify`.`music` (`ID_MUSIC`, `MUSIC_NAME`, `MUSIC_IMG`, `VIEW`, `TIME`, `SONG_LOCATION`, `LYRICS`) VALUES ('10', 'music10', '...', '1', '00:01:00', '...', '0');
-- thêm user
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('1', 'user1', '...', '123123', '1', '1', 'VN', '1', '2');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('2', 'user2', '...', '123123', '1', '0', 'VN', '0', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('3', 'user3', '...', '123123', '1', '1', 'VN', '0', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('4', 'user4', '...', '123123', '1', '1', 'VN', '0', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('5', 'user5', '...', '123123', '0', '1', 'VN', '0', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('6', 'user6', '...', '123123', '0', '0', 'VN', '0', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('7', 'user7', '...', '123123', '0', '0', 'VN', '1', '2');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('8', 'user8', '...', '123123', '0', '0', 'VN', '1', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('9', 'user9', '...', '123123', '1', '0', 'VN', '1', '2');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('10', 'user10', '...', '123123', '1', '0', 'VN', '1', '3');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('11', 'user11', '...', '123123', '1', '0', 'VN', '1', '2');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('12', 'user12', '...', '123123', '0', '1', 'VN', '1', '1');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('13', 'user13', '...', '123123', '0', '0', 'VN', '1', '1');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('14', 'user14', '...', '123123', '0', '0', 'VN', '1', '1');
INSERT INTO `spotify`.`user` (`ID_USER`, `NAME`, `avatar`, `PASSWORD`, `GENDER`, `verify`, `COUNTRY`, `HAVE_PRIMIUM`, `TYPE`) VALUES ('15', 'user15', '...', '123123', '1', '0', 'VN', '1', '1');
 -- thêm phiếu mua primium
 INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('1', '5');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('2', '4');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('3', '3');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('4', '2');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('5', '3');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('6', '5');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('7', '4');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('8', '3');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('9', '2');
INSERT INTO `spotify`.`receipt` (`ID_RECEIPT`, `ID_USER`) VALUES ('10', '1');
-- thêm tác giả của bài hát
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('2', '1');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('2', '2');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('3', '3');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('4', '4');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('5', '5');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('4', '6');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('4', '7');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('3', '8');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('2', '9');
INSERT INTO `spotify`.`author_music` (`ID_AUT`, `ID_MUSIC`) VALUES ('2', '10');
-- người tạo ra album
INSERT INTO `spotify`.`ALBUM_CREATED_BY` (`ID_USER`, `ID_ALBUM`) VALUES ('1', '1');
INSERT INTO `spotify`.`ALBUM_CREATED_BY` (`ID_USER`, `ID_ALBUM`) VALUES ('2', '2');
INSERT INTO `spotify`.`ALBUM_CREATED_BY` (`ID_USER`, `ID_ALBUM`) VALUES ('5', '3');
INSERT INTO `spotify`.`ALBUM_CREATED_BY` (`ID_USER`, `ID_ALBUM`) VALUES ('6', '4');
INSERT INTO `spotify`.`ALBUM_CREATED_BY` (`ID_USER`, `ID_ALBUM`) VALUES ('7', '5');
-- f0llow
INSERT INTO `spotify`.`follow` (`ID_USER`, `ID_USER2`) VALUES ('1', '4');
INSERT INTO `spotify`.`follow` (`ID_USER`, `ID_USER2`) VALUES ('2', '3');
INSERT INTO `spotify`.`follow` (`ID_USER`, `ID_USER2`) VALUES ('3', '2');
INSERT INTO `spotify`.`follow` (`ID_USER`, `ID_USER2`) VALUES ('4', '2');
INSERT INTO `spotify`.`follow` (`ID_USER`, `ID_USER2`) VALUES ('5', '1');
-- nhạc của album nào
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('1', '2');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('2', '3');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('3', '4');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('4', '5');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('5', '5');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('6', '4');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('7', '3');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('8', '2');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('9', '1');
INSERT INTO `spotify`.`music_album` (`ID_MUSIC`, `ID_ALBUM`) VALUES ('10', '1');
-- thêm ca sĩ hát bài hát nào
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('1', '1');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('2', '1');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('3', '1');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('4', '1');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('5', '9');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('6', '9');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('7', '9');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('8', '7');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('9', '7');
INSERT INTO `spotify`.`SING_BY` (`ID_SINGER`, `ID_MUSIC`) VALUES ('10', '7');
  
  -- TRUY SUẤT THÔNG TIN ALBUM 
  select ID_ALBUM,ALBUM_NAME,ALBUM_IMG,DESCRIPTIONS,LISTENERS
  from ALBUM;
  -- WHERE  ID_ALBUM = 1 ; /* ĐIỀN THÔNG TIN ID ALBUM MÚN TÌM VÔ ĐÂY NẾU CẦN */
  
  -- TRUY XUẤT NGƯỜI LÀ CA SĨ
  select ID_USER,NAME,MONTHLY_LISTENER,verify,avatar
  from USER
  WHERE /* ID_USER = 1 AND */ /* TÌM AI THÌ ĐIỀN THÔNG TIN NÓ VÔ ĐÂY */ TYPE = "2" OR TYPE = "4"; --  ƯỚC LƯỢNG 1 LÀ DÂN THƯỜNG 2 LÀ CA SĨ 3 LÀ TÁC GIẢ 4 LÀ CA SĨ TÁC GIẢ
  
  -- TRUY XUẤT BÀI THÔNG TIN BÀI HÁT 
  SELECT MUSIC.ID_MUSIC,MUSIC_NAME,MUSIC_IMG,VIEW,MUSIC.TIME,ALBUM_NAME 
  FROM MUSIC,ALBUM,MUSIC_ALBUM
  WHERE  MUSIC.ID_MUSIC = MUSIC_ALBUM.ID_MUSIC AND MUSIC_ALBUM.ID_ALBUM = ALBUM.ID_ALBUM; /*AND MUSIC.ID_MUSIC = "1";*/-- TÌM BÀI NÀO THÌ CHO ID VÔ CHỖ NÀY 

 -- TRUY XUẤT CA SĨ CỦA BÀI HÁT 
SELECT ID_USER,MUSIC_NAME,NAME,MONTHLY_LISTENER,verify,avatar /* CẦN CÁI NÀO THÌ LẤY */ 
FROM MUSIC, SING_BY, USER
WHERE ID_USER = ID_SINGER AND MUSIC.ID_MUSIC = SING_BY.ID_MUSIC; /*AND MUSIC_ID =*/ /* TÌM ID BÀI NÀO CHỖ NÀY NẾU TÌM HẾT THÌ BỎ */

-- TRUY XUẤT TÁC GIẢ BÀI HÁt
SELECT ID_USER,MUSIC_NAME,NAME,MONTHLY_LISTENER,verify,avatar
FROM MUSIC, AUTHOR_MUSIC, USER
WHERE MUSIC.ID_MUSIC = AUTHOR_MUSIC.ID_MUSIC AND ID_AUT = ID_USER /* AND USER_ID= */;
 
 -- TRUY XUẤT PHIẾU MUA CỦA AI
 SELECT * -- CẦN LẤY THÔNG TIN J THÊM VÔ CHỖ NÀY 
 FROM USER , RECEIPT
 WHERE USER.ID_USER = RECEIPT.ID_USER /* AND ID_USER =  */ ;
 
 -- TRUY SUẤT LỊCH SỬ XEM
 SELECT * -- HMMM CẦN LẤY THÔNG TIN NÀO THÊM VÔ NHA :( CHƯA CÓ THÊM DATA VÀO LỊCH SỬ 
 FROM USER,HISTORY,ALBUM,MUSIC
 WHERE USER.ID_USER = HISTORY.ID_USER AND ALBUM.ID_ALBUM = HISTORY.ID_ALBUM AND HISTORY.ID_MUSIC = MUSIC.ID_MUSIC /* AND ID_USER =  */
