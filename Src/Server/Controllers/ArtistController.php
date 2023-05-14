<?php

class ArtistController extends Controller
{
    private ArtistModel $model;
    function index() : void
    {

        header("Location: /play");
    }

    function getDataArtist($params) {
        $this->model = $this->model("ArtistModel");
        $song_query = <<<END
                        SELECT SA.SONG_ID, SONG_LOCATION, LYRICS, SONG_NAME, SONG_IMG, U.NAME AS ARTIST, 
                               U.USER_ID AS ARTIST_ID, TOTAL_VIEW, DURATION, ALBUM_NAME, SA.ALBUM_ID, U.AVATAR AS ARTIST_IMG
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
            'artist' => $this->model->getArtist($params[0]),
            'songs' => $this->model->getData($song_query),
            'albums' => $this->model->getData($album_query)
        ];

        echo json_encode($res);
    }

}