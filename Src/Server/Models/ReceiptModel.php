<?php

class ReceiptModel extends Model
{
    public function getReceipt($userID) {
        $userID = $this->con->real_escape_string($userID);
        $query = "SELECT * FROM RECEIPT WHERE ID_USER={$userID} LIMIT 1";
        return $this->getData($query);
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