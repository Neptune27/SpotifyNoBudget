// Sample data

    class Artist {
        constructor(id, name, avatar) {
            this.id = id;
            this.name = name;
            this.avatar = avatar;
        }
    }

    class Song {
        constructor(id, name, artist, duration, songImg) {
            this.id = id;
            this.name = name;
            this.artist = artist;
            this.duration = duration;
            this.songImg = songImg;
        }
    }

    class Album {
        constructor(id, name, description, albumImg) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.albumImg = albumImg;
        }
    }

    let songs = [
        new Song("S01", "One more night", "Maroon 5", "4:25", "/Src/Client/img/Artist/sample.jpg"),
        new Song("S02", "Apologize", "Justin", "4:10", "/Src/Client/img/Artist/sample.jpg"),
        new Song("S03", "Bocchi", "Maria Ana", "3:25", "/Src/Client/img/Artist/sample.jpg"),
        new Song("S04", "Hello World", "Chicken", "3:15", "/Src/Client/img/Artist/sample.jpg"),
        new Song("S05", "We are one", "Deroid", "3:20", "/Src/Client/img/Artist/sample.jpg"),
    ];

    let albums = [
        new Album("Ab01", "This is the end", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Ab02", "Morning Sunshine", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Ab03", "An afternoon", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Ab04", "Beep boo", "2022 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Ab05", "Customer", "2023 album", "/Src/Client/img/Artist/sample.jpg"),
    ];

    let artists = [
        new Artist("A01", "Adele", "/Src/Client/img/Artist/sample.jpg"),
        new Artist("A02", "Aurora", "/Src/Client/img/Artist/sample.jpg"),
        new Artist("A03", "Eminem", "/Src/Client/img/Artist/sample.jpg"),
        new Artist("A04", "Maroon 5", "/Src/Client/img/Artist/sample.jpg"),
        new Artist("A05", "John Cena", "/Src/Client/img/Artist/sample.jpg"),
    ];
// =============================================================================================
document.getElementById("input-search").addEventListener("input", function (e) {
   e.stopPropagation();
   if (e.target.value !== '') {
       document.getElementById("clear-search").setAttribute('style', 'display:block');
   }
   else {
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
                }
                else if (child.classList.contains('not-click')) {
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
           let data = `artistId=${element.getAttribute("id")}`;
           window.location.href = "../Artist/artist_homepage?" + data;
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
document.getElementById("artist-wrapper").addEventListener("click", function (e) {
    e.stopPropagation();
    // if artist in top result is existed
    let artistExist = this.querySelector("div");
    if (artistExist) {
        let data = `artistId=${artistExist.getAttribute("id")}`;
        window.location.href = "../Artist/artist_homepage?" + data;
    }
});

//==========================================================================================================================
function loadDataIntoSearchResult(search_result, input_search) {
    let artist_wrapper = search_result.querySelector('#artist-wrapper');
    let song_wrapper = search_result.querySelector('#song-wrapper');
    let artist_row_display = search_result.querySelector('#artist-display');
    let album_row_display = search_result.querySelector('#album-display');

//    This is for top result
    let firstMatchArtist = artists.find(element => {
        return element.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase();
    });
    if (!firstMatchArtist) {
        artist_wrapper.innerHTML = '';
    }
    else {
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
    let song_result = '';
    for (let [index, song] of songs.entries()) {
        if (index === 4) {
            break;
        }
        if (song.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            song_result += `<div id="${song.id}" class="row align-items-center song-row rounded">
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
                                        <p class="sub-name m-0">${song.duration}</p>
                                        <div class="favorite-icon">
                                            <i class="fa-regular fa-heart clicked"></i>
                                            <i class="fa-solid fa-heart not-click"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        }
    }
    song_wrapper.innerHTML = song_result;
    // Add click event for favorite icon and for song rows
    addClickEventForFav_icons(search_result.querySelectorAll('.favorite-icon'));
    addClickEventForSong(Array.from(song_wrapper.children));

//     This is for artist result
    let artist_result = artists.map(element => {
        if (element.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            return `<div id="${element.id}" class="card rounded">
                        <div class="circle"
                            style="background-image: url('${element.avatar}');
                                   background-position: center center;">
                            <div class='play-icon'>
                                <i class='fa-solid fa-play'></i>
                            </div>
                        </div>
                        <h1 class="name-light pt-2">${element.name}</h1>
                        <h1 class="sub-name">Artist</h1>
                   </div>`;
        }
    });
    artist_row_display.innerHTML = artist_result.join('');
    // add event click for artist display row
    addClickEventForArtist(Array.from(artist_row_display.children));

//     This is for album result
    let album_result = albums.map(element => {
        if (element.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            return `<div id="${element.id}" class="card rounded">
                                <div class="square rounded"
                                    style="background-image: url('${element.albumImg}');
                                           background-position: center center;">
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>
                                </div>
                                <h1 class="name-light pt-2">${element.name}</h1>
                                <h1 class="sub-name">${element.description}</h1>
                            </div>`;
        }
    });
    album_row_display.innerHTML = album_result.join('');
    // add event click for album display row
    addClickEventForAlbum(Array.from(album_row_display.children));
}

loadDataIntoSearchResult(document.getElementById("search-result"), document.getElementById("input-search"));

// Add input listener
document.getElementById("input-search").addEventListener("input", e => {
   e.stopPropagation();
   let search_result = e.target.closest("main").querySelector('#search-result');
   loadDataIntoSearchResult(search_result, e.target);
});

