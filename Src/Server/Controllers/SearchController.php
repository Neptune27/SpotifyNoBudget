<?php

class SearchController extends Controller
{

    function index(): void
    {
        header("Location: /play");
    }

//    TODO MERGE THIS!
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
//
//    function getDataForSearch($params) {
//        $model = $this->model("SearchModel");
//        if (isset($params[0])) {
//            $album_query = "SELECT ID_ALBUM, ALBUM_NAME, DESCRIPTIONS, ALBUM_IMG ".
//                            "FROM ALBUM WHERE ALBUM_NAME LIKE '{$params[0]}%' LIMIT 20;";
//            $song_query = "SELECT MUSIC.ID_MUSIC, MUSIC_NAME, USER.NAME, MUSIC.TIME, MUSIC_IMG ".
//                            "FROM MUSIC, SING_BY ,USER ".
//                            "WHERE MUSIC.ID_MUSIC = SING_BY.ID_MUSIC AND SING_BY.ID_SINGER = USER.ID_USER ".
//                            "AND MUSIC_NAME LIKE '{$params[0]}%' LIMIT 20;";
//            $artist_query = "SELECT ID_USER, NAME, avatar FROM USER WHERE (TYPE = 2 OR TYPE = 3 OR TYPE = 4) AND NAME LIKE '{$params[0]}%' LIMIT 20;";
//        }
//        else {
//            $album_query = "SELECT ID_ALBUM, ALBUM_NAME, DESCRIPTIONS, ALBUM_IMG ".
//                "FROM ALBUM WHERE ALBUM_NAME LIKE '%' LIMIT 20;";
//            $song_query = "SELECT MUSIC.ID_MUSIC, MUSIC_NAME, USER.NAME, MUSIC.TIME, MUSIC_IMG ".
//                "FROM MUSIC, SING_BY ,USER ".
//                "WHERE MUSIC.ID_MUSIC = SING_BY.ID_MUSIC AND SING_BY.ID_SINGER = USER.ID_USER ".
//                "AND MUSIC_NAME LIKE '%' LIMIT 20;";
//            $artist_query = "SELECT ID_USER, NAME, avatar FROM USER WHERE (TYPE = 2 OR TYPE = 3 OR TYPE = 4) AND NAME LIKE '%' LIMIT 20;";
//        }
//
//        $res = [
//            'albums' => $model->getData($album_query),
//            'songs' => $model->getData($song_query),
//            'artists' => $model->getData($artist_query)
//        ];
//        echo json_encode($res);
//    }
}