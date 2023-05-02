<?php

class ArtistModel extends Model
{
    function getArtist($userID) {
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE USER_ID = {$userID}";
        return $this->getData($artist_query);
    }

    function getArtistByName($name) {
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE NAME LIKE '%{$name}%' LIMIT 20";
        return $this->getData($artist_query);
    }

    function getAllArtist() {
        $artist_query = "select USER_ID, NAME, AVATAR, MONTHLY_LISTENER, VERIFY from USER WHERE TYPE=2 OR TYPE=3 OR TYPE=4";
        return $this->getData($artist_query);
    }

//    Them nghe si vao database
    function addArtist($name, $avatar, $gender, $birth, $verify, $country, $email, $type, $listener) {
        $userID = $this->createUserID();
        $artist_query = <<<Thien
                            INSERT INTO USER (USER_ID, NAME, AVATAR, GENDER, BIRTH, VERIFY, COUNTRY, EMAIL, TYPE, MONTHLY_LISTENER)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                        Thien;

        $stmt = $this->con->prepare($artist_query);
        $stmt->bind_param("issisissii",
            $userID, $name, $avatar, $gender, $birth, $verify, $country, $email, $type, $listener);
        $stmt->execute();
    }
// Tao khoa chinh bang cach tang ID
    function createUserID() {
        $i = 1;
        while (true) {
            $result = mysqli_query($this->con, "SELECT * FROM USER WHERE USER_ID = $i");
            if (mysqli_num_rows($result) > 0) {
                $i = $i + 1;
            } else {
                break;
            }
        }
        return $i;
    }
//    Chinh sua nghe si trong database
    function editArtist($userID, $name, $avatar, $gender, $birth, $verify, $country, $email, $type, $listener) {
        $update_query = <<<Thien
                            UPDATE USER 
                            SET NAME = ?, AVATAR = ?, GENDER = ?, BIRTH = ?, VERIFY = ?, COUNTRY = ?, EMAIL = ?, TYPE = ?, MONTHLY_LISTENER = ?
                            WHERE USER_ID = ?;
                        Thien;

        $stmt = $this->con->prepare($update_query);
        $stmt->bind_param("ssisissiii",
            $name, $avatar, $gender, $birth, $verify, $country, $email, $type, $listener, $userID);
        $stmt->execute();
    }
//    Lay thong tin nghe si de hien thi trong trang edit
    function getDetailArtistInfo($userID) {
        $artist_query = <<<Thien
                            SELECT NAME, AVATAR, GENDER, BIRTH, VERIFY, COUNTRY, EMAIL, TYPE, MONTHLY_LISTENER 
                            FROM USER WHERE USER_ID = {$userID};
                        Thien;
        return $this->getData($artist_query);
    }
//    Xoa nghe si
    function deleteArtist($userID) {
        $del_query = "DELETE FROM USER WHERE USER_ID = ?;";

        $stmt = $this->con->prepare($del_query);
        $stmt->bind_param("i", $userID);
        $stmt->execute();
    }

    function getAllAlbum()
    {

    }
}