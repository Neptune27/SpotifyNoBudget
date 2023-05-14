<?php
class UserModel extends Model
{
    public function getUser($userID) : array {
        $userID = $this->con->real_escape_string($userID);
        $query = "SELECT * FROM USER WHERE USER_ID = {$userID}";
        return $this->getData($query);
    }
}
