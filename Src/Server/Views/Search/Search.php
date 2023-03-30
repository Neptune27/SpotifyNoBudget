<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/Src/Client/css/Search/search.css">
    <script src="/Src/Client/js/Search/search.js" defer></script>
</head>
<body>
    <main>
<!--        This is section for search box -->
        <nav class="fixed-top">
            <div id="search-wrapper" class="d-flex align-items-center container">

                <div class="position-relative">
                    <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
                    <input type="text" placeholder="What do you want to listen to?" id="input-search">
                    <i class="fa-solid fa-xmark" id="clear-search"></i>
                </div>

            </div>
        </nav>
<!--        End section for search box -->

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
                        <div class="song-wrapper">

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
                    <div class="d-flex flex-wrap">
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
                    <div class="d-flex flex-wrap">
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
    </main>
</body>
</html>
