import {setupAlbumConnection} from "./Queue.js";

function addClickEventForAddToPlaylist() {
    document.querySelectorAll("li[data-playlist]").forEach(element => {
        element.onclick = function (e) {
            e.stopPropagation();
            let main = element.closest("main");
            // lay ra song id
            main.querySelector("#modalAddPlaylist .songId").innerText = element.getAttribute("data-playlist");
            // an option
            let showOption = main.querySelector('.showOption');
            if (showOption) {
                showOption.classList.remove('showOption');
            }
            // hien modal add song
            main.querySelector("#modalAddPlaylist").showModal();

            //     Lay playlist hien thi len cho nguoi dung
            let userID = main.querySelector("#modalAddPlaylist .userId").innerText;
            fetch(`/Album/GetPlaylist/${userID}`)
                .then(res => res.json())
                .then(data => {
                    //     Tao combo box cho playlist
                    let playlistCb = main.querySelector("#selectPlaylist");
                    playlistCb.innerHTML = data
                        .map(element => `<option value="${element.ALBUM_ID}">${element.ALBUM_NAME}</option>`)
                        .join('');
                })
                .catch(err => console.log(err));
        };
    });
}

// them su kien cho nut them vao playlist
document.getElementById("addToPlaylist").onclick = function (e) {
    e.stopPropagation();
    let modal = this.parentNode;
    let albumId = modal.querySelector("#selectPlaylist").value;
    let songId = modal.querySelector(".songId").innerText;

    fetch(`/Album/AddSongToPlaylist/${songId}/${albumId}`)
        .then(() => {
            alert("Thêm vào playlist thành công");
            modal.close();
        })
        .catch(err => console.log(err));
};

// Them su kien cho nut tao playlist
document.getElementById("createPlaylist").onclick = function (e) {
    e.stopPropagation();
    let albumName = this.parentNode.querySelector("#playlistName").value.trim();
    let userId = this.parentNode.querySelector(".userId").innerText;
    let modal = this.parentNode;

    if (albumName === '') {
        alert("Tên album không được bỏ trống.");
        return;
    }

//     Tao moi playlist

    let data = {
        albumName: albumName,
        userId: userId
    };

    fetch(`/Album/CreatePlaylist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(() => {
            alert("Tạo playlist thành công");

            //     Lay playlist hien thi len cho nguoi dung
            fetch(`/Album/GetPlaylist/${userId}`)
                .then(res => res.json())
                .then(data => {
                    //     Tao combo box cho playlist
                    let playlistCb = modal.querySelector("#selectPlaylist");
                    playlistCb.innerHTML = data
                        .map(element => `<option value="${element.ALBUM_ID}">${element.ALBUM_NAME}</option>`)
                        .join('');
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

// Them su kien khi click library
document.getElementById("Library").addEventListener('click', async function (e) {
    let userId = this.closest("main").querySelector("#modalAddPlaylist .userId").innerText;
    let libraryPane = this.closest("main").querySelector(".libraryPane .song-wrapper");

    const res = await fetch(`/Album/GetAlbumDetail/${userId}`)
    const data = await res.json()
    // Hien danh sach playlist
    libraryPane.innerHTML =
        data.map(element =>
        `<div class="row align-items-center song-row rounded" data-album="${element.ALBUM_ID}">
            <div class="col-10">
                <div class="d-flex align-items-center">
                    <div class="square d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-play play-for-song"></i>
                    </div>
                    <div style="padding-left: 20px;">
                        <p class="name-light m-0 playlistName">${element.ALBUM_NAME}</p>
                        <p class="sub-name m-0 userName">${element.USERNAME}</p>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="d-flex align-items-center flex-row-reverse justify-content-between">
                    <p class="sub-name m-0 create-date">${element.DATE}</p>
                </div>
            </div>
        </div>`).join('');

    setupAlbumConnection(libraryPane);

});

// Khi click ra ngoai thi dong modal
document.getElementById("modalAddPlaylist").onclick = function (e) {
    e.stopPropagation();
    let dialogDimensions = this.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
        this.close();
    }
};

export {addClickEventForAddToPlaylist};