drop database if exists spotify;
create database spotify;
use spotify;

/*==============================================================*/
/* Table: ALBUM                                                 */
/*==============================================================*/
create table ALBUM
(
   ID_ALBUM             int not null,
   NUMBER_SONG          int,
   TIME                 time,
   DATE                 date,
   primary key (ID_ALBUM)
);

/*==============================================================*/
/* Table: AUTHOR                                                */
/*==============================================================*/
create table AUTHOR
(
	
   ID_USER              int not null,
   NAME                 char(255),
   PASSWORD             char(255),
   GENDER               bool,
   BIRTH                date,
   COUNTRY              char(255),
   EMAIL                char(255),
   HAVE_PRIMIUM         bool,
   TYPE                 int,
   primary key (ID_USER)

);

/*==============================================================*/
/* Table: AUTHOR_MUSIC                                          */
/*==============================================================*/
create table AUTHOR_MUSIC
(
   ID_USER              int not null,
   ID_MUSIC             int not null,
   primary key (ID_USER, ID_MUSIC)
);

/*==============================================================*/
/* Table: CREAT                                                 */
/*==============================================================*/
create table CREAT
(
   ID_USER              int not null,
   ID_ALBUM             int not null,
   primary key (ID_USER, ID_ALBUM)
);

/*==============================================================*/
/* Table: FOLLOW                                                */
/*==============================================================*/
create table FOLLOW
(
   USE_ID_USER          int not null,
   ID_USER              int not null,
   primary key (USE_ID_USER, ID_USER)
);

/*==============================================================*/
/* Table: LIS_AL_MONTHLY                                        */
/*==============================================================*/
create table LIS_AL_MONTHLY
(
   ID_USER              int not null,
   ID_ALBUM             int not null,
   primary key (ID_USER, ID_ALBUM)
);

/*==============================================================*/
/* Table: LIS_MUS_MONTHLY                                       */
/*==============================================================*/
create table LIS_MUS_MONTHLY
(
   ID_USER              int not null,
   ID_MUSIC             int not null,
   primary key (ID_USER, ID_MUSIC)
);

/*==============================================================*/
/* Table: MUSIC                                                 */
/*==============================================================*/
create table MUSIC
(
   ID_MUSIC             int not null,
   ID_ALBUM             int,
   VIEW                 int,
   TIME                 time,
   primary key (ID_MUSIC)
);

/*==============================================================*/
/* Table:  lyrics                                              */
/*==============================================================*/
create table LYRICS
(
   ID_MUSIC             int not null,
   lyrics				char(255),-- CHỖ NÀY CÓ THỂ LƯU BÀI HÁT
   TIME                 int,
   primary key (ID_MUSIC)
);

/*==============================================================*/
/* Table: RECEIPT                                               */
/*==============================================================*/
create table RECEIPT
(
   ID_RECEIPT           char(255) not null,
   ID_USER              int not null,
   DATE_BUY             date,
   TOTAL_PRICE          int,
   PAYMENT              char(255),
   RETAILER             char(255),
   ADDRESS              char(255),
   VAT_NUMBER           int,
   PRODUCT              char(255),
   TOTAL_TAX            int,
   TAX                  int,
   PRICE                int,
   primary key (ID_RECEIPT)
);

/*==============================================================*/
/* Table: SING                                                  */
/*==============================================================*/
create table SING
(
   ID_USER              int not null,
   ID_MUSIC             int not null,
   primary key (ID_USER, ID_MUSIC)
);

/*==============================================================*/
/* Table: SINGER                                                */
/*==============================================================*/
create table SINGER
(
   ID_USER              int not null,
   NAME                 char(255),
   PASSWORD             char(255),
   GENDER               bool,
   BIRTH                date,
   COUNTRY              char(255),
   EMAIL                char(255),
   HAVE_PRIMIUM         bool,
   TYPE                 int,
   MONTHLY_LISTENER     int,
   primary key (ID_USER)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   ID_USER              int not null,
   NAME                 char(255),
   PASSWORD             char(255),
   GENDER               bool,
   BIRTH                date,
   COUNTRY              char(255),
   EMAIL                char(255),
   HAVE_PRIMIUM         bool,
   TYPE                 int,
   primary key (ID_USER)
);

alter table AUTHOR add constraint FK_INHERITANCE_1 foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table AUTHOR_MUSIC add constraint FK_AUTHOR_MUSIC foreign key (ID_USER)
      references AUTHOR (ID_USER) on delete restrict on update restrict;

alter table AUTHOR_MUSIC add constraint FK_AUTHOR_MUSIC2 foreign key (ID_MUSIC)
      references MUSIC (ID_MUSIC) on delete restrict on update restrict;

alter table CREAT add constraint FK_CREAT foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table CREAT add constraint FK_CREAT2 foreign key (ID_ALBUM)
      references ALBUM (ID_ALBUM) on delete restrict on update restrict;

alter table FOLLOW add constraint FK_FOLLOW foreign key (USE_ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table FOLLOW add constraint FK_FOLLOW2 foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table LIS_AL_MONTHLY add constraint FK_LIS_AL_MONTHLY foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table LIS_AL_MONTHLY add constraint FK_LIS_AL_MONTHLY2 foreign key (ID_ALBUM)
      references ALBUM (ID_ALBUM) on delete restrict on update restrict;

alter table LIS_MUS_MONTHLY add constraint FK_LIS_MUS_MONTHLY foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table LIS_MUS_MONTHLY add constraint FK_LIS_MUS_MONTHLY2 foreign key (ID_MUSIC)
      references MUSIC (ID_MUSIC) on delete restrict on update restrict;

alter table MUSIC add constraint FK_MUSIC_ALBUM foreign key (ID_ALBUM)
      references ALBUM (ID_ALBUM) on delete restrict on update restrict;

alter table RECEIPT add constraint FK_BUY foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;

alter table SING add constraint FK_SING foreign key (ID_USER)
      references SINGER (ID_USER) on delete restrict on update restrict;

alter table SING add constraint FK_SING2 foreign key (ID_MUSIC)
      references MUSIC (ID_MUSIC) on delete restrict on update restrict;

alter table SINGER add constraint FK_INHERITANCE_2 foreign key (ID_USER)
      references USER (ID_USER) on delete restrict on update restrict;
alter table LYRICS add constraint FK_HAVE_3 foreign key (ID_MUSIC)
      references MUSIC (ID_MUSIC) on delete restrict on update restrict;
