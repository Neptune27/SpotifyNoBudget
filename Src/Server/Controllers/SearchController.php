<?php

class SearchController extends Controller
{

    function index(): void
    {
        header("Location: /Search/Search");
    }
    function Search() {
        $this->view("blank", []);
    }
}