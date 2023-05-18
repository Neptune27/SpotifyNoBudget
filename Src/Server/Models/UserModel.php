<?php
class UserModel extends Model
{
    public function getUser($userID) : array {
        $userID = $this->con->real_escape_string($userID);
        $query = "SELECT * FROM USER WHERE USER_ID = {$userID}";
        return $this->getData($query);
    }

    public function getUserByUsername($userName) : array {
        $userName = $this->con->real_escape_string($userName);
        $query = "SELECT * FROM USER WHERE USERNAME = '{$userName}'";
        return $this->getData($query);
    }

    public function createUser($username, $password,  $email, $name, $bDay, $sex) {
        if (count($this->getUserByUsername($username)) > 0) {
            return false;
        }

        $query = <<<WUT
            INSERT INTO USER(NAME, USERNAME, PASSWORD, AVATAR, GENDER, BIRTH, VERIFY, COUNTRY, EMAIL, HAVE_PREMIUM, TYPE, MONTHLY_LISTENER) 
            VALUES (?,?,?,'NA', ?, ?, 0, 'VN', ?, 0, 0, 0)
        WUT;

        $stmt = $this->con->prepare($query);
        $stmt->bind_param("sssiss", $name, $username, $password, $sex, $bDay, $email);
        $stmt->execute();
        $this->con->commit();
        return true;
    }
}
