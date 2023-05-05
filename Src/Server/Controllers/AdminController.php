<?php

class AdminController extends Controller
{

    static string $defaultTemplate = "Admin/_default";
    static string $editTemplate = "Admin/_edit";

    function index(): void
    {
        $this->view(self::$defaultTemplate, []);
    }

    function SongUpload($params)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            print_r($params);
            print_r($_GET);
            print_r($_FILES);

            $target_dir = __DIR__ . "/../../Client/mp3/" . $params[0] . "/" . $params[1] . "/";
            $target_file = $target_dir . basename($_FILES["song"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            if (!file_exists($target_dir)) {
                mkdir($target_dir, 0777, true);
            }

            if (file_exists($target_file)) {
                unlink($target_file);
            }

            if (move_uploaded_file($_FILES["song"]["tmp_name"], $target_file)) {
                echo "The file " . htmlspecialchars(basename($_FILES["song"]["name"])) . " has been uploaded.";
            }
        }
        if ($_SERVER["REQUEST_METHOD"] === 'DELETE') {
            print_r($_GET);
            print_r($params);
            $a = 2;
        }
    }

    function AddSongPage($params)
    {

        $artistModel = $this->model("ArtistModel");
        $artist = $artistModel->getAllArtist();
        if (!isset($params[0])) {
            $this->view(self::$defaultTemplate, [
                "artist" => $artist,
                "Page" => "SongArtistPage",
                "Title" => "Ca Sĩ",
            ]);
            return;
        }

        $albumModel = $this->model("AlbumModel");
        $albums = $albumModel->GetAllAlbumFrom($params[0]);
        if (!isset($params[1])) {
            $this->view(self::$defaultTemplate, [
                "Albums" => $albums,
                "Page" => "SongAlbumPage",
                "artist" => $artist,
                "Title" => "Albums"


            ]);
            return;
        }

        $songModel = $this->model("SongModel");
        if (!isset($params[2])) {
            $query = "";
            if (isset($_GET["q"])) {
                $query = $_GET["q"];
            }
            $page = 1;
            if (isset($_GET["p"])) {
                $val = $_GET["p"];
                if (is_numeric($val)) {
                    $page = $val;
                }
            }

            $totalSongQR = $songModel->getTotalSongFromAlbum($params[1], $query);
            $totalSong = $totalSongQR[0]["TOTAL_PAGE"];
            if ($totalSong == 0) {
                $totalSong = 1;
            }
            $totalPage = floor($totalSong / 20);
            if ($totalSong % 20 !== 0) {
                $totalPage += 1;
            }

            if ($page > $totalPage) {
                $secondCond = "";
                if ($query !== "") {
                    $secondCond = "?q={$query}";
                }
                header("Location: /Admin/AddSongPage/{$params[0]}/{$params[1]}{$secondCond}");
            }

            $song = $songModel->GetSongs($params[1], $query, ($page-1)*20);

            $this->view(self::$defaultTemplate, [
                "Songs" => $song,
                "Page" => "SongSongPage",
                "Albums" => $albums,
                "artist" => $artist,
                "totalPage" => $totalPage,
                "page" => $page,
                "query" => $query,
                "Title" => "Bài hát"
            ]);
            return;
        }


        $isAddNew = $params[2] === "0";

        $song = $songModel->getSong($params[2]);
        $this->view(self::$editTemplate, [
            "Page" => "SongEditPage",
            "Song" => $song,
            "Albums" => $albums,
            "artist" => $artist,
            "isAddNew" => $isAddNew,

        ]);

    }

    function AlterSong($params)
    {
        if ($_REQUEST["METHOD"] = "POST") {
            $entityBody = file_get_contents('php://input');
            $val = json_decode($entityBody);
            $loc = "/Src/Client/mp3/" . $params[0] . "/" . $params[1] . "/" . $val->fileName;


            $songModel = $this->model("SongModel");
            if ($params[2] === "0") {
                $songModel->addSong($val->songName, $loc, $val->duration, json_encode($val->lyrics), $params[1], $params[0]);
            }
            else {
                $songModel->alterSong($val->songName, $loc, $val->duration, json_encode($val->lyrics), $params[1], $params[0], $params[2]);
            }

        }
    }

}