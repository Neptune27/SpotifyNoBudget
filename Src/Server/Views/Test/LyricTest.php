<script>let exports = {};</script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"
      type="text/css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="/Src/Client/css/GlobalStyle.css">
<link rel="stylesheet" href="/Src/Client/css/Lyric/Lyric.css">
<link rel="stylesheet" href="/Src/Client/css/Queue.css">
<script type="module" src="/Src/Client/js/AudioPlayerQueueController.js" defer></script>
<main>
    <div class="mainLyric" style="position: relative">
        <div id="lyricImg">
        </div>
        <div id="transitionImg"></div>
        <div style="display: flex; justify-content: center; height: 500px;">
            <div id="lyricMain" class="lyricMain" style="z-index: 1; padding: 1rem"></div>
        </div>
    </div>

    <div id="mainQueue" class="mainQueue" style="color: white;background: #14141a; padding: 2rem 1rem">
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

</main>


