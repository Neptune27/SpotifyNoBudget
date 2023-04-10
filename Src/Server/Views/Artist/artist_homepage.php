<?php
// This is a section for class definition
    class Album {
    public string $id;
    public string $name;
    public string $coverImg;
    public string $description;
    public int $listeners;

        /**
         * @param string $id
         * @param string $name
         * @param string $coverImg
         * @param string $description
         * @param int $listeners
         */
        public function __construct(string $id, string $name, string $coverImg, string $description, int $listeners)
        {
            $this->id = $id;
            $this->name = $name;
            $this->coverImg = $coverImg;
            $this->description = $description;
            $this->listeners = $listeners;
        }
}
    class Song {
        public string $id;
        public string $name;
        public string $coverImg;
        public int $listeners;
        public string $duration;
        public string $albumName;

        /**
         * @param string $id
         * @param string $name
         * @param string $coverImg
         * @param int $listeners
         * @param string $duration
         * @param string $albumName
         */
        public function __construct(string $id, string $name, string $coverImg, int $listeners, string $duration, string $albumName)
        {
            $this->id = $id;
            $this->name = $name;
            $this->coverImg = $coverImg;
            $this->listeners = $listeners;
            $this->duration = $duration;
            $this->albumName = $albumName;
        }

    }
    class Artist {
        public string $id;
        public string $name;
        public string $listeners;
        public bool $verify;
        public string $avatar;

        /**
         * @param string $id
         * @param string $name
         * @param string $listeners
         * @param bool $verify
         * @param string $avatar
         */
        public function __construct(string $id, string $name, string $listeners, bool $verify, string $avatar)
        {
            $this->id = $id;
            $this->name = $name;
            $this->listeners = $listeners;
            $this->verify = $verify;
            $this->avatar = $avatar;
        }

    }

// End class definition

// Get POST value for artist id
    if (isset($_GET['artistId'])) {
        $artistId = $_GET['artistId'];
    } else {
        echo "Not receive";
    }

//    Test sample
    $songs = [
            new Song("S01","No game no life", "/Src/Client/img/Artist/sample.jpg", 100, "3:20", "This is the end"),
            new Song("S02","Your name", "/Src/Client/img/Artist/sample.jpg", 200, "3:21", "This is the end"),
            new Song("S03","Bocchi", "/Src/Client/img/Artist/sample.jpg", 300, "4:20", "This is the end"),
            new Song("S04","No game no life", "/Src/Client/img/Artist/sample.jpg", 100, "3:20", "This is the end"),
            new Song("S05","Your name", "/Src/Client/img/Artist/sample.jpg", 200, "3:21", "This is the end"),
            new Song("S06","Bocchi", "/Src/Client/img/Artist/sample.jpg", 300, "4:20", "This is the end"),
    ];
    $albums = [
            new Album("Ab01","This is the end", "/Src/Client/img/Artist/sample.jpg", "2021 Albums", 200),
            new Album("Ab02","This is the beginning", "/Src/Client/img/Artist/sample.jpg", "2022 Albums", 300),
    ];

    $artist = new Artist("A01", "Aurora", 2000000,true, "/Src/Client/img/Artist/sample.jpg");

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
            $row .= "<tr id='{$song->id}'>
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
            $row .= "<div class='song-wrapper' id='{$album->id}'>
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
                $row .= "<div class='song-wrapper' id='{$song->id}'>
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
                $row .= "<div class='song-wrapper' id='{$song->id}'>
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
    <main></main>
</body>
</html>