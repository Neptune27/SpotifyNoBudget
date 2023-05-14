<?php

class SongController extends Controller
{
    private SongModel $songModel;

    public function __construct()
    {
        $this->songModel = $this->model("SongModel") ;
    }

    function RecentlyAdded($params): void
    {
        if ($params[1] == 0) {
            return;
        }

        $total = $this->songModel->getTotalSong();
        $isPrev = false;
        if ($params[0] > 1) {
            $isPrev = true;
        }

        $isNext = true;

        $total = ceil( $total[0]["TOTAL_PAGE"] / $params[1]);


        if (($params[0]+1) > $total) {
            $isNext = false;
        }
        $from = ($params[0]-1)*$params[1];

        $data = $this->songModel->getRecentlyAdded($from, $params[1]);
        echo json_encode([
            'SONGS' => $data,
            'isPrev' => $isPrev,
            'isNext' => $isNext,
            'currentPage' => $params[0]
        ]);

    }


    function DeleteSong($params) {
        if ($_SERVER['REQUEST_METHOD'] === "DELETE") {
            $this->songModel->deleteSong($params[0]);
        }
    }

    function getLyrics($params)
    {
        $data = $this->songModel->getLyric($params[0])[0];
        echo json_encode($data);
    }

    function index(): void
    {
        // TODO: Implement index() method.
    }
}