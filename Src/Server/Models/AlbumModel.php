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

    function GetPlaylistByUserID($id) {
        $song_query = <<<END
                        SELECT ALBUM.ALBUM_ID, ALBUM_NAME 
                        FROM ALBUM, ALBUM_CREATED_BY, USER
                        WHERE ALBUM.ALBUM_ID = ALBUM_CREATED_BY.ALBUM_ID AND 
                              ALBUM_CREATED_BY.USER_ID = USER.USER_ID AND 
                              USER.USER_ID = {$id};
                        END;
        return $this->getData($song_query);
    }

    function AddSongToPlaylist($songId, $albumId) {
        $album_query = <<<Thien
                            INSERT INTO SONG_ALBUM (SONG_ID, ALBUM_ID)
                            VALUES (?, ?);
                        Thien;

        $stmt = $this->con->prepare($album_query);
        $stmt->bind_param("ii", $songId, $albumId);
        $stmt->execute();
    }

    function CreateAlbumId() {
        $i = 1;
        while (true) {
            $result = mysqli_query($this->con, "SELECT * FROM ALBUM WHERE ALBUM_ID = $i");
            if (mysqli_num_rows($result) > 0) {
                $i = $i + 1;
                continue;
            }
            break;
        }
        return $i;
    }

    function CreatePlaylist($albumName, $userId) {
        $albumId = $this->CreateAlbumId();
        $date = date('Y-m-d');
        $na = "NA";

        $this->con->begin_transaction();
        try {
            $album_query = <<<Thien
                            INSERT INTO ALBUM (ALBUM_ID, ALBUM_NAME, ALBUM_IMG, DESCRIPTIONS, DATE)
                            VALUES (?, ?, ?, ?, ?);
                        Thien;
            $stmt = $this->con->prepare($album_query);
            $stmt->bind_param("issss", $albumId, $albumName, $na, $na, $date);
            $stmt->execute();

            $album_query = <<<Thien
                            INSERT INTO ALBUM_CREATED_BY (USER_ID, ALBUM_ID)
                            VALUES (?, ?);
                        Thien;
            $stmt = $this->con->prepare($album_query);
            $stmt->bind_param("ii", $userId, $albumId);
            $stmt->execute();

            $this->con->commit();
        } catch (Exception $e) {
            $this->con->rollback();
        }
    }

    function GetAlbumDetail($userId) {
        $album_query = <<<END
                        SELECT ALBUM.ALBUM_ID, ALBUM_NAME, USERNAME, DATE 
                        FROM ALBUM, ALBUM_CREATED_BY, USER
                        WHERE ALBUM.ALBUM_ID = ALBUM_CREATED_BY.ALBUM_ID AND 
                              ALBUM_CREATED_BY.USER_ID = USER.USER_ID AND 
                              USER.USER_ID = {$userId};
                        END;
        return $this->getData($album_query);
    }

    function GetAlbumCreator($userId) {
        $album_query = <<<END
                        SELECT ALBUM.ALBUM_ID, ALBUM_NAME, USER.NAME, USER.USER_ID, TYPE, USER.AVATAR, DATE 
                        FROM ALBUM, ALBUM_CREATED_BY, USER
                        WHERE ALBUM.ALBUM_ID = ALBUM_CREATED_BY.ALBUM_ID AND 
                              ALBUM_CREATED_BY.USER_ID = USER.USER_ID AND 
                              ALBUM.ALBUM_ID={$userId};
                        END;
        return $this->getData($album_query);
    }
}