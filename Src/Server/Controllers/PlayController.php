<?php

class PlayController extends Controller
{

    private string $defaultTemplate = "blank";
    private string $emptyTemplate = "Empty";
    function Play(): void
    {
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