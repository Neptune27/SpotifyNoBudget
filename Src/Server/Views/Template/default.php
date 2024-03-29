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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="/Src/Client/css/Premium/premium.css" >
    <script src="/Src/Client/js/Premium/script.js" defer></script>
</head>
<body>
    <?php
    require_once "_header.html";
    if (!isset($data["View"])) {
        $data["View"] = "";
    }
    ?>

    <?php
    if (isset($data["Page"])) {
        require_once __DIR__."/../".$data["View"].$data["Page"].".php";
    }
    ?>


    <?php
        require_once "_footer.html";
    ?>
</body>
