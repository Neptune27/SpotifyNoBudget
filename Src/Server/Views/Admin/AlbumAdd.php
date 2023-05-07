<link rel="stylesheet" href="/Src/Client/css/Login/Login.css">
<script src="/Src/Client/js/ArtistEdit.js" defer></script>

<div class="loginMain d-flex flex-column align-items-center">
    <div class="loginContent">
        <section class="m-auto bg-white rounded-4 text-dark">
            <h1 class="text-center p-4 fw-bold">Thêm Album</h1>
            <div id="signInForm" class="p-4 needs-validation">
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
                           placeholder="YYYY-MM-DD" id="AlbumDate">
                </div>

                <div class="mt-4 has-validation">
                    <label for="AlbumTime" class="h5">Thời gian Album</label>
                    <input type="text" name="AlbumTime" class="form-control flex-fill mb-0"
                           placeholder="00:00:00" id="AlbumTime">
                </div>


                <div class="mt-4">
                    <label for="AlbumListener" class="h5">Lượt nghe hằng tháng</label>
                    <input type="number" name="AlbumListener" class="form-control flex-fill mb-0"
                           placeholder="Lượt nghe" id="AlbumListener">
                </div>

                <!-- thêm người lập  -->
                <div></div>


                <!-- thêm bài hát vào album -->
                <div></div>


                <div class="d-flex justify-content-center gap-1">
                    <button type="submit" class="btn btn-primary text-break mt-5" style="width: 100%" id="addAlbum">Xác nhận</button>
                    <button class="btn btn-secondary text-break mt-5" style="width: 100%">Thoát</button>
                </div>
            </div>
        </section>
    </div>
</div>