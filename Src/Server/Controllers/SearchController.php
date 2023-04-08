<?php

class SearchController extends Controller
{

    function index(): void
    {
        header("Location: /play");
    }

    function getDataForSearch() {
        $model = $this->model("SearchModel");
        $album_query = "select ID_ALBUM, ALBUM_NAME, DESCRIPTIONS, ALBUM_IMG from ALBUM;";
        $song_query = "SELECT MUSIC.ID_MUSIC, MUSIC_NAME, USER.NAME, MUSIC.TIME, MUSIC_IMG ".
                        "FROM MUSIC, SING_BY ,USER ".
                        "WHERE MUSIC.ID_MUSIC = SING_BY.ID_MUSIC AND SING_BY.ID_SINGER = USER.ID_USER;";
        $artist_query = "SELECT ID_USER, NAME, avatar FROM USER";

        $res = [
            'albums' => $model->getData($album_query),
            'songs' => $model->getData($song_query),
            'artists' => $model->getData($artist_query)
        ];
        echo json_encode($res);
    }
}