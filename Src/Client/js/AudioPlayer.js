const timeConverter = (timestamp) => {
    let second = Math.floor(timestamp % 60);
    let minute = Math.floor(timestamp / 60);
    let secondFormatted = second < 10 ? `0${second}` : `${second}`;
    return `${minute}:${secondFormatted}`;
};
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
};
class AudioPlayer {
    constructor(playlist, props, elems) {
        this.prevLyricIntervalId = -1;
        this.sliderUpdateIntervalId = -1;
        this.startEndIntervalId = -1;
        this.shuffleActive = false;
        this.repeatType = 0 /* ERepeat.NONE */;
        this.previousPlaylist = [];
        this.currentlyPlaying = {
            artist: "", lyric: [], songUrl: "", imageUrl: "", songName: ""
        };
        this.queue = [];
        this.shufflePlaylist = [];
        this.currentPos = 0;
        this.setupButtonAndEvent = () => {
            const mCEChildren = this.mediaControlElem.children;
            for (const mCEChildElement of mCEChildren) {
                switch (mCEChildElement.id) {
                    case "repeat":
                        mCEChildElement.addEventListener("click", this.repeat);
                        break;
                    case "backward":
                        mCEChildElement.addEventListener("click", this.backwardAudio);
                        break;
                    case "forward":
                        mCEChildElement.addEventListener("click", this.forwardAudio);
                        break;
                    case "pause":
                        mCEChildElement.addEventListener("click", this.pauseAudio);
                        break;
                    case "play":
                        mCEChildElement.addEventListener("click", this.playAudioEvent);
                        break;
                    case "shuffle":
                        mCEChildElement.addEventListener("click", this.shuffle);
                        break;
                }
            }
            for (const childElem of this.volumeQueueAreaElem.children) {
                console.log(childElem.id);
                switch (childElem.id) {
                    case "lyricBtn":
                        childElem.addEventListener("click", () => this.setActivePane("LYRIC"));
                        break;
                    case "paneBtn":
                        childElem.addEventListener("click", () => this.setActivePane("QUEUE"));
                        break;
                }
            }
            this.audioSliderElem.addEventListener("input", this.volumeInputSliderHandler);
            this.audioPlayerBarElem.addEventListener("keyup", this.musicSliderKeyUpHandler);
            this.sliderElem.addEventListener("input", this.musicInputSliderHandler);
            this.sliderElem.addEventListener("mouseup", this.musicSliderMouseUpHandler);
            this.audioElem.addEventListener("ended", this.forwardAudio);
        };
        this.setActivePane = (option) => {
            const mainElem = document.querySelector("main");
            if (mainElem === null) {
                return;
            }
            const currentlyActive = mainElem.getAttribute("data-pane");
            if (currentlyActive === option) {
                mainElem.setAttribute("data-pane", "NONE");
            }
            else {
                mainElem.setAttribute("data-pane", option);
            }
        };
        this.updateStartEnd = () => {
            clearInterval(this.startEndIntervalId);
            this.startEndIntervalId = setInterval(() => {
                this.startElem.innerHTML = timeConverter(this.audioElem.currentTime);
                this.endElem.innerHTML = timeConverter(this.audioElem.duration);
            }, 250);
        };
        this.updateLyrics = (lyrics) => {
            clearInterval(this.prevLyricIntervalId);
            let mainInnerHTML = "";
            for (const lyricIndex in lyrics) {
                mainInnerHTML += `
            <div data-timestamp="${lyrics[lyricIndex][0]}">${lyrics[lyricIndex][1]}</div>
            `;
            }
            this.lyricParentElem.innerHTML = lyrics.reduce((acc, lyric) => acc += `<div data-timestamp="${lyric[0]}">${lyric[1]}</div>`, "");
            const elems = document.querySelectorAll("#lyricMain>div");
            for (const lyricElem of elems) {
                lyricElem.addEventListener("click", () => {
                    const attr = lyricElem.getAttribute("data-timestamp");
                    if (attr === null) {
                        return;
                    }
                    this.updateMusic(parseInt(attr));
                });
            }
            const reset = (timestamp) => {
                let currentIndex = lyrics.findIndex((val) => val[0] > timestamp) - 1;
                if (currentIndex === -2) {
                    if (lyrics[lyrics.length - 1][0] < timestamp) {
                        currentIndex = lyrics.length - 1;
                    }
                }
                for (let i = 0; i < currentIndex; i++) {
                    elems[i].setAttribute("data-state", "ACTIVATED");
                }
                elems[currentIndex].setAttribute("data-state", "ACTIVE");
                for (let i = elems.length - 1; i > currentIndex; i--) {
                    elems[i].setAttribute("data-state", "INACTIVE");
                }
            };
            const update = (timestamp) => {
                // Find the first index where time > timestamp, then minus it!
                let currentIndex = lyrics.findIndex((val) => val[0] > timestamp) - 1;
                if (currentIndex === -2) {
                    if (lyrics[lyrics.length - 1][0] < timestamp) {
                        currentIndex = lyrics.length - 1;
                    }
                }
                if (currentIndex < 0) {
                    return;
                }
                // console.log(`Current Index: ${currentIndex}`)
                const elemAttr = elems[currentIndex].getAttribute("data-state");
                if (elemAttr === "ACTIVATED") {
                    reset(timestamp);
                    return;
                }
                if (elemAttr === "ACTIVE") {
                    return;
                }
                elems[currentIndex].setAttribute("data-state", "ACTIVE");
                elems[currentIndex].scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                if (currentIndex !== 0) {
                    const prevElemAttr = elems[currentIndex - 1].getAttribute("data-state");
                    if (prevElemAttr === null || prevElemAttr === "INACTIVE") {
                        reset(timestamp);
                        return;
                    }
                    elems[currentIndex - 1].setAttribute("data-state", "ACTIVATED");
                }
            };
            this.prevLyricIntervalId = setInterval(() => {
                update(this.audioElem.currentTime);
            }, 250);
        };
        this.updateSliderColor = () => {
            const duration = this.audioElem.duration;
            const percentage = parseInt(this.sliderElem.value) / duration * 100;
            this.sliderElem.setAttribute("style", `--pos: ${percentage}%`);
        };
        this.updateSlider = () => {
            this.sliderElem.value = String(this.audioElem.currentTime);
            this.updateSliderColor();
        };
        this.updateSliderInterval = () => {
            this.sliderUpdateIntervalId = setInterval(() => {
                this.updateSlider();
            }, 750);
        };
        this.volumeInputSliderHandler = () => {
            this.volumeQueueAreaElem.setAttribute("style", `--audioPos: ${this.audioSliderElem.value}%`);
            this.audioElem.volume = parseInt(this.audioSliderElem.value) / 100;
            if (this.audioElem.volume === 0) {
                this.volumeQueueAreaElem.setAttribute("data-muted", "TRUE");
            }
            else {
                this.volumeQueueAreaElem.setAttribute("data-muted", "FALSE");
            }
        };
        this.musicInputSliderHandler = (event) => {
            clearInterval(this.sliderUpdateIntervalId);
            clearInterval(this.startEndIntervalId);
            this.updateSliderColor();
            this.startElem.innerHTML = timeConverter(parseInt(this.sliderElem.value));
        };
        this.musicSliderMouseUpHandler = async () => {
            await this.updateMusic(Number(this.sliderElem.value));
            this.updateStartEnd();
        };
        this.updateMusic = async (timestamp) => {
            clearInterval(this.sliderUpdateIntervalId);
            this.audioElem.currentTime = timestamp;
            this.audioElem.pause();
            await this.audioElem.play();
            document.getElementById("mediaControl")?.setAttribute("data-played", "TRUE");
            this.updateSliderInterval();
        };
        this.shuffle = () => {
            this.shuffleActive = !this.shuffleActive;
            if (this.shuffleActive) {
                this.mediaControlElem.setAttribute("data-shuffle", "TRUE");
                this.shufflePlaylist = [...this.playlist];
                shuffle(this.shufflePlaylist);
                this.queue = this.shufflePlaylist.filter((e) => e !== this.currentlyPlaying);
            }
            else {
                this.mediaControlElem.setAttribute("data-shuffle", "FALSE");
                const currentIndex = this.playlist.findIndex((song) => song === this.currentlyPlaying);
                this.queue = this.playlist.slice(currentIndex + 1);
            }
            console.log(this.queue);
            this.queueHandler();
        };
        this.queueHandler = () => {
            switch (this.repeatType) {
                case 0 /* ERepeat.NONE */:
                    this.mediaControlElem.setAttribute("data-repeat", "NONE");
                    break;
                case 1 /* ERepeat.ONE */:
                    this.mediaControlElem.setAttribute("data-repeat", "ONE");
                    this.queue.unshift(this.currentlyPlaying);
                    break;
                case 2 /* ERepeat.ALL */:
                    this.mediaControlElem.setAttribute("data-repeat", "ALL");
                    const queueToWorkOn = this.shuffleActive ? this.shufflePlaylist : this.playlist;
                    const currentIndex = queueToWorkOn.findIndex((e) => this.currentlyPlaying === e);
                    const endIndex = queueToWorkOn.findIndex((e) => this.queue[this.queue.length - 1] === e);
                    let afterItem = queueToWorkOn.slice(endIndex + 1);
                    afterItem = afterItem.filter((song) => !this.queue.includes(song) && song !== this.currentlyPlaying);
                    this.queue.splice(this.queue.length, 0, ...afterItem);
                    let beforeItem = queueToWorkOn.slice(0, currentIndex);
                    beforeItem = beforeItem.filter((song) => !this.queue.includes(song) && song !== this.currentlyPlaying);
                    this.queue.splice(this.queue.length, 0, ...beforeItem);
                    break;
            }
            this.updateQueue(this.currentlyPlaying, this.queue);
        };
        this.repeat = () => {
            switch (this.repeatType) {
                case 1 /* ERepeat.ONE */:
                    this.queue.shift();
                    break;
            }
            this.repeatType = (this.repeatType + 1) % 3;
            this.queueHandler();
        };
        this.pauseAudio = () => {
            this.mediaControlElem.setAttribute("data-played", "FALSE");
            this.audioElem.pause();
        };
        this.playAudioEvent = (event) => {
            this.audioElem.play();
            this.mediaControlElem.setAttribute("data-played", "TRUE");
        };
        this.setupAudioImg = (imgUrl) => {
            let t = document.getElementById("transitionImg");
            if (t === null) {
                return;
            }
            t.innerHTML = `
            <img src="${imgUrl}" alt="Background Cover" class="lyricImg">
        `;
            setTimeout(() => {
                if (t !== null) {
                    this.lyricImg.innerHTML = t.innerHTML;
                }
            }, 500);
        };
        this.setupAudio = (music) => {
            let { imageUrl, songUrl, lyric, songName, artist } = music;
            if (lyric.length === 0) {
                lyric = [[0, "No"]];
            }
            const volume = this.audioElem.volume;
            this.audioElem.remove();
            // @ts-ignore
            this.audioElem.innerHTML = `
                <source src="${songUrl}" type="audio/mp3">
            `;
            // let newAudioElem = document.getElementById("audioFile") as HTMLAudioElement
            // if (newAudioElem !== null) {
            //     this.audioElem = newAudioElem
            //     this.audioElem.volume = volume
            //     this.audioElem.addEventListener("ended", this.forwardAudio)
            // }
            this.setupAudioImg(imageUrl);
            this.coverImgElem.setAttribute("src", imageUrl);
            this.titleElem.innerHTML = songName;
            this.artistElem.innerHTML = artist;
            this.audioElem.load();
            this.updateLyrics(lyric);
            this.updateSliderDuration();
        };
        this.updateSliderDuration = () => {
            let id = setInterval(() => {
                if (!isNaN(this.audioElem.duration)) {
                    this.sliderElem.max = String(this.audioElem.duration);
                    this.updateSlider();
                    clearInterval(id);
                }
            }, 100);
        };
        this.setupQueue = (playlist) => {
            this.queue = [...playlist];
        };
        this.playAudio = () => {
            if (this.mediaControlElem.getAttribute("data-played") === "TRUE") {
                this.audioElem.play();
            }
        };
        this.backwardAudio = () => {
            const repeatType = this.mediaControlElem.getAttribute("data-repeat");
            console.log(repeatType);
            if (this.audioElem.currentTime < 10) {
                if (repeatType === "ONE") {
                    this.audioElem.currentTime = 0;
                }
                else {
                    const prev = this.previousPlaylist.pop();
                    if (prev === undefined) {
                        this.audioElem.currentTime = 0;
                    }
                    else {
                        this.queue.splice(0, 0, this.currentlyPlaying);
                        this.currentlyPlaying = prev;
                        this.setupAudio(this.currentlyPlaying);
                    }
                }
            }
            this.audioElem.currentTime = 0;
            this.playAudio();
            this.queueHandler();
        };
        this.forwardAudio = () => {
            const isAtEnd = this.queue.length === 0;
            const repeatType = this.mediaControlElem.getAttribute("data-repeat");
            if (isAtEnd && (repeatType === null || repeatType === "NONE")) {
                this.pauseAudio();
                this.audioElem.currentTime = this.audioElem.duration;
                return;
            }
            if (this.currentlyPlaying.songName !== "")
                this.previousPlaylist.push(this.currentlyPlaying);
            const current = this.queue.shift();
            // This should not be happened
            if (current === undefined) {
                alert("Sth wrong");
                return;
            }
            this.currentlyPlaying = current;
            console.log(this.queue);
            if (repeatType === "ALL") {
                this.queue.push(current);
            }
            this.queueHandler();
            this.setupAudio(this.currentlyPlaying);
            this.playAudio();
        };
        this.musicSliderKeyUpHandler = (e) => {
            const duration = 10;
            if (e.key === "ArrowRight") {
                if (this.audioElem.currentTime < this.audioElem.duration - duration) {
                    this.audioElem.currentTime += duration;
                }
                else {
                    this.forwardAudio();
                }
            }
            else if (e.key === "ArrowLeft") {
                if (this.audioElem.currentTime > duration) {
                    this.audioElem.currentTime -= duration;
                }
                else {
                    this.audioElem.currentTime = 0;
                }
            }
        };
        this.skipForwardTo = (indexToForwardTo) => {
            this.queue.splice(0, indexToForwardTo);
            this.forwardAudio();
        };
        const { updateQueue } = props;
        this.updateQueue = updateQueue;
        const { audioElem, startElem, endElem, lyricParentElem, sliderElem, audioPlayerElem, lyricImg, mediaControlElem, audioPlayerBarElem, coverImgElem, titleElem, artistElem, volumeQueueAreaElem, audioSliderElem } = elems;
        this.playlist = playlist;
        this.audioElem = audioElem;
        this.startElem = startElem;
        this.endElem = endElem;
        this.lyricParentElem = lyricParentElem;
        this.sliderElem = sliderElem;
        this.audioPlayerElem = audioPlayerElem;
        this.audioPlayerBarElem = audioPlayerBarElem;
        this.lyricImg = lyricImg;
        this.mediaControlElem = mediaControlElem;
        this.coverImgElem = coverImgElem;
        this.titleElem = titleElem;
        this.artistElem = artistElem;
        this.volumeQueueAreaElem = volumeQueueAreaElem;
        this.audioSliderElem = audioSliderElem;
        this.updateSliderInterval();
        this.setupButtonAndEvent();
        this.setupQueue(playlist);
        this.forwardAudio();
        this.updateStartEnd();
    }
}
export { AudioPlayer };
//# sourceMappingURL=AudioPlayer.js.map