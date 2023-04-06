<?php
if (isset($data["Page"])) {
    require_once __DIR__."/../".$data["View"].$data["Page"].".php";
}
