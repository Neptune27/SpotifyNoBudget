<?php

class SongModel extends Model
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getRecentlyAdded($limit): array
    {
        $limit = htmlspecialchars($limit);
        $query = <<<WUT
            SELECT ADDED_DATE, DURATION, LYRICS, SA.SONG_ID, SONG_IMG, SONG_LOCATION, SONG_NAME, TOTAL_VIEW, ALBUM_NAME, A.ALBUM_ID, USER_ID AS ARTIST_ID, NAME AS ARTIST
            FROM SONG
            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
        WUT;


        return $this->getData($query);
    }

    public function getLyric($id) {
        $query = "SELECT LYRICS FROM SONG WHERE SONG_ID={$id}";
        return $this->getData($query);
    }

    public function getSongs($id, $song, $from) {
        $secondCond = "";
        if ($song !== "") {
            $secondCond = "AND (SONG.SONG_ID = '{$song}' OR SONG.SONG_NAME like '%{$song}%')";
        }
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, U.USER_ID AS ARTIST_ID, TOTAL_VIEW, DURATION, ALBUM_NAME, SA.ALBUM_ID, ALBUM_IMG, U.AVATAR AS ARTIST_IMG
                        FROM SONG
                            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
                            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
                            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
                        WHERE A.ALBUM_ID = {$id} {$secondCond} LIMIT {$from}, 20;
                        END;
        return $this->getData($song_query);
    }

    public function getSong($id) {
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, U.USER_ID AS ARTIST_ID, TOTAL_VIEW, DURATION, ALBUM_NAME, SA.ALBUM_ID, ALBUM_IMG, U.AVATAR AS ARTIST_IMG
                        FROM SONG
                            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
                            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
                            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
                        WHERE SONG.SONG_ID = {$id};
                        END;
        return $this->getData($song_query);
    }

    public function addSong($songName, $loc, $duration, $lyrics, $albumID, $artistID) {
        $latestID = $this->getData("SELECT SONG_ID FROM SONG WHERE SONG_ID=(SELECT max(SONG_ID) FROM SONG);");
        $newID = 1;
        if (isset($latestID[0])) {
            $newID = $latestID[0]["SONG_ID"] + 1;
        }
        $songImg = $this->getData("SELECT ALBUM_IMG FROM ALBUM WHERE ALBUM_ID={$albumID}");
        $date = date("Y-m-d H:i:s");
        $this->update("INSERT INTO SONG VALUE ({$newID}, '{$songName}', '{$songImg[0]["ALBUM_IMG"]}',0,{$duration},'{$loc}', '{$lyrics}', '{$date}')");
        $this->update("INSERT INTO AUTHOR_SONG VALUE ({$newID},{$artistID})");
        $this->update("INSERT INTO SING_BY VALUE ({$artistID},{$newID})");
        $this->update("INSERT INTO SONG_ALBUM VALUE ({$newID}, {$albumID})");
    }

    public function alterSong($songName, $loc, $duration, $lyrics, $albumID, $artistID, $songID) {
        $encoded = $this->con->real_escape_string($lyrics);
        $songImg = $this->getData("SELECT ALBUM_IMG FROM ALBUM WHERE ALBUM_ID={$albumID}");
        $this->update("UPDATE SONG SET SONG_NAME='{$songName}', SONG_IMG='{$songImg[0]["ALBUM_IMG"]}', DURATION={$duration}, LYRICS='{$encoded}' WHERE SONG_ID={$songID}");
    }

    public function getTotalSong($albumID, $song) {
        $secondCond = "";
        if ($song !== "") {
            $secondCond = "AND (SONG.SONG_ID = '{$song}' OR SONG.SONG_NAME like '%{$song}%')";
        }
        $encoded = $this->con->real_escape_string($albumID);
        $query = <<<WUT
            SELECT COUNT(*) AS TOTAL_PAGE FROM SONG LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                                          WHERE SA.ALBUM_ID={$encoded} {$secondCond}; 
        WUT;
        return $this->getData($query);
    }

}