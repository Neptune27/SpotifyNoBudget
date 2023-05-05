import {timeConverter} from "./AudioPlayer.js";
// @ts-ignore
import {fetchArtistByID} from "../js/Search/search.js"
import {AudioPlayerQueueController} from "./AudioPlayerQueueController.js";
import {setupAlbumConnection, setupArtistConnection, setupThreeDotConnection} from "./Queue.js";

let currentIndex = 1

const getRecentlyAdded = async (page: number = currentIndex) => {
    const homeContainer = document.getElementById("homeContainer")
    const fetchHandle = await fetch(`/Song/RecentlyAdded/${page}/10`);
    return await fetchHandle.json();
}

const createHomePaneContent = async () => {
    const data = await getRecentlyAdded();
    const containerElem = document.getElementById("homeContainer");
    if (containerElem === null) {
        return;
    }

    const homePrevBtn = document.getElementById("homePrev")
    if (homePrevBtn === null) {
        throw new Error("Home prev btn not found")
    }

    const homePageBtn = document.getElementById("homeRAPage")
    if (homePageBtn === null) {
        throw new Error("Home prev btn not found")
    }

    const homeNextBtn = document.getElementById("homeNext")
    if (homeNextBtn === null) {
        throw new Error("Home prev btn not found")
    }

    if (data?.isPrev === false) {
        homePrevBtn.setAttribute("data-disable", "TRUE")
    }
    else {
        homePrevBtn.setAttribute("data-disable", "FALSE")
    }

    if (data?.isNext === false) {
        homeNextBtn.setAttribute("data-disable", "TRUE")
    }
    else {
        homeNextBtn.setAttribute("data-disable", "FALSE")
    }

    if (data?.currentPage) {
        homePageBtn.innerText = data.currentPage
    }



    const inner = data?.SONGS?.map(( val: { SONG_ID: any; SONG_IMG: any; SONG_NAME: any; ARTIST_ID: any; ARTIST: any; ALBUM_ID: any; ALBUM_NAME: any; DURATION: any; }, index: number)=>
        `
            <div class="queueItem" data-song="${val.SONG_ID}" tabindex="0">
                <div class="queueId">
                    <span>${index+1}</span>
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
        `).join(" ")
    // @ts-ignore
    containerElem.innerHTML = `
        ${inner}
    `;


    setupAlbumConnection(containerElem)
    setupArtistConnection(containerElem)
    setupThreeDotConnection(containerElem)


    const homeItemElems = document.querySelectorAll("div#homeContainer > div.queueItem")
    for (const homeItemElem of homeItemElems) {
        homeItemElem.addEventListener("dblclick", ()=>{
            const id = homeItemElem.getAttribute("data-song");
            if (id === null) {
                return
            }
            if (data === undefined) {
                return;
            }
            AudioPlayerQueueController.getInstance().playFromPlaylist(id, data)
        })
    }
}

const addHomePaginationEventListener = () => {
    const homePrevBtn = document.getElementById("homePrev")
    if (homePrevBtn === null) {
        throw new Error("Home prev btn not found")
    }

    const homeNextBtn = document.getElementById("homeNext")
    if (homeNextBtn === null) {
        throw new Error("Home prev btn not found")
    }


    homePrevBtn.addEventListener("click", ()=>{
        if (homePrevBtn.getAttribute("data-disable") === "TRUE") {
            return
        }
        currentIndex--
        createHomePaneContent()
    })

    homeNextBtn.addEventListener("click", ()=>{
        if (homeNextBtn.getAttribute("data-disable") === "TRUE") {
            return
        }
        currentIndex++
        createHomePaneContent()
    })


}

addHomePaginationEventListener()

export {getRecentlyAdded, createHomePaneContent}