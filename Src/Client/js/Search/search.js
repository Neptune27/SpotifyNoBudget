// Sample data
    let artists = [
        {name: "Adele", avatar: "/Src/Client/img/Artist/sample.jpg"},
        {name: "Aurora", avatar: "/Src/Client/img/Artist/sample.jpg"},
        {name: "Eminem", avatar: "/Src/Client/img/Artist/sample.jpg"},
        {name: "Maroon 5", avatar: "/Src/Client/img/Artist/sample.jpg"},
        {name: "John Cena", avatar: "/Src/Client/img/Artist/sample.jpg"},
    ];

    class Song {
        constructor(name, artist, duration, songImg) {
            this.name = name;
            this.artist = artist;
            this.duration = duration;
            this.songImg = songImg;
        }
    }

    class Album {
        constructor(name, description, albumImg) {
            this.name = name;
            this.description = description;
            this.albumImg = albumImg;
        }
    }

    let songs = [
        new Song("One more night", "Maroon 5", "4:25", "/Src/Client/img/Artist/sample.jpg"),
        new Song("Apologize", "Justin", "4:10", "/Src/Client/img/Artist/sample.jpg"),
        new Song("Bocchi", "Maria Ana", "3:25", "/Src/Client/img/Artist/sample.jpg"),
        new Song("Hello World", "Chicken", "3:15", "/Src/Client/img/Artist/sample.jpg"),
        new Song("We are one", "Deroid", "3:20", "/Src/Client/img/Artist/sample.jpg"),
    ];

    let albums = [
        new Album("This is the end", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Morning Sunshine", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("An afternoon", "2021 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Beep boo", "2022 album", "/Src/Client/img/Artist/sample.jpg"),
        new Album("Customer", "2023 album", "/Src/Client/img/Artist/sample.jpg"),
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
                }
                else if (child.classList.contains('not-click')) {
                    child.classList.remove('not-click');
                    child.classList.add('clicked');
                }
            }
        });
    });
}
addClickEventForFav_icons();
function loadDataIntoSearchResult(search_result, input_search) {
    let artist_wrapper = search_result.querySelector('#artist-wrapper');
    let song_wrapper = search_result.querySelector('.song-wrapper');
    let artist_row_display = search_result.querySelector('#artist-row > div');
    let album_row_display = search_result.querySelector('#album-row > div');

//    This is for top result
    let top_result = '';
    for (let artist of artists) {
        // Find artist name for top result
        if (artist.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            top_result = `<div class="circle mb-4" style="background-image: url('${artist.avatar}');
                                                               background-position: center center;"></div>
                <!--                            ========================== -->
                <!--                            Artist's name-->
                                <h1 class="top-result-name mb-3">${artist.name}</h1>
                                <h1 class="name-light">Artist</h1>
                                <div class='play-icon'>
                                    <i class='fa-solid fa-play'></i>
                                </div>`;

            //     Show result to top result
            break;
        }
    }
    artist_wrapper.innerHTML = top_result;
//     This is for song result
    let song_result = '';
    for (let [index, song] of songs.entries()) {
        if (index === 4) {
            break;
        }
        if (song.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            song_result += `<div class="row align-items-center song-row rounded">
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
    // Add click event for favorite icon
    addClickEventForFav_icons(search_result.querySelectorAll('.favorite-icon'));

//     This is for artist result
    let artist_result = '';
    for (let artist of artists) {
        if (artist.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            artist_result += `<div class="card rounded">
                                    <div class="circle"
                                        style="background-image: url('${artist.avatar}');
                                               background-position: center center;">
                                        <div class='play-icon'>
                                            <i class='fa-solid fa-play'></i>
                                        </div>
                                    </div>
                                    <h1 class="name-light pt-2">${artist.name}</h1>
                                    <h1 class="sub-name">Artist</h1>
                               </div>`;
        }
    }
    artist_row_display.innerHTML = artist_result;

//     This is for album result
    let album_result = '';
    for (let album of albums) {
        if (album.name.substring(0, input_search.value.length).toLowerCase() === input_search.value.toLowerCase()) {
            album_result += `<div class="card rounded">
                                <div class="square rounded"
                                    style="background-image: url('${album.albumImg}');
                                           background-position: center center;">
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>
                                </div>
                                <h1 class="name-light pt-2">${album.name}</h1>
                                <h1 class="sub-name">${album.description}</h1>
                            </div>`;
        }
    }
    album_row_display.innerHTML = album_result;
}

loadDataIntoSearchResult(document.getElementById("search-result"), document.getElementById("input-search"));

// Add input listener
document.getElementById("input-search").addEventListener("input", e => {
   e.stopPropagation();
   let search_result = e.target.closest("main").querySelector('#search-result');
   loadDataIntoSearchResult(search_result, e.target);
});

