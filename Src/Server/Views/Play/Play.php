<script>let exports = {};</script>
<link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">

<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet"
      type="text/css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

<link rel="stylesheet" href="/Src/Client/css/GlobalStyle.css">
<link rel="stylesheet" href="/Src/Client/css/Lyric/Lyric.css">
<link rel="stylesheet" href="/Src/Client/css/Queue.css">
<link rel="stylesheet" href="/Src/Client/css/Play.css">
<link rel="stylesheet" href="/Src/Client/css/Sidebar.css">
<link rel="stylesheet" href="/Src/Client/css/Search.css">
<link rel="stylesheet" href="/Src/Client/css/HomePane.css">

<script type="module" src="/Src/Client/js/AudioPlayerQueueController.js" defer></script>
<script type="module" src="/Src/Client/js/Sidebar.js" defer></script>
<script type="module" src="/Src/Client/js/Search/search.js" defer></script>




<main style="display: flex; background-color: var(--background-color)" data-sidebar="Home">


    <div id="sidebar">
        <div style="width: 65%">
            <img src="/Src/Client/img/Premium/spotify_logo.png" alt="spotify-logo" style="width: 100%">
        </div>
        <ul>
            <li id="Home" class="clicked">
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </li>
            <li id="Search" class="not-clicked">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
            </li>
            <li id="Library" class="not-clicked">
                <i class="fa-solid fa-bookmark"></i>
                <span>Your library</span>
            </li>
        </ul>
    </div>
    <div style="flex-grow: 1">
        <div class="mainLyric" style="position: relative">
            <div id="lyricImg">
            </div>
            <div id="transitionImg"></div>
            <div style="display: flex; justify-content: center; height: 100vh;">
                <div id="lyricMain" class="lyricMain" style="z-index: 1; padding: 1rem 1rem 30vh 1rem"></div>
            </div>
        </div>

        <div id="mainQueue" class="mainQueue"
             style="color: white;background: #14141a; padding: 2rem 1rem; height: 100vh">
            <h3>Queue</h3>
            <section style="margin-bottom: 2rem">
                <h5 style="color: gray">Now playing</h5>
                <div class="queueContainer" id="nowPlayingQueue">
                </div>
            </section>
            <section>
                <h5 style="color: gray">Next</h5>
                <div class="queueContainer" id="nextQueue">
                </div>
            </section>
        </div>

        <div id="otherPane" class="otherPane" style="position: relative;">

            <div class="homePane" style="">
                <h1>Recently Added:</h1>
                <div class="homeContainer" id="homeContainer"></div>
            </div>

            <div class="searchPane">
                <nav style="position: sticky; top: 0; z-index: 1">
                    <div id="search-wrapper" class="d-flex align-items-center container justify-content-center">

                        <div class="position-relative">
                            <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
                            <input type="text" placeholder="What do you want to listen to?" id="input-search">
                            <i class="fa-solid fa-xmark" id="clear-search"></i>
                        </div>

                    </div>
                </nav>
                <!--        This is a section for search result -->
                <div id="search-result">
                    <div class="container">
                        <!--            Row for top result and song -->
                        <div class="row">
                            <!--                    Column top result -->
                            <div class="col-md-6">
                                <h1 class="header-name">Top result</h1>
                                <div id="artist-wrapper" class="rounded">
                                    <!--                            Artist's avatar -->
                                    <div class="circle mb-4"></div>
                                    <!--                            ========================== -->
                                    <!--                            Artist's name-->
                                    <h1 class="top-result-name mb-3">Aurora</h1>
                                    <h1 class="name-light">Artist</h1>
                                    <div class='play-icon'>
                                        <i class='fa-solid fa-play'></i>
                                    </div>
                                    <!--                            =========================-->
                                </div>
                            </div>
                            <!--                    Column song -->
                            <div class="col-md-6">
                                <h1 class="header-name">Song</h1>
                                <div id="song-wrapper">

                                    <!--                            Row Song -->
                                    <div class="row align-items-center song-row rounded">
                                        <div class="col-10">
                                            <div class="d-flex align-items-center">
                                                <div class="square d-flex align-items-center justify-content-center">
                                                    <i class="fa-solid fa-play play-for-song"></i>
                                                </div>
                                                <div style="padding-left: 20px;">
                                                    <p class="name-light m-0">Song's name</p>
                                                    <p class="sub-name m-0">Artist's name</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="d-flex align-items-center flex-row-reverse justify-content-between">
                                                <p class="sub-name m-0">4:25</p>
                                                <div class="favorite-icon">
                                                    <i class="fa-regular fa-heart clicked"></i>
                                                    <i class="fa-solid fa-heart not-click"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--                            End Row Song -->

                                </div>
                            </div>
                        </div>
                        <!--            End row for top result and song -->

                        <!--                Artist row display -->
                        <div id="artist-row">
                            <h1 class="header-name">Artists</h1>
                            <!--                    Display row artist -->
                            <div class="d-flex flex-wrap" id="artist-display">
                                <div class="card rounded">
                                    <div class="circle">
                                        <div class='play-icon'>
                                            <i class='fa-solid fa-play'></i>
                                        </div>
                                    </div>
                                    <h1 class="name-light pt-2">Artist's name</h1>
                                    <h1 class="sub-name">Artist</h1>
                                </div>
                            </div>
                            <!--                    End Display row artist -->
                        </div>
                        <!--                End artist row display -->

                        <!--                Albums row display -->
                        <div id="album-row">
                            <h1 class="header-name">Albums</h1>
                            <!--                    Display row album -->
                            <div class="d-flex flex-wrap" id="album-display">
                                <div class="card rounded">
                                    <div class="square rounded">
                                        <div class='play-icon'>
                                            <i class='fa-solid fa-play'></i>
                                        </div>
                                    </div>
                                    <h1 class="name-light pt-2">Album's name</h1>
                                    <h1 class="sub-name">Album's desc</h1>
                                </div>
                            </div>
                            <!--                    End Display row album -->
                        </div>
                        <!--                End Albums row display -->
                    </div>
                </div>
                <!--        End search result -->
            </div>
            <div class="artistPane">

            </div>
        </div>
    </div>
