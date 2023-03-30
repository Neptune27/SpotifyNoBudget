<?php
// This is a section for class definition
    class Album {
    public string $name;
    public string $coverImg;
    public string $description;
    public int $listeners;

    /**
     * @param $name
     * @param $coverImg
     * @param $description
     * @param $listeners
     */
    public function __construct($name, $coverImg, $description, $listeners)
    {
        $this->name = $name;
        $this->coverImg = $coverImg;
        $this->description = $description;
        $this->listeners = $listeners;
    }


}
    class Song {
        public string $name;
        public string $coverImg;
        public int $listeners;
        public string $duration;
        public string $albumName;

//        constructor

    /**
     * @param $name
     * @param $coverImg
     * @param $listeners
     * @param $duration
     * @param $albumName
     */
    public function __construct($name, $coverImg, $listeners, $duration, $albumName)
    {
        $this->name = $name;
        $this->coverImg = $coverImg;
        $this->listeners = $listeners;
        $this->duration = $duration;
        $this->albumName = $albumName;
    }
}
    class Artist {
        public string $name;
        public string $listeners;
        public array $songs;
        public array $albums;
        public bool $verify;
        public string $avatar;

        /**
         * @param $name
         * @param $listeners
         * @param $songs
         * @param $albums
         * @param $verify
         * @param $avatar
         */
        public function __construct($name, $listeners, $songs, $albums, $verify, $avatar)
        {
            $this->name = $name;
            $this->listeners = $listeners;
            $this->songs = $songs;
            $this->albums = $albums;
            $this->verify = $verify;
            $this->avatar = $avatar;
        }

    }

// End class definition

//    Test sample
    $songs = [
            new Song("No game no life", "/Src/Client/img/Artist/sample.jpg", 100, "3:20", "This is the end"),
            new Song("Your name", "/Src/Client/img/Artist/sample.jpg", 200, "3:21", "This is the end"),
            new Song("Bocchi", "/Src/Client/img/Artist/sample.jpg", 300, "4:20", "This is the end"),
            new Song("No game no life", "/Src/Client/img/Artist/sample.jpg", 100, "3:20", "This is the end"),
            new Song("Your name", "/Src/Client/img/Artist/sample.jpg", 200, "3:21", "This is the end"),
            new Song("Bocchi", "/Src/Client/img/Artist/sample.jpg", 300, "4:20", "This is the end"),
    ];
    $albums = [
            new Album("This is the end", "/Src/Client/img/Artist/sample.jpg", "2021 Albums", 200),
            new Album("This is the beginning", "/Src/Client/img/Artist/sample.jpg", "2022 Albums", 300),
    ];
    $artist = new Artist("Aurora", 2000000, $songs, $albums, true, "/Src/Client/img/Artist/sample.jpg");

