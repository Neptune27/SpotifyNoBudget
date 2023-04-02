<?php

class SidebarController extends Controller
{
    function index(): void
    {
        header("Location: /Sidebar/Sidebar");
    }
    function Sidebar() {
        $this->view('blank', []);
    }
}