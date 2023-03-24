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

    <link rel="stylesheet" href="/Src/Client/css/User/UserOverview.css">
    <script src="/Src/Client/js/Premium/script.js" defer></script>
</head>
<body>
<?php
require_once __DIR__."/../_header.html";

if (!isset($data["View"])) {
    $data["View"] = "";
}
?>


<main role="main" class="gradient text-white">
    <div role="contentinfo" class="justify-content-center mainContent">
        <?php
        require_once "_MobileNavBar.php";

        if (isset($data["Banner"])) {
            require_once __DIR__ . "/../../" . $data["View"] . $data["Banner"] . ".php";
        }

        ?>

        <div class="d-flex">
            <?php
            require_once "_SideNavBar.php";

            if (isset($data["Page"])) {
                require_once __DIR__ . "/../../" . $data["View"] . $data["Page"] . ".php";
            }
            ?>
        </div>
    </div>
</main>

<?php
require_once __DIR__."/../_footer.html";
?>
</body>



