<?php

class PlayController extends Controller
{

    private string $defaultTemplate = "defaults";
    function play() {
        $this->view($this->defaultTemplate, []);
    }

    function index(): void
    {
        // TODO: Implement index() method.
    }
}