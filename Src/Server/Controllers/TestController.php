<?php

class TestController extends Controller {

    function Test() {
        $this->view("default", []);
    }

    function LyricTest() {
        $this->view("blank", []);
    }
    function index(): void
    {
        header("Location: /Test/LyricTest");
    }
}