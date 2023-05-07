<?php

class AlbumModel extends Model {

    function GetAllAlbumFrom($id) {
        $album_query = <<<WUT
                            SELECT ALBUM.ALBUM_ID, ALBUM_NAME, ALBUM_IMG, DESCRIPTIONS, TOTAL_LISTENER 
                            from ALBUM, ALBUM_CREATED_BY WHERE ALBUM.ALBUM_ID = ALBUM_CREATED_BY.ALBUM_ID
                            AND ALBUM_CREATED_BY.USER_ID = {$id}
                        WUT;
        return $this->getData($album_query);
    }

    function GetAlbum($id) {
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, U.USER_ID AS ARTIST_ID, TOTAL_VIEW, DURATION, ALBUM_NAME, SA.ALBUM_ID, ALBUM_IMG, U.AVATAR AS ARTIST_IMG
                        FROM SONG
                            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
                            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
                            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
                        WHERE A.ALBUM_ID = {$id};
                        END;
        return $this->getData($song_query);
    }

    
    function addAlbum($name, $IMG, $DES,$Time,$Date,$listen,$Song,$user) {
        $AlbumID = $this->createUserID();
        $Album_query = <<<r
                            INSERT INTO album (ALBUM_ID ,TOTAL_LISTENER,ALBUM_NAME,ALBUM_IMG,DESCRIPTIONS,TIME,	DATE)
                            VALUES (?, ?, ?, ?, ?, {$Time},{$Date});
                        r;

        $stmt = $this->con->prepare($Album_query);
        $stmt->bind_param("iisss",
            $AlbumID,$listen, $name, $IMG, $DES);
        $stmt->execute();

        for($x=0;x<count($Song);x++){
        $Album_query = <<<r
                            INSERT INTO song_album (ALBUM_ID ,SONG_ID)
                            VALUES (?, ?);
                        r;

        $stmt = $this->con->prepare($Album_query);
        $stmt->bind_param("ii",
            $AlbumID,$Song[$x]);
        $stmt->execute();
        }

        for($x=0;x<count($user);x++){
            $Album_query = <<<r
                                INSERT INTO album_created_by (ALBUM_ID ,USER_ID)
                                VALUES (?, ?);
                            r;
    
            $stmt = $this->con->prepare($Album_query);
            $stmt->bind_param("ii",
                $AlbumID,$user[$x]);
            $stmt->execute();
            }

            $Album_query = <<<ooo
                    UPDATE USER 
                    SET NUMBER_OF_SONG = {$this->createAlbumSong($AlbumID)}
                    WHERE USER_ID = ?;
                    ooo;
    
            $stmt = $this->con->prepare($Album_query);
            $stmt->bind_param("i",
                $AlbumID);
            $stmt->execute();


    }

    function createAlbumSong($id) {
        $i=0;
        $result = mysqli_query($this->con, "SELECT count(*) as ID FROM song_album where ALBUM_ID = {$id}  ");
        if (mysqli_num_rows($result) > 0) {
            $row = $result->fetch_assoc();
            $i = (int)$row["ID"];
        } 
    
    return $i;
}

    function createAlbumID() {
        $i=0;
            $result = mysqli_query($this->con, "SELECT count(*) as ID FROM album ");
            if (mysqli_num_rows($result) > 0) {
                $row = $result->fetch_assoc();
                $i = (int)$row["ID"]+1;
            } 
        
        return $i;
    }

    function editAlbum($id,$name, $IMG, $DES,$Time,$Date,$listen,$Song,$user) {
        
        $del_query = "DELETE FROM album_created_by WHERE USER_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $del_query = "DELETE FROM song_album WHERE USER_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        
        for($x=0;x<count($Song);x++){
            $Album_query = <<<r
                                INSERT INTO song_album (ALBUM_ID ,SONG_ID)
                                VALUES (?, ?);
                            r;
    
            $stmt = $this->con->prepare($Album_query);
            $stmt->bind_param("ii",
                $AlbumID,$Song[$x]);
            $stmt->execute();
            }
    
            for($x=0;x<count($user);x++){
                $Album_query = <<<r
                                    INSERT INTO album_created_by (ALBUM_ID ,USER_ID)
                                    VALUES (?, ?);
                                r;
        
                $stmt = $this->con->prepare($Album_query);
                $stmt->bind_param("ii",
                    $AlbumID,$user[$x]);
                $stmt->execute();
                }


        $update_query = <<<qqq
        UPDATE `album` SET `NUMBER_OF_SONG`=?,`TOTAL_LISTENER`=?,`ALBUM_NAME`=?,`ALBUM_IMG`=?,`DESCRIPTIONS`=?,`TIME`={$Time},`DATE`={$Date} WHERE `ALBUM_ID`= ?
                        qqq;

        $stmt = $this->con->prepare($update_query);
        $stmt->bind_param("iisssi",
        this->createAlbumSong($id),$listen,$name,$IMG,$DES,$id);
        $stmt->execute();
    }

    function getDetailAlbumSong($ID) {
        $Album_query = <<<qqq
                            SELECT a.song_id,SONG_NAME
                            FROM song_album as a,song as s
                            WHERE ALBUM_ID = {$ID} and a.song_id = a.song_id ;
                        qqq;
        return $this->getData($Album_query);
    }

    function getAllIDSong() {
        $Album_query = <<<qqq
                            SELECT song_id,SONG_NAME
                            FROM song;
                        qqq;
        return $this->getData($Album_query);
    }

    function getAllIDUser() {
        $Album_query = <<<qqq
                            SELECT USER_ID,NAME
                            FROM user
                            where type = 2 or type = 4;
                        qqq;
        return $this->getData($Album_query);
    }

    function getDetailAlbum($ID) {
        $Album_query = <<<qqq
                            SELECT *
                            FROM album
                            WHERE ALBUM_ID = {$ID};
                        qqq;
        return $this->getData($Album_query);
    }

    function getDetailAlbumCreated($ID) {
        $Album_query = <<<qqq
                            SELECT a.USER_ID,NAME
                            FROM album_created_by as a,user as u
                             WHERE ALBUM_ID = {$ID} and a.USER_ID = u.USER_ID ;
                        qqq;
        return $this->getData($Album_query);
    }

    function deleteAlbum($id) {

        $del_query = "DELETE FROM album_created_by WHERE USER_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $del_query = "DELETE FROM song_album WHERE USER_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();


        $del_query = "DELETE FROM album WHERE USER_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
    }

    function getAlbumByName($name,$number) {
        $Album_query = "select * from album WHERE NAME LIKE '%{$name}%' LIMIT {$number-1}*20,{$number}*20";
        return $this->getData($Album_query);
    }
}