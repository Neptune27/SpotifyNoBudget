import { timeConverter } from "./AudioPlayer.js";
import { AudioPlayerQueueController } from "./AudioPlayerQueueController.js";
import { setupAlbumConnection, setupArtistConnection, setupThreeDotConnection } from "./Queue.js";
const getRecentlyAdded = async () => {
    const homeContainer = document.getElementById("homeContainer");
    const fetchHandle = await fetch("/Song/RecentlyAdded/10");
    const data = await fetchHandle.json();
    return data;
};
const createHomePaneContent = async () => {
    const data = await getRecentlyAdded();
    const containerElem = document.getElementById("homeContainer");
    if (containerElem === null) {
        return;
    }
    const inner = data?.map((val, index) => `
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
                <div class="queueTitle" data-album="${val.ALBUM_ID}">${val.ALBUM_NAME}</div>
                <div class="queueOther">
                    <span>${timeConverter(Number(val.DURATION))}</span>
                    <i class="fa-solid fa-ellipsis three-dot"></i>
                   <ul class="option rounded">
                        <li data-artist="${val.ARTIST_ID}">Go to Artist</li>
                        <li data-album="${val.ALBUM_ID}">Go to Album</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            </div>
        `).join(" ");
    // @ts-ignore
    containerElem.innerHTML = `
        ${inner}
    `;
    setupAlbumConnection(containerElem);
    setupArtistConnection(containerElem);
    setupThreeDotConnection(containerElem);
    const homeItemElems = document.querySelectorAll("div#homeContainer > div.queueItem");
    for (const homeItemElem of homeItemElems) {
        homeItemElem.addEventListener("dblclick", () => {
            const id = homeItemElem.getAttribute("data-song");
            if (id === null) {
                return;
            }
            if (data === undefined) {
                return;
            }
            AudioPlayerQueueController.getInstance().playFromPlaylist(id, data);
        });
    }
};
export { getRecentlyAdded, createHomePaneContent };
//# sourceMappingURL=Home.js.map