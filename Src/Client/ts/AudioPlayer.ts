import {IMusic} from "./IMusic.js";


const timeConverter = (timestamp: number) => {
    let second = Math.floor(timestamp % 60)
    let minute = Math.floor(timestamp / 60)
    let secondFormatted = second < 10 ? `0${second}` : `${second}`
    return `${minute}:${secondFormatted}`
}

const enum ERepeat {
    NONE,
    ONE,
    ALL
}



const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}


class AudioPlayer {
    private audioElem: HTMLAudioElement;
    private startElem: HTMLElement;
    private endElem: HTMLElement;
    private lyricParentElem: HTMLElement;
    private prevLyricIntervalId: number = -1;
    private sliderUpdateIntervalId: number = -1;
    private startEndIntervalId: number = -1;
    private shuffleActive: boolean = false;
    private repeatType: ERepeat = ERepeat.NONE;

    private previousPlaylist: IMusic[] = []

    private currentlyPlaying: IMusic = {
        artist: "", lyric: [], songUrl: "", imageUrl: "", songName: ""
    }

    private queue: IMusic[] = []
    private shufflePlaylist: IMusic[] = []
    private currentPos: number = 0;
    private sliderElem: HTMLInputElement;
    private audioPlayerElem: HTMLElement;
    private playlist: IMusic[];
    private lyricImg: HTMLElement;
    private mediaControlElem: HTMLElement;
    private audioPlayerBarElem: HTMLElement;
    private coverImgElem: HTMLElement;
    private titleElem: HTMLElement;
    private artistElem: HTMLElement;
    private volumeQueueAreaElem: HTMLElement;
    private audioSliderElem: HTMLInputElement;
    private updateQueue: (currentlyPlaying: IMusic, nextQueue: IMusic[]) => void;


    constructor(playlist: IMusic[], props: { updateQueue: (currentlyPlaying: IMusic, nextQueue: IMusic[]) => void },
                elems: { endElem: HTMLElement; audioSliderElem: HTMLInputElement; audioPlayerElem: HTMLElement; mediaControlElem: HTMLElement; lyricImg: HTMLElement; titleElem: HTMLElement; volumeQueueAreaElem: HTMLElement; artistElem: HTMLElement; coverImgElem: HTMLElement; audioElem: HTMLAudioElement; audioPlayerBarElem: HTMLElement; sliderElem: HTMLInputElement; lyricParentElem: HTMLElement; startElem: HTMLElement }) {


        const {updateQueue} = props

        this.updateQueue = updateQueue

        const {
            audioElem,
            startElem,
            endElem,
            lyricParentElem,
            sliderElem,
            audioPlayerElem,
            lyricImg,
            mediaControlElem,
            audioPlayerBarElem,
            coverImgElem,
            titleElem,
            artistElem,
            volumeQueueAreaElem,
            audioSliderElem
        }
            = elems

        this.playlist = playlist
        this.audioElem = audioElem
        this.startElem = startElem
        this.endElem = endElem
        this.lyricParentElem = lyricParentElem
        this.sliderElem = sliderElem
        this.audioPlayerElem = audioPlayerElem
        this.audioPlayerBarElem = audioPlayerBarElem
        this.lyricImg = lyricImg;
        this.mediaControlElem = mediaControlElem
        this.coverImgElem = coverImgElem
        this.titleElem = titleElem
        this.artistElem = artistElem
        this.volumeQueueAreaElem = volumeQueueAreaElem
        this.audioSliderElem = audioSliderElem

        this.updateSliderInterval()

        this.setupButtonAndEvent()
        this.setupQueue(playlist)
        this.forwardAudio()
        this.updateStartEnd()
    }

