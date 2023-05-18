<?php 

if (!isset($data["Album"][0])) {
    $data["Album"][0]["ALBUM_NAME"]="";
    $data["Album"][0]["NUMBER_OF_SONG"]="";
    $data["Album"][0]["DATE"]="";
    $data["Album"][0]["TIME"]="";
    $data["Album"][0]["TOTAL_LISTENER"]="";
    $data["Album"][0]["DESCRIPTIONS"]="";
    $data["AlbumID"] = "Album không tồn tại";
}

?>

<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<script src="/Src/Client/js/Album.js" defer></script>
<!-- <script src="/Src/Client/js/Album.js" ></script> -->

<div class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent">
        <section class="m-auto bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Sửa Album</h1>
            <h2 class="text-center p-2 fw-bold" id="AlbumID">ID: <?php echo $data["AlbumID"] ?></h2>
            <div id="signInForm" class="p-4 needs-validation">
            <div id="signInForm" class="p-4 needs-validation">
                <div class="mt-4 has-validation">
                    <label for="AlbumName" class="h5">Tên Album</label>
                    <input type="text" name="AlbumtName" class="form-control flex-fill mb-0"
                           placeholder="Tên Album" id="AlbumName" value="<?php echo $data["Album"][0]["ALBUM_NAME"]?>">
                </div>
                
                <div class="mt-4 has-validation">
                    <label for="AlbumSong" class="h5">Số lượng bài hát </label>
                    <input type="number" name="AlbumSong" class="form-control flex-fill mb-0"
                           placeholder="Số lượng bài hát" id="AlbumSong" value="<?php echo $data["Album"][0]["NUMBER_OF_SONG"]?>">
                </div>



                <div class="mt-4">
                    <label for="AlbumAvatar" class="h5">Hình Album</label>
                    <input type="file" name="AlbumAvatar" class="form-control flex-fill mb-0" id="AlbumAvatar">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumDate" class="h5">Ngày tạo</label>
                    <input type="text" name="AlbumDate" class="form-control flex-fill mb-0"
                           placeholder="định dạng YYYY-MM-DD" id="AlbumDate" value="<?php echo $data["Album"][0]["DATE"]?>">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumTime" class="h5">Thời gian Album</label>
                    <input type="text" name="AlbumTime" class="form-control flex-fill mb-0"
                           placeholder="định dạng 00:00:00" id="AlbumTime" value="<?php echo $data["Album"][0]["TIME"]?>">
                </div>


                <div class="mt-4">
                    <label for="AlbumListener" class="h5">Lượt nghe hằng tháng 
                        </label>
                    <input type="number" name="AlbumListener" class="form-control flex-fill mb-0"
                           placeholder="Lượt nghe" id="AlbumListener" value="<?php echo $data["Album"][0]["TOTAL_LISTENER"];?> ">
                </div>

                <div class="mt-4">
                    <label for="AlbumDescriptions" class="h5">Mô tả </label>
                    <input type="text" name="AlbumDescriptions" class="form-control flex-fill mb-0"
                           placeholder="mô tả" id="AlbumDescriptions" value="<?php echo  $data["Album"][0]["DESCRIPTIONS"]?>">
                </div>

                <!-- thêm người lập  -->
                
        <!-- <button class="btn btn-outline-danger">Xóa</button> -->
                
                <div class="mt-4 addAluser" id="addAluser">
                <label for="" class="h5">Nhạc sĩ </label>
                    <script>
                        function adduserAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="U" class="AlbumCreated form-control" value="`+qq+`">
        <button class="btn btn-outline-danger">Xóa</button>

    `;
   
    

    let user = document.getElementById("addAluser");
    user.appendChild(div);    
        let delBtn = user.lastChild.querySelector("button");
        console.log(delBtn);
        delBtn.addEventListener("click", function() {
            this.closest("div").remove();
        })

}
                    </script>
                    <?php
                        for ($x = 0; $x < count($data["User"]); $x++) {
                             echo '<script>adduserAl("'.$data["User"][$x]["USER_ID"].'")</script>';
                        }
                        ?>

                <button id="AddUserBtn" class="btn btn-outline-primary mt-4" style="width: 100%">Thêm nhạc sĩ</button>
                </div>

                
                <!-- thêm bài hát vào album -->
                <div class="mt-4 addAlSong" id="addAlSong">
                <label for="" class="h5">Bài hát </label>
                    <script>
                        function addSongAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="S" class="AlbumSong form-control" value=`+qq+`>
        <button class="btn btn-outline-danger">Xóa</button>
    `;


    let user1 = document.getElementById("addAlSong");
    user1.appendChild(div);

    let delBtn = user1.lastChild.querySelector("button");
    console.log(delBtn);
    delBtn.addEventListener("click", function() {
        this.closest("div").remove();
    })

}
                    </script>
                <?php
                        for ($x = 0; $x < count($data["Song"]); $x++) {
                             echo '<script>addSongAl("'.$data["Song"][$x]["song_id"].'")</script>';
                        }
                ?>

               
                <button id="AddSongBtn" class="btn btn-outline-primary mt-4" style="width: 100%">Thêm bài hát</button>
                </div>


                <div class="d-flex justify-content-center gap-1">
                    <button class="btn btn-primary text-break mt-5" style="width: 100%" onclick="editAlbum()">Xác nhận</button>
                    <button  class="btn btn-secondary text-break mt-5" style="width: 100%" onclick="Thoat()">Thoát</button>
                </div>
            </div>
        </section>
    </div>
