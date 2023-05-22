<?php

class PlayController extends Controller
{

    private string $defaultTemplate = "blank";
    private string $emptyTemplate = "Empty";
    function Play(): void
    {
        if (!isset($_SESSION["user"])) {
            header("Location: /Home/SignIn");
            return;
        }

//
//        if ($_SESSION["user"]["HAVE_PREMIUM"] == 0) {
//            header("Location: /Home/BuyPremium?type=2");
//            return;
//        }

        $this->view($this->defaultTemplate, []);
    }

    function Search(): void
    {
        $this->view($this->emptyTemplate, []);
    }



    function index(): void
    {
        header("Location: /Play/Play");
    }
}