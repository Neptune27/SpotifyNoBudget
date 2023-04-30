<?php
    if (!isset($data)) {
        $data=[];
    }
?>


<div class="resGrid" style="padding: 1rem">
    <?php
        if (isset($data["artist"])) {
            foreach ($data["artist"] as $index => $datum) {
                ["USER_ID" => $userID, "NAME"=>$name, "AVATAR"=>$avatar] = $datum;
                echo <<<WUT
                    <a href="/Admin/AddSongPage/{$userID}" class="card shadow p-3 bg-white rounded cardItem">
                        <div>
                            <img class="card-img-top" src="{$avatar} " alt="Cover" style=" background-position: center; max-height: 100px; object-fit: cover;">
                        </div>
                        <div class="card-body d-flex flex-column align-items-center justify-content-center">
                            <h5 class="card-title">{$name}</h5>
                            <div>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-secondary">Xóa</button>
                            </div>
                        </div>
                    </a>
                WUT;
            }
        }
    ?>


</div>
