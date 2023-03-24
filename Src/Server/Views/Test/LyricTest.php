<script>let exports = {};</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

<link rel="stylesheet" href="/Src/Client/css/Lyric/Lyric.css">
<script src="/Src/Client/js/AudioPlayer.js" defer></script>

<div style="position: relative">
    <div id="lyricImg">
    </div>
    <div id="transitionImg"></div>
    <div style="display: flex; justify-content: center; height: 500px;">
        <div id="lyricMain" class="lyricMain" style="z-index: 1; padding: 1rem"></div>
    </div>
</div>


<div style="display: flex; justify-content: center">
    <div id="audioPlayerBar" class="audioPlayerBar" style="display: flex; justify-content: space-around; padding: 0.5rem">
        <div style="width: 30%;">
            <div id="mediaControl" class="mediaControl">
                <i id="backward" class="fa-solid fa-backward"></i>
                <i id="play" class="fa-solid fa-play playBtn"></i>
                <i id="pause" class="fa-solid fa-pause pauseBtn"></i>
                <i id="forward" class="fa-solid fa-forward"></i>
            </div>
            <div id="audioPlayer" style="display: flex; align-items: center; color: white">
                <label for="songSlider"></label>
                <div id="timeStart" style="font-size: 0.75rem">0:00</div>
                <input id="songSlider" type="range" class="songRange" style="--pos: 0%" value="0"
                       step="1">
                <div id="timeEnd" style="font-size: 0.75rem">0:00</div>

            </div>
        </div>

    </div>
</div>

<div id="audioSection">
    <audio id="audioFile" onended="vl(event)">
        <source src="/Src/Client/mp3/Akuma%20No%20Ko.flac" type="audio/flac">
    </audio>
</div>


