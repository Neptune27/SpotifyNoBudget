<?php
    if (!isset($data)) {
        $data=[];
    }
//    print_r($data["Albums"]);
?>

<div class="resGrid" style="padding: 1rem">
    <?php
    if (isset($data["Albums"])) {
        $uri = $_GET["url"];
        foreach ($data["Albums"] as $index => $datum) {
            ["ALBUM_ID" => $ID, "ALBUM_NAME"=>$name, "ALBUM_IMG"=>$image] = $datum;
            echo <<<WUT
                    <div  class="card shadow p-3 bg-white rounded cardItem" style="text-decoration: none">
                        <div>
                        <a href="/{$uri}/{$ID}">
                            <img class="card-img-top" src="{$image}" alt="Cover" style=" background-position: center; max-height: 100px; object-fit: cover;">
                        </div>
                        <div class="card-body d-flex flex-column align-items-center justify-content-center">
                            <h5 class="card-title">{$name}</h5></a>
                            <div>
                                <a href="http://localhost/admin/EditAlbum/{$ID} "> <button class="btn btn-primary">Sửa</button></a>
                                <a href="http://localhost/admin/DeleteAlbum/{$ID}/{$uri}"> <button class="btn btn-secondary">Xóa</button></a>
                            </div>    
                        </div>
                    </div>
                WUT;

        }
    }
    ?>


</div>

<div class="d-flex flex-row-reverse p-3">
    <nav>
        <?php
        if (!isset($data["page"])) {
            $data["page"] = 1;
        }
        if (!isset($data["totalPage"])) {
            $data["totalPage"] = 1;
        }
        $previousPage = $data["page"]-1;
        $nextPage = $data["page"]+1;

        $isPrev = "";
        if ($data["page"] == 1) {
            $isPrev = "disabled";
        }

        $isNext = "";
        if ($data["totalPage"] == $data["page"]) {
            $isNext = "disabled";
        }
        echo <<<HUH
            <ul class="pagination">
                <li class="page-item {$isPrev}">
                    <a class="page-link" href="/{$_GET["url"]}?p={$previousPage}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link active">{$data["page"]}</a></li>
                <li class="page-item {$isNext}">
                    <a class="page-link" href="/{$_GET["url"]}?p={$nextPage}" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        HUH;
        ?>
    </nav>
</div>
