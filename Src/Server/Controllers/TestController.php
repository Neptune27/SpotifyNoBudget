<?php

class TestController extends Controller
{

    function Test()
    {
        $this->view("default", []);
    }

    function LyricTest()
    {
        $this->view("blank", []);
    }

    function Playlist() {
        $this->view("blank", []);
    }

    function index(): void
    {
        header("Location: /Test/LyricTest");
    }

    function Queue(): void
    {
        $this->view("blank", []);
    }

    function Fetch() {
        $model = $this->model("TestModel");
        $res = $model->getData("SELECT * FROM TEST WHERE ID > 0");
        print_r($res);
        $this->view("blank", []);

    }

    function Woa($params) {
        echo "Params: ";
        print_r($params);
        echo "<br>";
        echo "GET: ";
        print_r($_GET);
//
//        $model = $this->model("TestModel");
//        $res = $model->getData("SELECT * FROM TEST WHERE ID > 0");
////        header('X-PHP-Response-Code: 404', true, 404);
//        echo json_encode($res);
    }

}