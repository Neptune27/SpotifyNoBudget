// Sample data

import {timeConverter} from "../AudioPlayer.js";
import {AudioPlayerQueueController} from "../AudioPlayerQueueController.js";

class Artist {
    constructor(id, name, avatar, listeners, verify) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.listeners = listeners;
        this.verify = verify;
    }
}

class Song {
    constructor(id, name, artist, duration, songImg, listeners, albumName) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.songImg = songImg;
        this.listeners = Number(listeners);
        this.albumName = albumName;
    }
}

class Album {
    constructor(id, name, description, albumImg, listeners) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.albumImg = albumImg;
        this.listeners = Number(listeners);
    }
}

// let songs = [
//     new Song("S01", "One more night", "Maroon 5", "4:25", "/Src/Client/img/Artist/sample.jpg"),
//     new Song("S02", "Apologize", "Justin", "4:10", "/Src/Client/img/Artist/sample.jpg"),
//     new Song("S03", "Bocchi", "Maria Ana", "3:25", "/Src/Client/img/Artist/sample.jpg"),
//     new Song("S04", "Hello World", "Chicken", "3:15", "/Src/Client/img/Artist/sample.jpg"),
//     new Song("S05", "We are one", "Deroid", "3:20", "/Src/Client/img/Artist/sample.jpg"),
// ];
//
// let albums = [
//     new Album("Ab01", "This is the end", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
//     new Album("Ab02", "Morning Sunshine", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
//     new Album("Ab03", "An afternoon", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
//     new Album("Ab04", "Beep boo", "2022 album", "/Src/Client/img/Artist/sample.jpg"),
//     new Album("Ab05", "Customer", "2023 album", "/Src/Client/img/Artist/sample.jpg"),
// ];
//
// let artists = [
//     new Artist("A01", "Adele", "/Src/Client/img/Artist/sample.jpg"),
//     new Artist("A02", "Aurora", "/Src/Client/img/Artist/sample.jpg"),
//     new Artist("A03", "Eminem", "/Src/Client/img/Artist/sample.jpg"),
//     new Artist("A04", "Maroon 5", "/Src/Client/img/Artist/sample.jpg"),
//     new Artist("A05", "John Cena", "/Src/Client/img/Artist/sample.jpg"),
// ];

// This is array for search
let songs = [];
let artists = [];
let albums = [];
// ============================================================

// This is array for artist homepage
let songsArtist = [];
let artist;
let albumsArtist = [];
const audioPlayerQueue = AudioPlayerQueueController.getInstance()
// ==============================================================

// Fetch data for search
fetch("/Search/getDataForSearch")
    .then(res => res.json())
    .then(data => {
        songs = data.songs;
        artists = data.artists;
        albums = data.albums;

        songs = songs.map(element => new Song(element.SONG_ID, element.SONG_NAME, element.NAME, element.DURATION, element.SONG_IMG, null, null));
        artists = artists.map(element => new Artist(element.USER_ID, element.NAME, element.AVATAR, null, null));
        albums = albums.map(element => new Album(element.ALBUM_ID, element.ALBUM_NAME, element.DESCRIPTIONS, element.ALBUM_IMG, null));
        loadDataIntoSearchResult(document.getElementById("search-result"), document.getElementById("input-search"));
    });
// =============================================================================================


document.getElementById("input-search").addEventListener("input", function (e) {
    e.stopPropagation();
    if (e.target.value !== '') {
        document.getElementById("clear-search").setAttribute('style', 'display:block');
    } else {
        document.getElementById("clear-search").setAttribute('style', 'display:none');
    }
});

document.getElementById("clear-search").addEventListener("click", function (e) {
    e.stopPropagation();
    e.target.setAttribute('style', 'display:none');
    document.getElementById("input-search").value = "";
});

//==========================================================================================================================
// add click listener for favorite icon
function addClickEventForFav_icons(fav_icons = document.querySelectorAll('.favorite-icon')) {
    fav_icons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation();

            // Traverse all element's children
            for (let i = 0; i < element.children.length; i++) {
                let child = element.children[i];
                if (child.classList.contains('clicked')) {
                    child.classList.remove('clicked');
                    child.classList.add('not-click');
                    // if icon favorite is not clicked show that song id
                    if (child.classList.contains("fa-solid")) {
                        console.log("Remove: " + child.closest(".row").getAttribute("id"));
                    }
                } else if (child.classList.contains('not-click')) {
                    child.classList.remove('not-click');
                    child.classList.add('clicked');
                    // if icon favorite is click show that song id
                    if (child.classList.contains("fa-solid")) {
                        console.log("Add: " + child.closest(".row").getAttribute("id"));
                    }
                }
            }
        });
    });
}