</main>


<div style="display: flex; justify-content: center; color: white">
    <div id="audioPlayerBar" class="audioPlayerBar" style="display: flex ;padding: 0.5rem">
        <div style="display: flex; justify-content: space-between; width: 100%; position: relative; gap: 1rem ">
            <div style="display: flex; align-items: center; min-width: 25%; max-width: 25%">
                <img id="mediaCoverImg" src="/Src/Client/img/Album/blank.jfif" class="img100" alt="Media Cover Image"
                     style="margin-right: 1rem;">
                <div>
                    <div id="mediaTitle">Title</div>
                    <div id="mediaArtist" style="color: gray; font-size: 0.75rem">Artist</div>
                </div>
            </div>
            <div style="width: 50%;">
                <div id="mediaControl" class="mediaControl">
                    <i id="repeat" class="repeatIcon"></i>
                    <i id="backward" class="bi-skip-backward-fill"></i>
                    <i id="play" class="bi-play-fill playBtn"></i>
                    <i id="pause" class="bi-pause-fill pauseBtn"></i>
                    <i id="forward" class="bi-skip-forward-fill"></i>
                    <i id="shuffle" class="bi-shuffle shuffle"></i>
                </div>
                <div id="audioPlayer" style="display: flex; align-items: center; color: white">
                    <label for="songSlider"></label>
                    <div id="timeStart" style="font-size: 0.75rem">0:00</div>
                    <input id="songSlider" type="range" class="songRange" style="--pos: 0%" value="0"
                           step="1">
                    <div id="timeEnd" style="font-size: 0.75rem">0:00</div>
                </div>
            </div>
            <div id="volumeQueueArea" class="volumeQueueArea" style="--audioPos: 0">
                <i id="lyricBtn" class="bi bi-mic-fill lyricBtn"></i>
                <i id="paneBtn" class="bi bi-layer-backward paneBtn"></i>
                <div id="volumeBtn" class="volumeIcon" style="margin-right: 0"></div>
                <div class="songRangeContainer">
                    <label for="audioSlider"></label>
                    <input id="audioSlider" type="range" class="songRange" value="0"
                           step="1">
                </div>
            </div>
        </div>
    </div>
</div>

<div id="audioSection">
    <audio id="audioFile">
    </audio>
</div>

<script defer>

</script>

