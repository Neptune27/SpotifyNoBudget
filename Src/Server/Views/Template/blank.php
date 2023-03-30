<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <?php
    if (!isset($data["Title"])) {
        $data["Title"] = "";
    }
    else {
        $data["Title"] .= " - ";
    }
    echo '<title>'.$data["Title"].'Spotify</title>';
    ?>
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
</head>
<body>

<?php
if (isset($data["Page"])) {
    require_once __DIR__."/../".$data["View"].$data["Page"].".php";
}
?>

</body>
