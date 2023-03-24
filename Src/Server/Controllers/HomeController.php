<?php

class HomeController extends Controller
{
    public string $homeTemplate = "default";
    public string $signTemplate = "signDefault";
    public string $defaultView = "Home/";

    function Premium()
    {
        $this->view($this->homeTemplate, []);
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
        $this->view($this->homeTemplate, []);
    }

    function SignUp()
    {
        $this->view($this->signTemplate, []);
    }

    function hello() {
        $this->view($this->homeTemplate, []);
    }

}