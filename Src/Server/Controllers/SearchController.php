<?php

class SearchController extends Controller
{

    function index(): void
    {
        header("Location: /play");
    }

    function getDataForSearch() {
        $model = $this->model("SearchModel");
        $album_query = "select ALBUM_ID, ALBUM_NAME, DESCRIPTIONS, ALBUM_IMG from ALBUM;";
        $song_query = <<<WUT
                        SELECT SONG.SONG_ID, SONG_NAME, USER.NAME, SONG.DURATION, SONG_IMG 
                        FROM SONG, SING_BY ,USER 
                        WHERE SONG.SONG_ID = SING_BY.MUSIC_ID AND SING_BY.AUTHOR_ID = USER.USER_ID
                        WUT;
        $artist_query = "SELECT USER_ID, NAME, AVATAR FROM USER WHERE TYPE = 2 OR TYPE = 3 OR TYPE = 4";

        $res = [
            'albums' => $model->getData($album_query),
            'songs' => $model->getData($song_query),
            'artists' => $model->getData($artist_query)
        ];
        echo json_encode($res);
    }
}