// Add click event for song to get song id
function addClickEventForSong(songRows = document.querySelectorAll('#song-wrapper > .row')) {
    songRows.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log(element.getAttribute('id'));
        });
    });
}

// Add click event for artist row display and redirect it to artist_homepage.php
function addClickEventForArtist(artistRow = document.querySelectorAll('#artist-display > div')) {
    artistRow.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            let artistId = element.getAttribute("id");

            // Fetch API and render
            fetch(`/Artist/getDataArtist/${artistId}`)
                .then(res => res.json())
                .then(data => {
                    let temp = data.artist[0];
                    artist = new Artist(temp.USER_ID, temp.NAME, temp.AVATAR, temp.MONTHLY_LISTENER, temp.VERIFY);
                    albumsArtist = data.albums.map(element => new Album(element.ALBUM_ID, element.ALBUM_NAME,
                                                element.DESCRIPTIONS, element.ALBUM_IMG, element.TOTAL_LISTENER));

                    songsArtist = data.songs.map(element => new Song(element.SONG_ID, element.SONG_NAME, element.ARTIST, element.DURATION,
                                                    element.SONG_IMG, element.TOTAL_VIEW, element.ALBUM_NAME));
                    artist_homepageInit();

                    this.closest('main').setAttribute('data-sidebar','Artist');
                });
        });
    });
}

// Add click event for album display row to show album id
function addClickEventForAlbum(albumRow = document.querySelectorAll('#album-display > div')) {
    albumRow.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log(element.getAttribute('id'));
        });
    });
}

const addArtistListener = () => {
    document.getElementById("artist-wrapper").addEventListener("click", function (e) {
        e.stopPropagation();
        // if artist in top result is existed
        let artistExist = this.querySelector("div");
        if (artistExist) {
            let artistId = artistExist.getAttribute("id");

            // Fetch API and render
            fetch(`/Artist/getDataArtist/${artistId}`)
                .then(res => res.json())
                .then(data => {
                    let temp = data.artist[0];
                    artist = new Artist(temp.USER_ID, temp.NAME, temp.AVATAR, temp.MONTHLY_LISTENER, temp.VERIFY);

                    albumsArtist = data.albums.map(element => new Album(element.ALBUM_ID, element.ALBUM_NAME,
                        element.DESCRIPTIONS, element.ALBUM_IMG, element.LISTENERS));
                    songsArtist = data.songs.map(element => new Song(element.SONG_ID, element.SONG_NAME, element.ARTIST, element.DURATION,
                        element.SONG_IMG, element.TOTAL_VIEW, element.ALBUM_NAME));

                    artist_homepageInit();

                    this.closest('main').setAttribute('data-sidebar','Artist');
                });
        }
    });
}
addArtistListener()

