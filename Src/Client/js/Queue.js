import { timeConverter } from "./AudioPlayer.js";
import { createAlbum } from "./Albums.js";
// @ts-ignore
import { fetchArtistByID } from "../js/Search/search.js";
export const queueItemCreator = (data) => {
    return data?.map((val, index) => `
            <div class="queueItem" data-song="${val.SONG_ID}" tabindex="0">
                <div class="queueId">
                    <span>${index + 1}</span>
                    <i class="fa-solid fa-circle-play"></i>
                </div>
                <div class="queueMain">
                    <img src="${val.SONG_IMG}" alt="">
                    <div>
                        <div>${val.SONG_NAME}</div>
                        <a href="#" style="color: white; text-decoration: unset" data-artist="${val.ARTIST_ID}">${val.ARTIST}</a>
                    </div>
                </div>
                <div class="queueTitle">${val.ALBUM_NAME}</div>
                <div class="queueOther">
                    <span>${timeConverter(Number(val.DURATION))}</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        `).join(" ");
};
function removeShowOption() {
    let showOption = document.querySelector('.showOption');
    if (showOption) {
        showOption.classList.remove('showOption');
    }
}
const setupAlbumConnection = (rootElem) => {
    const albumElems = rootElem.querySelectorAll("[data-album]");
    for (const albumElem of albumElems) {
        albumElem.addEventListener("click", () => {
            const id = albumElem.getAttribute("data-album");
            if (id === null) {
                return;
            }
            createAlbum(id).then(() => document.querySelector("main")?.setAttribute("data-pane", "NONE"));
        });
    }
};
const setupArtistConnection = (rootElem) => {
    const artistElems = rootElem.querySelectorAll("[data-artist]");
    for (const artistElem of artistElems) {
        artistElem.addEventListener("click", () => {
            const id = artistElem.getAttribute("data-artist");
            fetchArtistByID(id).then(() => {
                document.querySelector("main")?.setAttribute("data-pane", "NONE");
            });
        });
    }
};
const setupThreeDotConnection = (rootElem) => {
    // Click event for ...
    const threeDot = rootElem.querySelectorAll('.three-dot');
    if (threeDot === null) {
        return;
    }
    for (const threeDotElement of threeDot) {
        threeDotElement.addEventListener("click", function (e) {
            e.stopPropagation();
            removeShowOption();
            // @ts-ignored
            this.nextElementSibling.classList.add('showOption');
        });
    }
};
class Queue {
    constructor(functionProps, elems) {
        this.addEventForQueue = (queueElems, isCurr) => {
            for (let i = 0; i < queueElems.children.length; i++) {
                const child = queueElems.children[i];
                if (!isCurr) {
                    child.addEventListener("dblclick", () => this.setSong(i));
                }
                // Click event for ...
                const threeDot = child.querySelector('.three-dot');
                if (threeDot === null) {
                    return;
                }
                threeDot.addEventListener("click", function (e) {
                    e.stopPropagation();
                    removeShowOption();
                    // @ts-ignored
                    this.nextElementSibling.classList.add('showOption');
                });
            }
        };
        this.setCurrentlyPlaying = (currentlyPlaying) => {
            const { artist, imageUrl, songName, albumName, duration, albumID, artistID } = currentlyPlaying;
            this.nowPlayingQueueElems.innerHTML = `
            <div class="queueItem" tabindex="0">
                <div class="queueId" style="color: #0eb367">
                    <span>1</span>
                    <i class="fa-solid fa-circle-play" style="font-size: 40px"></i>
                </div>
                <div class="queueMain">
                    <img src="${imageUrl}" alt="">
                    <div>
                        <div>${songName}</div>
                        <div data-artist="${artistID}">${artist}</div>
                    </div>
                </div>
                <div class="queueTitle" data-album="${albumID}">${albumName}</div>
                <div class="queueOther">
                    <span>${timeConverter(duration)}</span>
                    <i class="fa-solid fa-ellipsis three-dot"></i>
                    <ul class="option rounded">
                        <li data-artist="${artistID}">Go to Artist</li>
                        <li data-album="${albumID}">Go to Album</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </div>
        `;
            setupAlbumConnection(this.nowPlayingQueueElems);
            setupArtistConnection(this.nowPlayingQueueElems);
            this.addEventForQueue(this.nowPlayingQueueElems, true);
        };
        this.setNextQueue = (nextQueue) => {
            let nQInner = "";
            nQInner = nextQueue.reduce((concatString, currentSong, currentIndex) => {
                const { artist, imageUrl, songName, albumName, duration, albumID, artistID } = currentSong;
                concatString += `
            <div class="queueItem" tabindex="0">
                <div class="queueId">
                    <span>${currentIndex + 2}</span>
                    <i class="fa-solid fa-circle-play"></i>
                </div>
                <div class="queueMain">
                    <img src="${imageUrl}" alt="">
                    <div>
                        <div>${songName}</div>
                        <div data-artist="${artistID}">${artist}</div>
                    </div>
                </div>
                <div class="queueTitle" data-album="${albumID}">${albumName}</div>
                <div class="queueOther">
                    <span>${timeConverter(duration)}</span>
                    <i class="fa-solid fa-ellipsis three-dot"></i>
                    <ul class="option rounded">
                        <li data-artist="${artistID}">Go to Artist</li>
                        <li data-album="${albumID}">Go to Album</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </div>
            `;
                return concatString;
            }, "");
            this.nextQueueElems.innerHTML = nQInner;
            setupAlbumConnection(this.nextQueueElems);
            setupArtistConnection(this.nextQueueElems);
            this.addEventForQueue(this.nextQueueElems, false);
        };
        this.setupQueue = (currentlyPlaying, nextQueue) => {
            console.log(nextQueue);
            this.setCurrentlyPlaying(currentlyPlaying);
            this.setNextQueue(nextQueue);
        };
        const { setSong } = functionProps;
        this.setSong = setSong;
        const { mainQueueElems, nextQueueElems, nowPlayingQueueElems } = elems;
        this.mainQueueElems = mainQueueElems;
        this.nextQueueElems = nextQueueElems;
        this.nowPlayingQueueElems = nowPlayingQueueElems;
    }
}
document.getElementById('mainQueue')?.addEventListener('click', e => {
    removeShowOption();
});
export { Queue, setupAlbumConnection, setupArtistConnection, setupThreeDotConnection };
//# sourceMappingURL=Queue.js.map