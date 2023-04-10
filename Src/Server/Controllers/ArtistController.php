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
                        SELECT SONG.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, USER.NAME AS ARTIST, TOTAL_VIEW, SONG.DURATION, ALBUM_NAME 
                        FROM SONG, ALBUM, SONG_ALBUM, AUTHOR_SONG, USER WHERE SONG.SONG_ID = SONG_ALBUM.SONG_ID 
                        AND SONG_ALBUM.ALBUM_ID = ALBUM.ALBUM_ID AND AUTHOR_SONG.SONG_ID = SONG.SONG_ID 
                        AND AUTHOR_ID = {$params[0]}
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