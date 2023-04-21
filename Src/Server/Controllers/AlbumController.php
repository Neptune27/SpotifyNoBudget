<?php

class AlbumController extends Controller
{

    function GetAlbum($params) {
        if (!isset($params)) {
            return;
        }

        $model = $this->model("ArtistModel");
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, U.USER_ID AS ARTIST_ID, TOTAL_VIEW, DURATION, ALBUM_NAME, SA.ALBUM_ID, ALBUM_IMG, U.AVATAR AS ARTIST_IMG
                        FROM SONG
                            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
                            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
                            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
                        WHERE A.ALBUM_ID = {$params[0]};
                        END;

        echo json_encode($model->getData($song_query));
    }

    function index(): void
    {
        // TODO: Implement index() method.
    }
}