//    Compare function for song and album
    function cmp($a, $b): int {
        if ($a->listeners == $b->listeners) {
            return 0;
        }
        return ($a->listeners > $b->listeners) ? -1 : 1;
    }
    function displayPopularSong($songs): string {
        $row = "";
//        Sort array song into descending order
        usort($songs, "cmp");

        foreach ($songs as $key=>$song) {
//            Show only 7 popular songs
            if ($key == 8) {
                break;
            }
            $stt = $key + 1;
            $row .= "<tr>
                        <td class=\"No\">
                            <span>{$stt}</span>
                            <i class=\"fa-solid fa-play play-for-song\"></i>
                        </td>
                        <td class=\"song-name-and-img\">
                            <div class=\"d-flex align-items-center\">
                                <div class=\"song-img\">
                                    <img src={$song->coverImg} alt=\"Song img\">
                                </div>
                                <span class=\"name-song\">{$song->name}</span>
                            </div>
                        </td>
                        <td class=\"listeners\">{$song->listeners}</td>
                        <td class=\"song-length\">
                            <div class=\"song-length-wrapper\">
                                <div class=\"favorite-icon\">
                                    <i class=\"fa-regular fa-heart clicked\"></i>
                                    <i class=\"fa-solid fa-heart not-click\"></i>
                                </div>
                                <span>{$song->duration}</span>
                            </div>
                        </td>
                    </tr>";
        }
        return $row;
    }
    function displayAlbum($albums): string {
//        global $albums;
        $row = "";
        foreach ($albums as $album) {
            $row .= "<div class='song-wrapper'>
                    <div class='song-img'>
                        <img src={$album->coverImg} alt=''>
                    </div>
                    <div class='song-detail'>
                        <p class='mb-0 name-song'>{$album->name}</p>
                        <p class='mb-0 album-name'>{$album->description}</p>
                    </div>
                    <div class='play-icon'>
                        <i class='fa-solid fa-play'></i>
                    </div>
                </div>";
        }
        return $row;
    }

    function displayPopularRelease($albums, $songs): string {
//        global $albums, $songs;
        $row = "";
        $popularReleases = [...$albums, ...$songs];

//        Sort popular release into descending order
        usort($popularReleases, "cmp");

        foreach ($popularReleases as $key=>$song) {
//            Show only 7 releases
            if ($key == 7) {
                break;
            }
            if ($song instanceof Song) {
                $row .= "<div class='song-wrapper'>
                        <div class='song-img'>
                            <img src='{$song->coverImg}' alt=''>
                        </div>
                        <div class='song-detail'>
                            <p class='mb-0 name-song'>{$song->name}</p>
                            <p class='mb-0 album-name'>{$song->albumName}</p>
                        </div>
                        <div class='play-icon'>
                            <i class='fa-solid fa-play'></i>
                        </div>
                    </div>";
            }
            else if ($song instanceof Album) {
                $row .= "<div class='song-wrapper'>
                        <div class='song-img'>
                            <img src='{$song->coverImg}' alt=''>
                        </div>
                        <div class='song-detail'>
                            <p class='mb-0 name-song'>{$song->name}</p>
                            <p class='mb-0 album-name'>{$song->description}</p>
                        </div>
                        <div class='play-icon'>
                            <i class='fa-solid fa-play'></i>
                        </div>
                    </div>";
            }
        }

        return $row;
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel="stylesheet" href="/Bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/Src/Client/css/Artist/artist_homepage.css">
    <script src="/Src/Client/js/Artist/artist_homepage.js" defer></script>
</head>
<body>
    <main>
        <!--This is section for artist name, background, monthly listeners-->
        <div id="artist-title" style="background-image: url(<?php echo "{$artist->avatar}" ?>);
                                  background-position: center top;
                                  background-repeat: no-repeat;
">
            <div id="verified-tick" <?php echo ($artist->verify) ?  "" : 'class="opacity-0"'?>>
                <i class="fa-solid fa-circle-check" style="color: cornflowerblue"></i>
                <span>Verified Artist</span>
            </div>

            <h1 class="fw-bolder pb-3" style="font-size: 70px; margin-top: -10px;">Aurora</h1>

            <span><?php echo $artist->listeners ?> listeners</span>
        </div>
        <!--End artist title-->

        <div id="play-follow" class="d-flex align-items-center">
            <span style="padding-left: 0">
                <i class="fa-solid fa-play" style="font-size: 30px;"></i>
            </span>
            <span style="font-size: 11px;
                        font-weight: bold;">
                FOLLOW
            </span>
            <span><i class="fa-solid fa-ellipsis"></i></span>
        </div>

<!--        This is a section for Popular playlist-->
        <h3 class="pt-3 pb-2">Popular</h3>
        <div id="popular-playlist">
            <table class="table table-condensed" style="margin-bottom: 0">
                <tbody>
                    <?php echo displayPopularSong($songs) ?>
                </tbody>
            </table>
        </div>
<!--        End popular playlist-->

<!--        This is a section for Popular Releases-->
        <div id="popular-releases">
            <h3 class="pt-5 pb-2">Popular releases</h3>

            <div class="song-display">
                <?php echo displayPopularRelease($albums, $songs) ?>
            </div>
        </div>
<!--        End popular releases-->

<!--        This is a section for album-->
        <div id="album">
            <h3 class="pt-5 pb-2">Albums</h3>

            <div class="song-display">
                <?php echo displayAlbum($albums) ?>
            </div>
        </div>
<!--        End album-->
    </main>
</body>
</html>