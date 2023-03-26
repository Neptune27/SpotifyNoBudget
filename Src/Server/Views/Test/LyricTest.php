<script>let exports = {};</script>
<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="/Src/Client/css/Lyric/Lyric.css">
<link rel="stylesheet" href="/Src/Client/css/GlobalStyle.css">
<script src="/Src/Client/js/AudioPlayer.js" defer></script>

<div style="position: relative">
    <div id="lyricImg">
    </div>
    <div id="transitionImg"></div>
    <div style="display: flex; justify-content: center; height: 500px;">
        <div id="lyricMain" class="lyricMain" style="z-index: 1; padding: 1rem"></div>
    </div>
</div>


<div style="display: flex; justify-content: center; color: white">
    <div id="audioPlayerBar" class="audioPlayerBar" style="display: flex ;padding: 0.5rem">
        <div style="display: flex; justify-content: space-between; width: 100%; position: relative; gap: 1rem ">
            <div style="display: flex; align-items: center; min-width: 25%; max-width: 25%">
                <img id="mediaCoverImg" src="/Src/Client/img/Album/blank.jfif" class="img100" alt="Media Cover Image" style="margin-right: 1rem;">
                <div>
                    <div id="mediaTitle">Title</div>
                    <div id="mediaArtist" style="color: gray; font-size: 0.75rem">Artist</div>
                </div>
            </div>
            <div style="width: 50%;">
                <div id="mediaControl" class="mediaControl">
                    <i id="repeat" class="repeatIcon"></i>
                    <i id="backward" class="fa-solid fa-backward"></i>
                    <i id="play" class="fa-solid fa-play playBtn"></i>
                    <i id="pause" class="fa-solid fa-pause pauseBtn"></i>
                    <i id="forward" class="fa-solid fa-forward"></i>
                    <i id="shuffle" class="fa-solid fa-shuffle shuffle"></i>
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
                <div class="volumeIcon"></div>
                <div class="songRangeContainer">
                    <label for="audioSlider"></label>
                    <input id="audioSlider" type="range" class="songRange"  value="0"
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


