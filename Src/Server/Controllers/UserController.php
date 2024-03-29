<?php

class UserController extends Controller
{
    protected string $defaultView = "User/";
    protected string $defaultTemplate = "User/UserDefault";

    public function Overview() {
        $this->view($this->defaultTemplate , [
            "Title" => "Overview",
            "Banner" => "_Banner",
            "Page" => "Profile"
        ]);
    }

    public function Profile() {
        $this->view($this->defaultTemplate,[
            "Title" => "Profile",
//            "Banner" => "_Banner"
        ]);
    }

    function a() {
        $this->view($this->defaultTemplate, []);
    }

    public function ChangePassword() {
        $this->view($this->defaultTemplate, [
            "Title" => "Change Password"
        ]);
    }




    function index(): void
    {
        header("Location: /User/Overview");
    }
}