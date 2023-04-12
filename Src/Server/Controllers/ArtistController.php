<?php

class ArtistController extends Controller
{
    function index() : void
    {

        header("Location: /play");
    }

    function getDataArtist($params) {
        $model = $this->model("ArtistModel");
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE USER_ID = {$params[0]}";
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, TOTAL_VIEW, DURATION, ALBUM_NAME
                        FROM SONG
                            LEFT JOIN SONG_ALBUM SA on SONG.SONG_ID = SA.SONG_ID
                            LEFT JOIN ALBUM A on A.ALBUM_ID = SA.ALBUM_ID
                            LEFT JOIN SING_BY SB on SONG.SONG_ID = SB.MUSIC_ID
                            LEFT JOIN USER U on U.USER_ID = SB.AUTHOR_ID
                        WHERE USER_ID = {$params[0]};
                        END;
        $album_query = <<<WUT
                            SELECT ALBUM.ALBUM_ID, ALBUM_NAME, ALBUM_IMG, DESCRIPTIONS, TOTAL_LISTENER 
                            from ALBUM, ALBUM_CREATED_BY WHERE ALBUM.ALBUM_ID = ALBUM_CREATED_BY.ALBUM_ID
                            AND ALBUM_CREATED_BY.USER_ID = {$params[0]}
                        WUT;

        $res = [
            'artist' => $model->getData($artist_query),
            'songs' => $model->getData($song_query),
            'albums' => $model->getData($album_query)
        ];

        echo json_encode($res);
    }

}