"use strict";
const urlChunks = window.location.href.split("/");
console.log(urlChunks);
const timeToSecond = (time) => {
    if (!time.match(/:/g)) {
        time = "0:" + time;
    }
    const timeChunk = time.split(":");
    const total = Number(timeChunk[0]) * 60 + Number(timeChunk[1]);
    return isNaN(total) ? 0 : total;
};
document.querySelector("button[type='submit']")?.addEventListener("click", () => {
    // @ts-ignore
    const fileName = window.fileName;
    if (fileName === "" && urlChunks[urlChunks.length - 1] === "0") {
        return;
    }
    console.log("cas");
    let lyricsElem = document.getElementById("LyricSection");
    if (lyricsElem === null) {
        throw Error("Wut");
    }
    let lyrics = [];
    for (const lyricsElemElement of lyricsElem.children) {
        const timeElem = lyricsElemElement.querySelector("input[placeholder='TG']");
        if (timeElem === null) {
            continue;
        }
        const lyricElem = lyricsElemElement.querySelector("input[placeholder='Lời bài hát']");
        if (lyricElem === null) {
            continue;
        }
        lyrics.push([timeToSecond(timeElem.value), lyricElem.value]);
    }
    let name = document.getElementById("songName");
    if (name === null) {
        throw Error("Wut");
    }
    let duration = document.getElementById("songDuration");
    if (duration === null) {
        throw Error("Wut");
    }
    const durTime = timeToSecond(duration.value);
    console.log(duration.value);
    console.log(durTime);
    console.log(lyrics);
    const artistID = urlChunks[urlChunks.length - 3];
    const albumID = urlChunks[urlChunks.length - 2];
    const songID = urlChunks[urlChunks.length - 1];
    fetch(`/Admin/AlterSong/${artistID}/${albumID}/${songID}`, {
        method: "POST",
        body: JSON.stringify({
            lyrics: lyrics,
            fileName: fileName,
            duration: durTime,
            songName: name.value,
        })
    });
});
//# sourceMappingURL=SongSubmit.js.map