    setupButtonAndEvent = () => {
        const mCEChildren = this.mediaControlElem.children
        for (const mCEChildElement of mCEChildren) {
            switch (mCEChildElement.id) {
                case "repeat":
                    mCEChildElement.addEventListener("click", this.repeat)
                    break
                case "backward":
                    mCEChildElement.addEventListener("click", this.backwardAudio)
                    break
                case "forward":
                    mCEChildElement.addEventListener("click", this.forwardAudio)
                    break;
                case "pause":
                    mCEChildElement.addEventListener("click", this.pauseAudio)
                    break;
                case "play":
                    mCEChildElement.addEventListener("click", this.playAudioEvent)
                    break;
                case "shuffle":
                    mCEChildElement.addEventListener("click", this.shuffle)
                    break;
            }
        }

        for (const childElem of this.volumeQueueAreaElem.children) {
            console.log(childElem.id)
            switch (childElem.id) {
                case "lyricBtn":
                    childElem.addEventListener("click", () => this.setActivePane("LYRIC"))
                    break;
                case "paneBtn":
                    childElem.addEventListener("click", () => this.setActivePane("QUEUE"))
                    break;
            }
        }

        this.audioSliderElem.addEventListener("input", this.volumeInputSliderHandler)

        this.audioPlayerBarElem.addEventListener("keyup", this.musicSliderKeyUpHandler)
        this.sliderElem.addEventListener("input", this.musicInputSliderHandler)
        this.sliderElem.addEventListener("mouseup", this.musicSliderMouseUpHandler)
        this.audioElem.addEventListener("ended", this.forwardAudio)


    }

    private setActivePane = (option: "LYRIC" | "QUEUE") => {
        const mainElem = document.querySelector("main")
        if (mainElem === null) {
            return
        }
        const currentlyActive = mainElem.getAttribute("data-pane")

        if (currentlyActive === option) {
            mainElem.setAttribute("data-pane", "NONE")

        } else {
            mainElem.setAttribute("data-pane", option)
        }
    }

    updateStartEnd = () => {
        clearInterval(this.startEndIntervalId)
        this.startEndIntervalId = setInterval(() => {
            this.startElem.innerHTML = timeConverter(this.audioElem.currentTime)
            this.endElem.innerHTML = timeConverter(this.audioElem.duration)
        }, 250)
    }

    updateLyrics = (lyrics: (string | number)[][]) => {
        clearInterval(this.prevLyricIntervalId)
        let mainInnerHTML = ""
        for (const lyricIndex in lyrics) {
            mainInnerHTML += `
            <div data-timestamp="${lyrics[lyricIndex][0]}">${lyrics[lyricIndex][1]}</div>
            `
        }
        this.lyricParentElem.innerHTML = lyrics.reduce(
            (acc, lyric) => acc += `<div data-timestamp="${lyric[0]}">${lyric[1]}</div>`, "")

        const elems = document.querySelectorAll("#lyricMain>div")

        for (const lyricElem of elems) {

            lyricElem.addEventListener("click", () => {
                const attr = lyricElem.getAttribute("data-timestamp")
                if (attr === null) {
                    return
                }
                this.updateMusic(parseInt(attr))
            });
        }

        const reset = (timestamp: number) => {
            let currentIndex = lyrics.findIndex((val) => (val[0] as number) > timestamp) - 1
            if (currentIndex === -2) {
                if ((lyrics[lyrics.length - 1][0] as number) < timestamp) {
                    currentIndex = lyrics.length - 1
                }
            }
            for (let i = 0; i < currentIndex; i++) {
                elems[i].setAttribute("data-state", "ACTIVATED")
            }

            elems[currentIndex].setAttribute("data-state", "ACTIVE")

            for (let i = elems.length - 1; i > currentIndex; i--) {
                elems[i].setAttribute("data-state", "INACTIVE")
            }
        }

        const update = (timestamp: number) => {
            // Find the first index where time > timestamp, then minus it!
            let currentIndex = lyrics.findIndex((val) => (val[0] as number) > timestamp) - 1
            if (currentIndex === -2) {
                if ((lyrics[lyrics.length - 1][0] as number) < timestamp) {
                    currentIndex = lyrics.length - 1
                }
            }
            if (currentIndex < 0) {
                return
            }

            // console.log(`Current Index: ${currentIndex}`)

            const elemAttr = elems[currentIndex].getAttribute("data-state")
            if (elemAttr === "ACTIVATED") {
                reset(timestamp)
                return;
            }

            if (elemAttr === "ACTIVE") {
                return;
            }


            elems[currentIndex].setAttribute("data-state", "ACTIVE")
            elems[currentIndex].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            if (currentIndex !== 0) {
                const prevElemAttr = elems[currentIndex - 1].getAttribute("data-state")
                if (prevElemAttr === null || prevElemAttr === "INACTIVE") {
                    reset(timestamp)
                    return;
                }
                elems[currentIndex - 1].setAttribute("data-state", "ACTIVATED")
            }
        }

        this.prevLyricIntervalId = setInterval(() => {
            update(this.audioElem.currentTime)
        }, 250);
    }

