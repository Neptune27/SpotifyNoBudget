<?php

class ArtistController extends Controller
{
    function index() : void
    {

        header("Location: /play");
    }

    function getDataArtist($params) {
        $model = $this->model("ArtistModel");
        $artist_query = "select ID_USER, NAME, MONTHLY_LISTENER, verify, avatar from USER WHERE ID_USER = {$params[0]};";
        $song_query = "SELECT MUSIC.ID_MUSIC, MUSIC_NAME, MUSIC_IMG, VIEW, MUSIC.TIME, ALBUM_NAME ".
                      "FROM MUSIC, ALBUM, MUSIC_ALBUM, AUTHOR_MUSIC ".
                      "WHERE MUSIC.ID_MUSIC = MUSIC_ALBUM.ID_MUSIC AND MUSIC_ALBUM.ID_ALBUM = ALBUM.ID_ALBUM ".
                      "AND AUTHOR_MUSIC.ID_MUSIC = MUSIC.ID_MUSIC AND ID_AUT = {$params[0]};";
        $album_query = "select ALBUM.ID_ALBUM, ALBUM_NAME, ALBUM_IMG, DESCRIPTIONS, LISTENERS ".
                        "from ALBUM, ALBUM_CREATED_BY ".
                        "WHERE ALBUM.ID_ALBUM = ALBUM_CREATED_BY.ID_ALBUM ".
                        "AND ALBUM_CREATED_BY.ID_USER = {$params[0]};";

        $res = [
            'artist' => $model->getData($artist_query),
            'songs' => $model->getData($song_query),
            'albums' => $model->getData($album_query)
        ];

        echo json_encode($res);
    }

}