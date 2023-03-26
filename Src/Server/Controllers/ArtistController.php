<?php

class ArtistController extends Controller
{
    function index() : void
    {

        header("Location: /Artist/artist_homepage");
    }

    function artist_homepage() {
        $this->view("blank", []);
    }

}