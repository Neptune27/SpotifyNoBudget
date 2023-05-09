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
        // $albums = $albumModel->GetAllAlbumFrom($params[0]);
        if (!isset($params[1])) {

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

            $totalAlbumQR = $albumModel->getTotalAlbum($params[0], $query);
            $totalAlbum = $totalAlbumQR[0]["TOTAL_PAGE"];
            if ($totalAlbum == 0) {
                $totalAlbum = 1;
            }
            $totalPage = floor($totalAlbum / 20);
            if ($totalAlbum % 20 !== 0) {
                $totalPage += 1;
            }

            if ($page > $totalPage) {
                $secondCond = "";
                if ($query !== "") {
                    $secondCond = "?q={$query}";
                }
                header("Location: /Admin/AddSongPage/{$params[0]}{$secondCond}");
            }

            $albumsq = $albumModel->GetAlbums($params[0], $query, ($page-1)*20);
            $this->view(self::$defaultTemplate, [
                // "Songs" => $song,
                "Page" => "SongAlbumPage",
                "Albums" => $albumsq,
                "artist" => $artist,
                "totalPage" => $totalPage,
                "page" => $page,
                "query" => $query,
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

            $totalSongQR = $songModel->getTotalSong($params[1], $query);
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
                // "Albums" => $albums,
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

    
    function AddAlbum($params) {
        if (isset($params[0]) && $params[0] == "Add") {
//            Đủ thông tin để insert into
            $AlbumModel = $this->model("AlbumModel");
            // if(is_array($_POST['AlbumSong'])){
            $AlbumName = $_POST['AlbumName'];
            $AlbumAvatar = $_POST['AlbumAvatar'];
            $AlbumListener = $_POST['AlbumListener'];
            $AlbumDescriptions = $_POST['AlbumDescriptions'];
            $AlbumTime = $_POST['AlbumTime'];
            $AlbumDate = $_POST['AlbumDate'];
            $AlbumSong = $_POST['AlbumSong'];
            $AlbumCreated=  $_POST['AlbumCreated'];
            $AlbumModel->addAlbum($AlbumName, $AlbumAvatar, $AlbumDescriptions ,$AlbumTime,$AlbumDate,$AlbumListener,$AlbumSong, $AlbumCreated );
            // }
           
            
            return;
        }
        // echo '<script>alert("Welcome to Geeks for Geeks")</script>';
        $AlbumModel = $this->model("AlbumModel");
        $UAL = $AlbumModel->getAllIDUser();
        // $AlbumModel->deleteAlbum(3);
        $SAL = $AlbumModel->getAllIDSong();
        $last = $AlbumModel->createAlbumID();

        $this->view(self::$editTemplate, [
            "Page" => "AlbumAdd",
            "UAL" => $UAL,
            "SAL" => $SAL,
            "id" => $last,
        ]);
    }


    function EditAlbum($params) {
        $AlbumModel = $this->model("AlbumModel");
        if (isset($params[0]) && $params[0] == "Edit") {
//            Đủ thông tin để update
        $AlbumID = $_POST['AlbumID'];
        $AlbumName = $_POST['AlbumName'];
        $AlbumAvatar = $_POST['AlbumAvatar'];
        $AlbumListener = $_POST['AlbumListener'];
        $AlbumDescriptions = $_POST['AlbumDescriptions'];
        $AlbumTime = $_POST['AlbumTime'];
        $AlbumDate = $_POST['AlbumDate'];
        $AlbumSong = $_POST['AlbumSong'];
        $AlbumUser=  $_POST['AlbumCreated'];

            $AlbumModel->editAlbum($AlbumID,$AlbumName, $AlbumAvatar,$AlbumDescriptions,$AlbumTime,$AlbumDate,$AlbumListener,$AlbumSong, $AlbumUser );

            return;
        }

        // $AlbumModel->editAlbum(20,4, 1,1,"","",1,"1", "1" );
        $AlbumID = $params[0];
        $AlbumSongs = $AlbumModel->getDetailAlbumSong($AlbumID);
        $AlbumInfo = $AlbumModel->getDetailAlbum($AlbumID);
        $AlbumUsers = $AlbumModel->getDetailAlbumCreated($AlbumID);
        $UAL = $AlbumModel->getAllIDUser();
        $SAL = $AlbumModel->getAllIDSong();
        $this->view(self::$editTemplate, [
            "Page" => "AlbumEdit",
            "Album" => $AlbumInfo,
            "User" => $AlbumUsers,
            "Song" => $AlbumSongs,
            "AlbumID" => $AlbumID,
            "UAL" => $UAL,
            "SAL" => $SAL,
        ]);
    }


    function DeleteAlbum($params) {
        if (isset($params[0])) {
            $AlbumModel = $this->model("AlbumModel");
            $AlbumModel->deleteAlbum($params[0]);
            
        }
        header ("Location:/".$params[1]."/".$params[2]."/".$params[3]);
    }

    function GetArtistByName() {
        if (isset($_POST['AlbumName'])) {
            $i=1;
            if (isset($_POST['AlbumNumber'])) {
                $i=$_POST['AlbumNumber'];
            }
            $artistModel = $this->model("AlbumModel");
            $res = ['artists' => $artistModel->getArtistByName($_POST['AlbumName'],$i)];
            echo json_encode($res);
        }
    }

    function AlbumAvatarUpload($params)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            print_r($params);
            print_r($_GET);
            print_r($_FILES);

            $target_dir = __DIR__ . "/../../Client/img/Album/" . $params[0] . "/";
            $target_file = $target_dir . basename($_FILES["AlbumAvatar"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            if (!file_exists($target_dir)) {
                mkdir($target_dir, 0777, true);
            }

            if (file_exists($target_file)) {
                unlink($target_file);
            }

            if (move_uploaded_file($_FILES["AlbumAvatar"]["tmp_name"], $target_file)) {
                echo "The file " . htmlspecialchars(basename($_FILES["AlbumtAvatar"]["name"])) . " has been uploaded.";
            }
        }
        if ($_SERVER["REQUEST_METHOD"] === 'DELETE') {
            print_r($_GET);
            print_r($params);
            $a = 2;
        }
    }

}