//==========================================================================================================================
/*
 FIXME Dùng CSDL cho vụ này, (VD có 3000 bài thì sao, không thể nào lấy full đc, chỉ lấy 10-20 bài thôi), nên khi
  Tìm kiếm phải lấy CSDL đem về để xử lý chứ.
  Còn vụ cái firstMatchArtist nữa, match dạng include chứ đừng dạng chữ đầu tiên.
*/
function loadDataIntoSearchResult(search_result, input_search) {
    let artist_wrapper = search_result.querySelector('#artist-wrapper');
    let song_wrapper = search_result.querySelector('#song-wrapper');
    let artist_row_display = search_result.querySelector('#artist-display');
    let album_row_display = search_result.querySelector('#album-display');

//    This is for top result
    let firstMatchArtist = artists[0];
    if (!firstMatchArtist) {
        artist_wrapper.innerHTML = '';
    } else {
        artist_wrapper.innerHTML = `<div id="${firstMatchArtist.id}" class="circle mb-4" style="background-image: url('${firstMatchArtist.avatar}');
                                                                                                background-position: center center;"></div>
                            <!--                            ========================== -->
                            <!--                            Artist's name-->
                                    <h1 class="top-result-name mb-3">${firstMatchArtist.name}</h1>
                                    <h1 class="name-light">Artist</h1>
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>`;
    }

//     This is for song result
    song_wrapper.innerHTML = songs
        .map(song => `<div id="${song.id}" class="row align-items-center song-row rounded">
                                <div class="col-10">
                                    <div class="d-flex align-items-center">
                                        <div class="square d-flex align-items-center justify-content-center"
                                            style="background-image: url('${song.songImg}');
                                                    background-position: center center;">
                                            <i class="fa-solid fa-play play-for-song"></i>
                                        </div>
                                        <div style="padding-left: 20px;">
                                            <p class="name-light m-0">${song.name}</p>
                                            <p class="sub-name m-0">${song.artist}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="d-flex align-items-center flex-row-reverse justify-content-between">
                                        <p class="sub-name m-0">${timeConverter(song.duration)}</p>
                                        <div class="favorite-icon">
                                            <i class="fa-regular fa-heart clicked"></i>
                                            <i class="fa-solid fa-heart not-click"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>`)
        .join('');
    // Add click event for favorite icon and for song rows
    addClickEventForFav_icons(search_result.querySelectorAll('.favorite-icon'));
    addClickEventForSong(Array.from(song_wrapper.children));

//     This is for artist result
    artist_row_display.innerHTML = artists
        .map(element => `<div id="${element.id}" class="card rounded">
                                <div class="circle"
                                    style="background-image: url('${element.avatar}');
                                           background-position: center center;">
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>
                                </div>
                                <h1 class="name-light pt-2">${element.name}</h1>
                                <h1 class="sub-name">Artist</h1>
                            </div>`)
        .join('');
    // add event click for artist display row
    addClickEventForArtist(Array.from(artist_row_display.children));

//     This is for album result
    album_row_display.innerHTML = albums
        .map(element => `<div id="${element.id}" class="card rounded">
                                <div class="square rounded"
                                    style="background-image: url('${element.albumImg}');
                                           background-position: center center;">
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>
                                </div>
                                <h1 class="name-light pt-2">${element.name}</h1>
                                <h1 class="sub-name">${element.description}</h1>
                            </div>`)
        .join('');
    // add event click for album display row
    addClickEventForAlbum(Array.from(album_row_display.children));
}

