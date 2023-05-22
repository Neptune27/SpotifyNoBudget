<?php

class HomeController extends Controller
{
    public string $homeTemplate = "default";
    public string $signTemplate = "signDefault";
    public string $defaultView = "Home/";

    function Premium()
    {
        print_r($_SESSION["user"]);
        $this->view($this->homeTemplate, []);
    }

    function BuyPremium() {
        $this->view($this->signTemplate, []);
    }

    function index() : void
    {

        header("Location: /Home/Premium");
    }

    function Support() : void {
        $this->view($this->homeTemplate, []);
    }

    function SignIn()
    {
        $this->view($this->signTemplate, []);
    }

    public function GetSignIn() {
        ["password"=>$password, "username"=>$username] = $_GET;
        if (!isset($username)) {
            header('X-PHP-Response-Code: 404', true, 404);
            echo json_encode([
                "status" => 404
            ]);
            return;
        }


        $model = $this->model("TestModel");
        $res = $model->getData("SELECT * FROM USER WHERE PASSWORD='{$password}' AND USERNAME='{$username}'");

        if (!isset($res[0])) {
            header('X-PHP-Response-Code: 403', true, 403);
            echo json_encode([
                "status" => 403
            ]);
            return;
        }

        $isAdmin = false;
        if ($res[0]['TYPE'] == 1)
        {
            $isAdmin = true;
        }
        echo json_encode([
                'success' => true,
                'isAdmin' => $isAdmin
            ]
        );
        $_SESSION["user"] = $res[0];
    }

    function SignUp()
    {
        $this->view($this->signTemplate, []);
    }

    public function GetSignUp() {
        ["password"=>$password, "username"=>$username, "name" => $name, "bDay"=>$bDay, "sex"=>$sex, "email" => $email] = $_GET;
        if (!isset($username)) {
            header('X-PHP-Response-Code: 404', true, 403);
            echo json_encode([
                "status" => 403
            ]);
            return;
        }


        $model = $this->model("UserModel");
        $res = $model->createUser($username, $password, $email, $name, $bDay, $sex);
        if (!$res) {
            header('X-PHP-Response-Code: 403', true, 403);
            echo json_encode([
                    'success' => false,
                ]
            );
            return;
        }

        if (!isset($res[0])) {
            echo json_encode([
                    'success' => true,
                ]
            );
        }
    }


    function Receipt($params) {
        $havePremium = $_SESSION["user"]["HAVE_PREMIUM"];
        $userID = $_SESSION["user"]["USER_ID"];
        if ($havePremium) {
            header("Location /");
            return;
        }

        $receiptModel = $this->model("ReceiptModel");
        $receipt = $receiptModel->getReceipt($userID);
        if (count($receipt) == 0) {
            $moneyAmount = -1;
            if ($_GET["type"] == 0) {
                $moneyAmount = 6000;
            }
            if ($_GET["type"] == 1) {
                $moneyAmount = 59000;
            }
            if ($_GET["type"] == 2) {
                $moneyAmount = 29500;
            }
            $receiptModel->addReceipt($userID, $moneyAmount);
            $receipt = $receiptModel->getReceipt($userID);
        }

        $this->view($this->signTemplate, [
            "receipt" => $receipt[0]
        ]);

    }

    function hello() {
        $this->view($this->homeTemplate, []);
    }

}