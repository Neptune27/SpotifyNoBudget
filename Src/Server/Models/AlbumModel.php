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
        $AlbumID = $this->createAlbumID(); 
        $this->update("INSERT INTO ALBUM (ALBUM_ID ,TOTAL_LISTENER,ALBUM_NAME,ALBUM_IMG,DESCRIPTIONS, TIME,	DATE) VALUE ({$AlbumID}, {$listen}, '{$name}', '{$IMG}','{$DES}', '{$Time}','{$Date}')");
        // if($song.)
        $Songss=explode(",",$Song);
        if($Song!=""){
        for($x=0;$x<count($Songss);$x++){
                        $this->update("INSERT INTO song_album (ALBUM_ID ,SONG_ID) VALUES ({$AlbumID}, {$Songss[$x]})");
        }
    }
        
        $userss=explode(",",$user);
        if($user!=""){
        for($x=0;$x<count($userss);$x++){
           
            $this->update("INSERT INTO album_created_by (ALBUM_ID ,USER_ID) VALUES ({$AlbumID}, {$userss[$x]})");
            }
            $Time = $this->createAlbumTime($AlbumID);
            $listen = $this->createAlbumL($AlbumID);
            $this->update("UPDATE ALBUM SET TIME ='{$Time}', TOTAL_LISTENER = {$listen}  ,NUMBER_OF_SONG = {$this->createAlbumSong($AlbumID) } where ALBUM_ID = {$AlbumID}");

    }}

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
            $result = mysqli_query($this->con, "SELECT Max(ALBUM_ID) as ID FROM album ");
            if (mysqli_num_rows($result) > 0) {
                $row = $result->fetch_assoc();
                $i = (int)$row["ID"]+1;
            } 
        
        return $i;
    }

    function createAlbumTime($id) {
        $i=0;
            $result = mysqli_query($this->con, "SELECT sum(DURATION) as T FROM song,song_album where song.SONG_ID=song_album.SONG_ID and song_album.album_id = {$id}; ");
            if (mysqli_num_rows($result) > 0) {
                $row = $result->fetch_assoc();
                $i = (int)$row["T"];
            } 
            $h=$i/3600;
            $m=$i/60;
            $s=$i%60;
        return FLOOR($h).":".FLOOR($m).":".FLOOR($s);
    }

    function createAlbumL($id) {
        $i=0;
            $result = mysqli_query($this->con, "SELECT sum(TOTAL_VIEW) as L  FROM song,song_album where song.SONG_ID=song_album.SONG_ID and song_album.album_id = {$id}; ");
            if (mysqli_num_rows($result) > 0) {
                $row = $result->fetch_assoc();
                $L = (int)$row["L"];
            } 
        return $L;
    }

    function editAlbum($id,$name, $IMG, $DES,$Time,$Date,$listen,$Song,$user) {
        
        $del_query = "DELETE FROM album_created_by WHERE ALBUM_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $del_query = "DELETE FROM song_album WHERE ALBUM_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $Songss=explode(",",$Song);
        if($Song!=""){
        for($x=0;$x<count($Songss);$x++){
            $Album_query = <<<r
                                INSERT INTO song_album (ALBUM_ID ,SONG_ID)
                                VALUES (?, ?);
                            r;
    
            $stmt = $this->con->prepare($Album_query);
            $stmt->bind_param("ii",
                $id,$Songss[$x]);
            $stmt->execute();
            }}
            
            $userss=explode(",",$user);
            if($user!=""){
            for($x=0;$x<count($userss);$x++){
                $Album_query = <<<r
                                    INSERT INTO album_created_by (ALBUM_ID ,USER_ID)
                                    VALUES (?, ?);
                                r;
        
                $stmt = $this->con->prepare($Album_query);
                $stmt->bind_param("ii",
                    $id,$userss[$x]);
                $stmt->execute();
                }}


        // $update_query = "UPDATE album SET NUMBER_OF_SONG=?,TOTAL_LISTENER=?,ALBUM_NAME=?,ALBUM_IMG=?,DESCRIPTIONS=?,TIME={$Time},DATE={$Date} WHERE ALBUM_ID= ?";

        // $stmt = $this->con->prepare($update_query);
        // $stmt->bind_param("iisssi",
        // $this->createAlbumSong($id),$listen,$name,$IMG,$DES,$id);
        // $stmt->execute();
        $Time = $this->createAlbumTime($id);
        $listen = $this->createAlbumL($id);

        if($IMG=="NA"){
            $this->update("UPDATE album SET NUMBER_OF_SONG={$this->createAlbumSong($id)},TOTAL_LISTENER=$listen,ALBUM_NAME='{$name}',DESCRIPTIONS='{$DES}',TIME='{$Time}',DATE='{$Date}' WHERE ALBUM_ID= {$id}");
        }else{
            $this->update("UPDATE album SET NUMBER_OF_SONG={$this->createAlbumSong($id)},ALBUM_IMG='$IMG',TOTAL_LISTENER=$listen,ALBUM_NAME='{$name}',DESCRIPTIONS='{$DES}',TIME='{$Time}',DATE='{$Date}' WHERE ALBUM_ID= {$id}");
        }
        
    }

    function getDetailAlbumSong($ID) {
        $Album_query = <<<qqq
                            SELECT a.song_id,SONG_NAME
                            FROM song_album as a,song as s
                            WHERE ALBUM_ID = {$ID} and a.song_id = s.song_id ;
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

        $del_query = "DELETE FROM album_created_by WHERE ALBUM_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();

        $del_query = "DELETE FROM song_album WHERE ALBUM_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();


        $del_query = "DELETE FROM album WHERE ALBUM_ID = ?;";
        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
    }


    public function getTotalAlbum($UserID, $Album1) {
        $secondCond = "";
        if ($Album1 !== "") {
            $secondCond = "AND (ALBUM.ALBUM_ID = '{$Album1}' OR ALBUM.ALBUM_NAME like '%{$Album1}%')";
        }
        $encoded = $this->con->real_escape_string($UserID);
        $query = <<<WUT
            SELECT COUNT(*) AS TOTAL_PAGE FROM ALBUM LEFT JOIN ALBUM_CREATED_BY U on ALBUM.ALBUM_ID = U.ALBUM_ID
                                          WHERE U.USER_ID={$encoded} {$secondCond}; 
        WUT;
        return $this->getData($query);
    }

    public function getAlbums($id, $album2, $from) {
        $secondCond = "";
        if ($album2 !== "") {
            $secondCond = "AND (ALBUM.ALBUM_ID = '{$album2}' OR ALBUM.ALBUM_NAME like '%{$album2}%')";
        }
        $query = <<<END
                        SELECT *
                        FROM ALBUM
                            JOIN ALBUM_CREATED_BY ALU on ALBUM.ALBUM_ID=ALU.ALBUM_ID
                            JOIN USER U on U.USER_ID = ALU.USER_ID
                        WHERE U.USER_ID = {$id} {$secondCond} LIMIT {$from}, 20;
                        END;
        return $this->getData($query);
    }

    public function getIDU($id){

        $query = <<<END
                        SELECT *
                        FROM ALBUM
                        WHERE ALBUM_ID = {$id};
                        END;
        return $this->getData($query);

    }

    public function GetArtistByID($id){
        $query = <<<END
                        SELECT *
                        FROM USER
                        WHERE USER_ID = {$id};
                        END;
        return $this->getData($query);
    }

}