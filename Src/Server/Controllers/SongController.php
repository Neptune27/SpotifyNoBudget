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
        $data = $this->songModel->getRecentlyAdded($params[0]);
        echo json_encode($data);
    }
    function index(): void
    {
        // TODO: Implement index() method.
    }
}