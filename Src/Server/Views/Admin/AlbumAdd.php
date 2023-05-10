<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<script src="/Src/Client/js/Album.js" defer></script>

<div class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent">
        <section class="m-auto bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Thêm Album</h1>
            <div id="signInForm" class="p-4 needs-validation">
            <h2 id="AlbumID" style="display: none;"><?php echo $data["id"] ?></h2>
                <div class="mt-4 has-validation">
                    <label for="AlbumName" class="h5">Tên Album</label>
                    <input type="text" name="AlbumtName" class="form-control flex-fill mb-0"
                           placeholder="Tên Album" id="AlbumName">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumSong" class="h5">Số lượng bài hát</label>
                    <input type="number" name="AlbumSong" class="form-control flex-fill mb-0"
                           placeholder="Số lượng bài hát" id="AlbumSong">
                </div>



                <div class="mt-4">
                    <label for="AlbumAvatar" class="h5">Hình Album</label>
                    <input type="file" name="AlbumAvatar" class="form-control flex-fill mb-0" id="AlbumAvatar">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumDate" class="h5">Ngày tạo</label>
                    <input type="text" name="AlbumDate" class="form-control flex-fill mb-0"
                           placeholder="định dạng YYYY-MM-DD" id="AlbumDate">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumTime" class="h5">Thời gian Album</label>
                    <input type="text" name="AlbumTime" class="form-control flex-fill mb-0"
                           placeholder="định dạng 00:00:00" id="AlbumTime">
                </div>


                <div class="mt-4">
                    <label for="AlbumListener" class="h5">Lượt nghe hằng tháng</label>
                    <input type="number" name="AlbumListener" class="form-control flex-fill mb-0"
                           placeholder="Lượt nghe" id="AlbumListener">
                </div>

                <div class="mt-4">
                    <label for="AlbumDescriptions" class="h5">Mô tả</label>
                    <input type="text" name="AlbumDescriptions" class="form-control flex-fill mb-0"
                           placeholder="mô tả" id="AlbumDescriptions">
                </div>

                <!-- thêm người lập  -->
                <div class="mt-4 addAluser" id="addAluser">

                <button id="AddUserBtn" class="btn btn-outline-primary mt-4" style="width: 100%">Thêm nhạc sĩ</button>
                </div>


                <!-- thêm bài hát vào album -->
                <div class="mt-4 addAlSong" id="addAlSong">

               
                <button id="AddSongBtn" class="btn btn-outline-primary mt-4" style="width: 100%">Thêm bài hát</button>
                </div>


                <div class="d-flex justify-content-center gap-1">
                     <a href="/admin/AddSongPage/<?php echo $data["old"] ?>" class="btn btn-primary text-break mt-5" style="width: 100%" onclick="addAlbum()">Xác nhận</a>
                    <a href="/admin/AddSongPage/<?php echo $data["old"] ?>" class="btn btn-secondary text-break mt-5" style="width: 100%">Thoát</a>
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
                echo "request.open('POST', '/Admin/AlbumAvatarUpload/{$data["id"]}?type=image');";
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