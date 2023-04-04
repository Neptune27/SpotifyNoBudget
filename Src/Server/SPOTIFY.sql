drop database if exists spotify;
create database spotify;
use spotify;

drop table if exists  ALBUM;
 
drop table if exists AUTHOR_MUSIC;

drop table if exists CREAT;

drop table if exists FOLLOW;

drop table if exists HISTORY;

drop table if exists MUSIC;

drop table if exists MUSIC_ALBUM;

drop table if exists RECEIPT;

drop table if exists SING;


drop table if exists USER;

/*==============================================================*/
/* Table: ALBUM                                                 */
/*==============================================================*/
create table ALBUM (
ID_ALBUM integer not null,
NUMBER_SONG integer,
TIME time,
DATE date,
primary key (ID_ALBUM)
);


/*==============================================================*/
/* Table: AUTHOR_MUSIC                                          */
/*==============================================================*/
create table AUTHOR_MUSIC (
AUT_USE_ID_USER integer not null,
MUS_ID_MUSIC integer not null,
primary key (AUT_USE_ID_USER, MUS_ID_MUSIC)
);

/*==============================================================*/
/* Table: CREAT                                                 */
/*==============================================================*/
create table CREAT (
USE_ID_USER integer not null,
ALB_ID_ALBUM integer not null,
primary key (USE_ID_USER, ALB_ID_ALBUM)
);

/*==============================================================*/
/* Table: FOLLOW                                                */
/*==============================================================*/
create table FOLLOW (
USE_ID_USER integer not null,
USE_ID_USER2 integer not null,
primary key (USE_ID_USER, USE_ID_USER2)
);

/*==============================================================*/
/* Table: HISTORY                                               */
/*==============================================================*/
create table HISTORY (
ALB_ID_ALBUM integer not null,
USE_ID_USER integer not null,
MUS_ID_MUSIC integer not null,
primary key (ALB_ID_ALBUM, USE_ID_USER, MUS_ID_MUSIC)
);

/*==============================================================*/
/* Table: MUSIC                                                 */
/*==============================================================*/
create table MUSIC (
ID_MUSIC integer not null,
VIEW integer,
TIME time,
LINK nvarchar(255),
LINK_JSON nvarchar(255),
primary key (ID_MUSIC)
);

/*==============================================================*/
/* Table: MUSIC_ALBUM                                           */
/*==============================================================*/
create table MUSIC_ALBUM (
MUS_ID_MUSIC integer not null,
ALB_ID_ALBUM integer not null,
primary key (MUS_ID_MUSIC, ALB_ID_ALBUM)
);

/*==============================================================*/
/* Table: RECEIPT                                               */
/*==============================================================*/
create table RECEIPT (
ID_RECEIPT nvarchar(255) not null,
USE_ID_USER integer not null,
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
/* Table: SING                                                  */
/*==============================================================*/
create table SING (
SIN_USE_ID_USER integer not null,
MUS_ID_MUSIC integer not null,
primary key (SIN_USE_ID_USER, MUS_ID_MUSIC)
);


/*==============================================================*/
/* Table: USER                                                */
/*==============================================================*/
create table USER (
ID_USER integer not null,
NAME nvarchar(255),
PASSWORD nvarchar(255),
GENDER boolean,
BIRTH date,
COUNTRY nvarchar(255),
EMAIL nvarchar(255),
HAVE_PRIMIUM boolean,
TYPE integer,
MONTHLY_LISTENER integer,
primary key (ID_USER)
);


alter table AUTHOR_MUSIC
   add foreign key FK_AUTH_AUTH_AUTH (AUT_USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table AUTHOR_MUSIC
   add foreign key FK_AUTH_AUTH_MUSI (MUS_ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table CREAT
   add foreign key FK_CREA_CREA_USER (USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table CREAT
   add foreign key FK_CREA_CREA_ALBU (ALB_ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table FOLLOW
   add foreign key FK_FOLL_FOLL_USER (USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table FOLLOW
   add foreign key FK_FOLL_FOLL_USER (USE_ID_USER2)
      references USER (ID_USER)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_HIS__ALBU (ALB_ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_HIS__MUSI (MUS_ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table HISTORY
   add foreign key FK_HIST_USER_USER (USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table MUSIC_ALBUM
   add foreign key FK_MUSI_MUSI_MUSI (MUS_ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

alter table MUSIC_ALBUM
   add foreign key FK_MUSI_MUSI_ALBU (ALB_ID_ALBUM)
      references ALBUM (ID_ALBUM)
      on delete restrict;

alter table RECEIPT
   add foreign key FK_RECE_BUY_USER (USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table SING
   add foreign key FK_SING_SING_SING (SIN_USE_ID_USER)
      references USER (ID_USER)
      on delete restrict;

alter table SING
   add foreign key FK_SING_SING_MUSI (MUS_ID_MUSIC)
      references MUSIC (ID_MUSIC)
      on delete restrict;