    updateSliderColor = () => {
        const duration = this.audioElem.duration
        const percentage = parseInt(this.sliderElem.value) / duration * 100
        this.sliderElem.setAttribute("style", `--pos: ${percentage}%`)
    }

    updateSlider = () => {
        this.sliderElem.value = String(this.audioElem.currentTime)
        this.updateSliderColor()
    }

    updateSliderInterval = () => {
        this.sliderUpdateIntervalId = setInterval(() => {
            this.updateSlider()
        }, 750)
    }

    volumeInputSliderHandler = () => {
        this.volumeQueueAreaElem.setAttribute("style", `--audioPos: ${this.audioSliderElem.value}%`)
        this.audioElem.volume = parseInt(this.audioSliderElem.value) / 100
        if (this.audioElem.volume === 0) {
            this.volumeQueueAreaElem.setAttribute("data-muted", "TRUE")
        } else {
            this.volumeQueueAreaElem.setAttribute("data-muted", "FALSE")
        }
    }


    musicInputSliderHandler = (event: Event) => {
        clearInterval(this.sliderUpdateIntervalId)
        clearInterval(this.startEndIntervalId)
        this.updateSliderColor()
        this.startElem.innerHTML = timeConverter(parseInt(this.sliderElem.value))
    }

    musicSliderMouseUpHandler = async () => {
        await this.updateMusic(Number(this.sliderElem.value))
        this.updateStartEnd()

    }

    updateMusic = async (timestamp: number) => {
        clearInterval(this.sliderUpdateIntervalId)

        this.audioElem.currentTime = timestamp;
        this.audioElem.pause()
        await this.audioElem.play()
        document.getElementById("mediaControl")?.setAttribute("data-played", "TRUE")

        this.updateSliderInterval()
    }

    shuffle = () => {
        this.shuffleActive = !this.shuffleActive;
        if (this.shuffleActive) {
            this.mediaControlElem.setAttribute("data-shuffle", "TRUE")
            this.shufflePlaylist = [...this.playlist]
            shuffle(this.shufflePlaylist)
            this.queue = this.shufflePlaylist.filter((e)=>e!==this.currentlyPlaying)
        } else {
            this.mediaControlElem.setAttribute("data-shuffle", "FALSE")
            const currentIndex = this.playlist.findIndex((song) => song === this.currentlyPlaying)
            this.queue = this.playlist.slice(currentIndex+1)
        }
        console.log(this.queue)
        this.queueHandler()
    }

    private queueHandler = () => {

        switch (this.repeatType) {
            case ERepeat.NONE:
                this.mediaControlElem.setAttribute("data-repeat", "NONE")
                break;
            case ERepeat.ONE:
                this.mediaControlElem.setAttribute("data-repeat", "ONE")
                this.queue.unshift(this.currentlyPlaying)
                break;
            case ERepeat.ALL:
                this.mediaControlElem.setAttribute("data-repeat", "ALL")


                const queueToWorkOn = this.shuffleActive ? this.shufflePlaylist : this.playlist
                const currentIndex = queueToWorkOn.findIndex((e) => this.currentlyPlaying === e);

                const endIndex = queueToWorkOn.findIndex((e) => this.queue[this.queue.length - 1] === e)

                let afterItem = queueToWorkOn.slice(endIndex + 1)
                afterItem = afterItem.filter((song) => !this.queue.includes(song) && song !== this.currentlyPlaying)
                this.queue.splice(this.queue.length, 0, ...afterItem)

                let beforeItem = queueToWorkOn.slice(0, currentIndex)
                beforeItem = beforeItem.filter((song) => !this.queue.includes(song) && song !== this.currentlyPlaying)
                this.queue.splice(this.queue.length, 0, ...beforeItem)
                break;
        }

        this.updateQueue(this.currentlyPlaying, this.queue)
    }

    repeat = () => {
        switch (this.repeatType) {
            case ERepeat.ONE:
                this.queue.shift()
                break
        }
        this.repeatType = (this.repeatType + 1) % 3
        this.queueHandler()
    }

    pauseAudio = () => {
        this.mediaControlElem.setAttribute("data-played", "FALSE")
        this.audioElem.pause()
    }

