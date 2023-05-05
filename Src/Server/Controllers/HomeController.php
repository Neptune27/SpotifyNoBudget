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

    function hello() {
        $this->view($this->homeTemplate, []);
    }

}