</div>

<?php 
                
                // echo var_dump($data["UAL"]);
                $dataU ="";
                for($x=0;$x<count($data["UAL"]);$x++){
                    $dataU = $dataU."<option value=\"{$data["UAL"][$x]["USER_ID"]}\">{$data["UAL"][$x]["NAME"]}</option>";
                }
                $dataU = '<datalist name="U" id="U">' . $dataU . '</datalist>';
                echo $dataU;
                

            ?>
            <?php 
                
                // echo var_dump($data["SAL"]);
                $dataS ="";
                for($x=0;$x<count($data["SAL"]);$x++){
                    $dataS = $dataS."<option value=\"{$data["SAL"][$x]["song_id"]}\">{$data["SAL"][$x]["SONG_NAME"]}</option>";
                }
                $dataS = '<datalist name="S" id="S">' . $dataS . '</datalist>';
                echo $dataS;
                

            ?>
            <script>
var page = <?php echo $data["old"]; ?> 
</script>

<script>
    const inputElement = document.querySelector('input#AlbumAvatar');

    window.fileName = "";

    FilePond.registerPlugin(FilePondPluginFileValidateType);

    const pond = FilePond.create(inputElement, {
        storeAsFile: true,
        // set allowed file types with mime types
        acceptedFileTypes: [
            "image/*"
        ],
        allowBrowse: true,
        server: {
            process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
                // fieldName is the name of the input field
                // file is the actual file object to send
                const formData = new FormData();

                formData.append(fieldName, file, file.name);
                window.fileName = file.name

                const request = new XMLHttpRequest();
                <?php
                echo "request.open('POST', '/Admin/AlbumAvatarUpload/{$data['AlbumID']}?type=image');";
                ?>

                // Should call the progress method to update the progress to 100% before calling load
                // Setting computable to false switches the loading indicator to infinite mode
                request.upload.onprogress = (e) => {
                    progress(e.lengthComputable, e.loaded, e.total);
                };

                // Should call the load method when done and pass the returned server file id
                // this server file id is then used later on when reverting or restoring a file
                // so your server knows which file to return without exposing that info to the client
                request.onload = function () {
                    if (request.status >= 200 && request.status < 300) {
                        // the load method accepts either a string (id) or an object
                        load(request.responseText);
                    } else {
                        // Can call the error method if something is wrong, should exit after
                        error('oh no');
                    }
                };

                request.send(formData);

                // Should expose an abort method so the request can be cancelled
                return {
                    abort: () => {
                        // This function is entered if the user has tapped the cancel button
                        request.abort();

                        // Let FilePond know the request has been cancelled
                        abort();
                    },
                };
            },
            revert: async (source, load, error) => {
                const res = await fetch(`/Admin/AlbumAvatarUpload/Test?type=image&AlbumName=${fileName}`, {
                    method: "DELETE"
                })

                load()
            }
        }

    });

</script>