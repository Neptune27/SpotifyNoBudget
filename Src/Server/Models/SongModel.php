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
        $query = "SELECT * FROM SPOTIFY.SONG ORDER BY ADDED_DATE DESC LIMIT $limit";
        return $this->getData($query);
    }
}