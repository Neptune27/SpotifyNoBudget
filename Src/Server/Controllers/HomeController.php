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

    function a()
    {
        $this->view($this->homeTemplate, []);
    }

    function index() : void
    {
        header("Location: /Home/Premium");
    }

    function SignIn()
    {
        $this->view($this->signTemplate, []);
    }

    function SignUp()
    {
        $this->view($this->signTemplate, []);
    }


}