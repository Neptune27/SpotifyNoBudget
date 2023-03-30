<?php


session_start();
require_once "Src/Server/Bridge.php";
print_r($_GET);
$myApp = new App();