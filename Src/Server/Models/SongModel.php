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
}