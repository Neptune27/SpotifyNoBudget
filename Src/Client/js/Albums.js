import { timeConverter } from "./AudioPlayer.js";
import { AudioPlayerQueueController } from "./AudioPlayerQueueController.js";
import { setupAlbumConnection, setupArtistConnection, setupThreeDotConnection } from "./Queue.js";
const createAlbum = async (id) => {
    document.querySelector("main")?.setAttribute("data-sidebar", "Album");
    await setAlbum(id);
};
const setAlbum = async (id) => {
    const albumElem = document.querySelector("div.albumContainer");
    console.log(albumElem);
    if (albumElem === null) {
        return;
    }
    const res = await fetch(`/Album/GetAlbum/${id}`);
    const data = await res.json();
    const resAlbumCreator = await fetch(`/Album/GetAlbumCreator/${id}`);
    const dataAC = await resAlbumCreator.json();
    const innerQueue = data?.map((val, index) => `
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
                    <i class="fa-solid fa-ellipsis three-dot"></i>
                    <ul class="option rounded">
                        <li data-artist="${val.ARTIST_ID}">Go to Artist</li>
                        <li data-album="${val.ALBUM_ID}">Go to Album</li>
                        <li data-playlist="${val.SONG_ID}">Add to Playlist</li>
                    </ul>
                </div>
            </div>
        `).join(" ");
    const tmp = data[0];
    if (tmp.ALBUM_IMG === "NA") {
        tmp.ALBUM_IMG = tmp.SONG_IMG;
    }
    const innerAlbum = `
        <div style="padding: 1rem 2rem; color: white" class="d-flex flex-column gap-2">
            <div class="d-flex gap-4" style="min-height: 10rem; max-height: 10rem;">
                <div>
                    <img src="${tmp.ALBUM_IMG}" style="aspect-ratio: 1/1; height: 10rem; border-radius: 1rem" alt="albumCover">
                </div>
                <div class="d-flex flex-column" style="justify-content: space-evenly">
                    <div>Album</div>
                    <div>
                        <h2 style="font-size: 4rem">${dataAC.ALBUM_NAME}</h2>
                    </div>
                    <div class="d-flex">
                        <img src="${dataAC?.AVATAR}" style="border-radius: 100%; height: 2rem; padding-right: 1rem">
                        <a href="#" style="all: unset; cursor: pointer;font-size: 2rem" data-artist="${dataAC?.USER_ID}">${dataAC.NAME}</a>
                    </div>
                </div>
            </div>
            <div style="font-size: 3rem">
                <i class="fa-solid fa-circle-play"></i>
                <i class="fa-solid fa-plus-circle"></i>
                

            </div>
            <div class="queueContainer">
                ${innerQueue}
            </div>
        </div>
    `;
    albumElem.innerHTML = `
        ${innerAlbum}
    `;
    setupArtistConnection(albumElem);
    setupAlbumConnection(albumElem);
    setupThreeDotConnection(albumElem);
    const homeItemElems = document.querySelectorAll("[data-song]");
    for (const homeItemElem of homeItemElems) {
        homeItemElem.addEventListener("dblclick", () => {
            const id = homeItemElem.getAttribute("data-song");
            if (id === null) {
                return;
            }
            if (data === undefined) {
                return;
            }
            // @ts-ignored
            AudioPlayerQueueController.getInstance().playFromPlaylist(id, data);
        });
    }
};
export { createAlbum, setAlbum };
//# sourceMappingURL=Albums.js.map