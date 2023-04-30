<?php

class ArtistModel extends Model
{
    function getArtist($userID) {
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE USER_ID = {$userID}";
        return $this->getData($artist_query);
    }

    function getAllArtist() {
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE TYPE=2";
        return $this->getData($artist_query);
    }

    function getAllAlbum()
    {

    }
}