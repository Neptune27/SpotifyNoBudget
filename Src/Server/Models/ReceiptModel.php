<?php

class ReceiptModel extends Model
{
    public function getReceipt($userID) {
        $userID = $this->con->real_escape_string($userID);
        $query = "SELECT * FROM RECEIPT WHERE ID_USER={$userID} AND IS_VERIFY!=1 LIMIT 1";
        return $this->getData($query);
    }

    public function getAllReceipt() {
        $query = "SELECT RECEIPT.ID_RECEIPT, ID_USER, USERNAME, TOTAL_PRICE, IS_VERIFY FROM RECEIPT LEFT JOIN USER U on U.USER_ID = RECEIPT.ID_USER ORDER BY ID_RECEIPT DESC ";
        return $this->getData($query);
    }

    public function accept($id) {
        $query1 = "UPDATE RECEIPT SET IS_VERIFY = 1 WHERE ID_RECEIPT={$id}";

        $this->update($query1);

        $query2 = "SELECT USER_ID FROM RECEIPT LEFT JOIN USER U on U.USER_ID = RECEIPT.ID_USER WHERE ID_RECEIPT={$id} LIMIT 1";
        ["USER_ID" => $user] = $this->getData($query2)[0];
        $query3 = "UPDATE USER SET HAVE_PREMIUM = 1 WHERE USER_ID={$user}";
        $this->update($query3);

    }

    public function delete($id) {
        $query1 = "UPDATE RECEIPT SET IS_VERIFY = 2 WHERE ID_RECEIPT={$id}";

        $this->update($query1);
    }

    public function addReceipt($userID, $totalPrice) {
        $userID = $this->con->real_escape_string($userID);
        $date = date("Y-m-d H:i:s");

        $query = <<<HAH
            INSERT INTO RECEIPT(ID_USER, DATE_BUY, TOTAL_PRICE, PAYMENT, PRODUCT, IS_VERIFY) 
            VALUES ({$userID}, '{$date}', {$totalPrice}, 'Transfer', 'Premium', 0)
        HAH;
        $this->update($query);
    }
}