    playAudioEvent = (event: Event) => {
        this.audioElem.play()
        this.mediaControlElem.setAttribute("data-played", "TRUE")
    }

    setupAudioImg = (imgUrl: string) => {
        let t = document.getElementById("transitionImg")
        if (t === null) {
            return
        }
        t.innerHTML = `
            <img src="${imgUrl}" alt="Background Cover" class="lyricImg">
        `

        setTimeout(() => {
            if (t !== null) {
                this.lyricImg.innerHTML = t.innerHTML
            }
        }, 500)
    }

    setupAudio = (music: IMusic) => {
        let {imageUrl, songUrl, lyric, songName, artist} = music;


        if (lyric.length === 0) {
            lyric = [[0, "No"]]
        }
        const volume = this.audioElem.volume
        this.audioElem.remove()
        // @ts-ignore
        this.audioElem.innerHTML = `
                <source src="${songUrl}" type="audio/mp3">
            `
        // let newAudioElem = document.getElementById("audioFile") as HTMLAudioElement
        // if (newAudioElem !== null) {
        //     this.audioElem = newAudioElem
        //     this.audioElem.volume = volume
        //     this.audioElem.addEventListener("ended", this.forwardAudio)
        // }

        this.setupAudioImg(imageUrl)
        this.coverImgElem.setAttribute("src", imageUrl)
        this.titleElem.innerHTML = songName
        this.artistElem.innerHTML = artist


        this.audioElem.load()
        this.updateLyrics(lyric)
        this.updateSliderDuration()
    }

    private updateSliderDuration = () => {
        let id = setInterval(() => {
            if (!isNaN(this.audioElem.duration)) {
                this.sliderElem.max = String(this.audioElem.duration)
                this.updateSlider()
                clearInterval(id)
            }
        }, 100)
    }

    private setupQueue = (playlist: IMusic[]) => {
        this.queue = [...playlist]
    }

    private playAudio = () => {
        if (this.mediaControlElem.getAttribute("data-played") === "TRUE") {
            this.audioElem.play()
        }
    }

    private backwardAudio = () => {
        const repeatType = this.mediaControlElem.getAttribute("data-repeat")
        console.log(repeatType)
        if (this.audioElem.currentTime < 10) {
            if (repeatType === "ONE") {
                this.audioElem.currentTime = 0
            } else {
                const prev = this.previousPlaylist.pop()
                if (prev === undefined) {
                    this.audioElem.currentTime = 0
                } else {
                    this.queue.splice(0, 0, this.currentlyPlaying);
                    this.currentlyPlaying = prev
                    this.setupAudio(this.currentlyPlaying)
                }
            }
        }
        this.audioElem.currentTime = 0
        this.playAudio()
        this.queueHandler()
    }

    private forwardAudio = () => {
        const isAtEnd = this.queue.length === 0
        const repeatType = this.mediaControlElem.getAttribute("data-repeat")

        if (isAtEnd && (repeatType === null || repeatType === "NONE")) {
            this.pauseAudio()
            this.audioElem.currentTime = this.audioElem.duration
            return;
        }
        if (this.currentlyPlaying.songName !== "")
            this.previousPlaylist.push(this.currentlyPlaying)

        const current = this.queue.shift()

        // This should not be happened
        if (current === undefined) {
            alert("Sth wrong")
            return;
        }


        this.currentlyPlaying = current
        console.log(this.queue)

        if (repeatType === "ALL") {
            this.queue.push(current);
        }

        this.queueHandler()

        this.setupAudio(this.currentlyPlaying)
        this.playAudio()

    }

    private musicSliderKeyUpHandler = (e: KeyboardEvent) => {
        const duration = 10
        if (e.key === "ArrowRight") {
            if (this.audioElem.currentTime < this.audioElem.duration - duration) {
                this.audioElem.currentTime += duration
            } else {
                this.forwardAudio()
            }
        } else if (e.key === "ArrowLeft") {
            if (this.audioElem.currentTime > duration) {
                this.audioElem.currentTime -= duration
            } else {
                this.audioElem.currentTime = 0
            }
        }
    }

    public skipForwardTo = (indexToForwardTo: number) => {
        this.queue.splice(0, indexToForwardTo)
        this.forwardAudio()
    }
}

export {AudioPlayer}