// Add input listener
document.getElementById("input-search").addEventListener("input", e => {
    e.stopPropagation();
    let search_result = e.target.closest("main").querySelector('#search-result');

    // Fetch data for search
    fetch(`/Search/getDataForSearch/${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            songs = data.songs;
            artists = data.artists;
            albums = data.albums;

            songs = songs.map(element => new Song(element.SONG_ID, element.SONG_NAME, element.NAME, element.DURATION, element.SONG_IMG, null, null));
            artists = artists.map(element => new Artist(element.USER_ID, element.NAME, element.AVATAR, null, null));
            albums = albums.map(element => new Album(element.ALBUM_ID, element.ALBUM_NAME, element.DESCRIPTIONS, element.ALBUM_IMG, null));
            loadDataIntoSearchResult(search_result, e.target);
        });
// =============================================================================================
});

// This is section for artist homepage====================================================================
function artist_homepageInit() {
    let artistPane = document.querySelector('.artistPane');
    // Verify for artist
    if (artist.verify === "0") {
        artistPane.querySelector('#verified-tick').setAttribute('style', 'opacity : 0');
    }
    else {
        artistPane.querySelector('#verified-tick').setAttribute('style', '');
    }

    // Show artist background image
    artistPane.querySelector("#artist-title")
        .setAttribute('style', `background-image: url(${artist.avatar});` +
            'background-position: center top;' +
            'background-repeat: no-repeat;');

    // Show artist's name and listeners
    artistPane.querySelector("#artist-title > h1").innerText = artist.name;
    artistPane.querySelector("#artist-title > span").innerText = artist.listeners + " listeners";

    // Render popular playlist only 7 popular song
    songsArtist.sort((a, b) => b.listeners - a.listeners).slice(0, 8);
    let result = '', stt;
    console.log(songsArtist)
    for (let [index, songsArtistElement] of songsArtist.entries()) {
        stt = index + 1;
        result += `<tr id='${songsArtistElement.id}'>
                        <td class="No">
                            <span>${stt}</span>
                            <i class="fa-solid fa-play play-for-song"></i>
                        </td>
                        <td class="song-name-and-img">
                            <div class="d-flex align-items-center">
                                <div class="song-img">
                                    <img src="${songsArtistElement.songImg}" alt="Song img">
                                </div>
                                <span class="name-song">${songsArtistElement.name}</span>
                            </div>
                        </td>
                        <td class="listeners">${songsArtistElement.listeners} listeners</td>
                        <td class="song-length">
                            <div class="song-length-wrapper">
                                <div class="favorite-icon">
                                    <i class="fa-regular fa-heart clicked"></i>
                                    <i class="fa-solid fa-heart not-click"></i>
                                </div>
                                <span>${timeConverter(songsArtistElement.duration)}</span>
                            </div>
                        </td>
                    </tr>`
    }
    artistPane.querySelector('#popular-playlist tbody').innerHTML = result;

    // This is a section for popular releases
    let popularReleases = [...songsArtist, ...albumsArtist];
    popularReleases.sort((a, b) => b.listeners - a.listeners).slice(0, 8);
    artistPane.querySelector('#popular-releases > .song-display')
        .innerHTML = popularReleases.map(element => {
        if (element instanceof Song) {
            return `<div class='song-wrapper' id='${element.id}'>
                            <div class='song-img'>
                                <img src='${element.songImg}' alt=''>
                            </div>
                            <div class='song-detail'>
                                <p class='mb-0 name-song'>${element.name}</p>
                                <p class='mb-0 album-name'>${element.albumName}</p>
                            </div>
                            <div class='play-icon'>
                                <i class='fa-solid fa-play'></i>
                            </div>
                        </div>`;
        }
        else {
            return `<div class='song-wrapper' id='${element.id}'>
                            <div class='song-img'>
                                <img src='${element.albumImg}' alt=''>
                            </div>
                            <div class='song-detail'>
                                <p class='mb-0 name-song'>${element.name}</p>
                                <p class='mb-0 album-name'>${element.description}</p>
                            </div>
                            <div class='play-icon'>
                                <i class='fa-solid fa-play'></i>
                            </div>
                    </div>`;
        }
    }).join('');

    // This is a section for album
    artistPane.querySelector("#album > .song-display")
        .innerHTML = albumsArtist.sort((a, b) => b.listeners - a.listeners).map(element => {
        return `<div class='song-wrapper' id='${element.id}'>
                    <div class='song-img'>
                        <img src='${element.albumImg}' alt=''>
                    </div>
                    <div class='song-detail'>
                        <p class='mb-0 name-song'>${element.name}</p>
                        <p class='mb-0 album-name'>${element.description}</p>
                    </div>
                    <div class='play-icon'>
                        <i class='fa-solid fa-play'></i>
                    </div>
                </div>`;
    }).join('');

    // add click listener for favorite icon
    let fav_icons = document.querySelectorAll('.artistPane .favorite-icon');

    fav_icons.forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation();

            // Traverse all element's children
            for (let i = 0; i < element.children.length; i++) {
                let child = element.children[i];
                if (child.classList.contains('clicked')) {
                    child.classList.remove('clicked');
                    child.classList.add('not-click');
                    // if icon favorite is not clicked show that song id
                    if (child.classList.contains("fa-solid")) {
                        console.log("Remove: " + child.closest("tr").getAttribute("id"));
                    }
                }
                else if (child.classList.contains('not-click')) {
                    child.classList.remove('not-click');
                    child.classList.add('clicked');
                    // if icon favorite is click show that song id
                    if (child.classList.contains("fa-solid")) {
                        console.log("Add: " + child.closest("tr").getAttribute("id"));
                    }
                }
            }
        });
    });

// When click a song it will return a song id
    let songRows = document.querySelectorAll("#popular-playlist tr");
    songRows.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();

            console.log(element.getAttribute('id'));
            audioPlayerQueue.playFromPopularPlaylist(artist.id);
        });
    });

    let popularRows = document.querySelectorAll("#popular-releases .song-wrapper");
    popularRows.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log(element.getAttribute('id'));
        });
    });

    let albumRows = document.querySelectorAll("#album .song-wrapper");
    albumRows.forEach(element => {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log(element.getAttribute('id'));
        });
    });
}
//End section for artist homepage=====================================================================

export {addClickEventForFav_icons, loadDataIntoSearchResult, addClickEventForAlbum, addClickEventForArtist, addClickEventForSong}