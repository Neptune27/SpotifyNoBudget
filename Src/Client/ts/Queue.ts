import {IMusic} from "./IMusic";

class Queue {
    private setSong: (queueIndex: number) => void;
    private mainQueueElems: HTMLElement;
    private nextQueueElems: HTMLElement;
    private nowPlayingQueueElems: HTMLElement;

    constructor(functionProps: { setSong: (queueIndex: number) => void }, elems: { mainQueueElems: HTMLElement; nowPlayingQueueElems: HTMLElement; nextQueueElems: HTMLElement }) {
        const {setSong} = functionProps
        this.setSong = setSong

        const {mainQueueElems, nextQueueElems, nowPlayingQueueElems} = elems
        this.mainQueueElems = mainQueueElems
        this.nextQueueElems = nextQueueElems
        this.nowPlayingQueueElems = nowPlayingQueueElems
    }

    private setCurrentlyPlaying = (currentlyPlaying: IMusic) => {
        const {artist, imageUrl, songName} = currentlyPlaying

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
                        <div>${artist}</div>
                    </div>
                </div>
                <div class="queueTitle">Album Placeholder</div>
                <div class="queueOther">
                    <span>3:44</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        `
    }

    private setNextQueue = (nextQueue: IMusic[]) => {
        let nQInner = ""

        nQInner = nextQueue.reduce((concatString, currentSong, currentIndex)=>{
            const {artist, imageUrl, songName} = currentSong

            concatString += `
            <div class="queueItem" tabindex="0">
                <div class="queueId">
                    <span>${currentIndex+2}</span>
                    <i class="fa-solid fa-circle-play" style="font-size: 40px"></i>
                </div>
                <div class="queueMain">
                    <img src="${imageUrl}" alt="">
                    <div>
                        <div>${songName}</div>
                        <div>${artist}</div>
                    </div>
                </div>
                <div class="queueTitle">Akuma no ko</div>
                <div class="queueOther">
                    <span>3:44</span>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            `
            return concatString
        }, "")
        this.nextQueueElems.innerHTML = nQInner

        for (let i = 0; i < this.nextQueueElems.children.length; i++) {
            const child = this.nextQueueElems.children[i];
            child.addEventListener("dblclick", ()=>this.setSong(i))
        }
    }

    public setupQueue = (currentlyPlaying: IMusic, nextQueue: IMusic[]) => {
        this.setCurrentlyPlaying(currentlyPlaying)
        this.setNextQueue(nextQueue)
    }

}

export {Queue}