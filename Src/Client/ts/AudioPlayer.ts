import {IMusic} from "./IMusic.js";

let lyrics = [
    [1, `鉄の弾が 正義の証明`],
    [4, "貫けば 英雄に近づいた"],
    [6, "その目を閉じて 触れてみれば"],
    [9, "同じ形 同じ体温の悪魔"],
    [15, "僕はダメで あいつはいいの？"],
    [17, "そこに壁があっただけなのに"],
    [19, "生まれてしまった 運命嘆くな"],
    [22, "僕らはみんな 自由なんだから"],
    [26, "鳥のように 羽があれば"],
    [31, "どこへだって行けるけど"],
    [37, "帰る場所が なければ"],
    [41, "きっとどこへも行けない"],
    [46, "ただただ生きるのは嫌だ"],
    [52, "世界は残酷だ それでも君を愛すよ"],
    [62, "なにを犠牲にしても それでも君を守るよ"],
    [72, "間違いだとしても 疑ったりしない"],
    [78, "正しさとは 自分のこと 強く信じることだ"],
    [93, "鉄の雨が 降り散る情景"],
    [96, "テレビの中 映画に見えたんだ"],
    [98, "戦争なんて 愚かな凶暴"],
    [102, "関係ない 知らない国の話"],
    [104, "それならなんで あいつ憎んで"],
    [106, "黒い気持ち 隠しきれない理由"],
    [109, "説明だって できやしないんだ"],
    [111, "僕らはなんて 矛盾ばっかなんだ"],
    [137, "この言葉も 訳されれば"],
    [143, "本当の意味は伝わらない"],
    [148, "信じるのは その目を開いて"],
    [153, "触れた世界だけ"],
    [157, "ただただ生きるのは嫌だ"],
    [166, "世界は残酷だ それでも君を愛すよ"],
    [176, "なにを犠牲にしても それでも君を守るよ"],
    [186, "選んだ人の影 捨てたものの屍"],
    [191, "気づいたんだ 自分の中 育つのは悪魔の子"],
    [197, "正義の裏 犠牲の中 心には悪魔の子"],
]
const testMusics: IMusic[] = [{
    artist: "A",
    imageUrl: "/Src/Client/img/Album/AkumaNoKo.jpg",
    songUrl: "/Src/Client/mp3/AkumaNoKo.mp3",
    lyric: lyrics,
    songName: "Akuma No Ko"
}, {
    artist: "Yoasobi",
    songName: "Romance",
    imageUrl: "/Src/Client/img/Album/Romance.jpg",
    songUrl: "/Src/Client/mp3/Romance.mp3",
    lyric: [
        [3, "Happening so suddenly, there it was"],
        [5, "An incident that caught me off guard"],
        [7, "What started out with the note sent to me"],
        [11, "Though out of reach, back in distant generations, came from you to me"],
        [15, "So hard to conceive this type of meeting"],
        [18, "Now you can find in my era, convenient new items"],
        [22, "Here's the way we live, unknown to you"],
        [26, "Pouring in characters while interchanging these feelings"],
        [30, "Unaware, a blossom of romance grew"],
        [33, "In no way can we ever meet up in real life"],
        [36, "You and I, evolve away in domains apart"],
        [40, "Sewing up rows and lines, stacks of hues of feelings"],
        [43, "Profile not even known, indefinite for now"],
        [48, "Don't mind conditions, expecting all of your words"],
        [51, "Waiting goes on, I can't stand that, it is true our times differ"],
        [55, "But we go far beyond all limitations on our way"],
        [59, "Me and you, me and you, are sending out our feelings"],
        [63, "If my wish is coming true, I vow, one glance is all I need"],
        [66, "I want to meet you now, I love you, that's why"],
        [82, "Unforeseen thought, I was reminded of what's in your time"],
        [87, "In history recorded to befall"],
        [90, "Occurs tomorrow, cause of all tears to fall"],
        [93, "To let you know it now"],
        [96, "Somehow I'm in need of a miracle"],
        [100, "So time went on as it flowed, passing through all seasons"],
        [103, "All your letters no longer reaching me"],
        [106, "Those words that can't come to me, but only hurt inside"],
        [110, "Pressure onto my chest ensues"],
        [116, "What is found down the line, from a hundred years ago"],
        [120, "See it with my own two eyes, as you hoped imagining the future"],
        [124, "Road that I'm not taking and still walking on"],
        [127, "The sore feeling, still holding on, I keep it locked inside my heart"],
        [130, "So at last, holding it, your letter that came to me"],
        [135, "Recognizing, I'm reminded of those long-awaited conveying's"],
        [138, "That I have in my hand, for you went beyond that day"],
        [142, "Thoughts you printed designed the last note of your love to me"],
        [145, "You lived in your era, it's sure, the evidence of it all"],
        [149, "Crossing all generations, grasping it in my hands"],
        [153, "I gather all truth I can see, it's written onto this epoch"],
        [157, "In time, I'll walk that way to let you know"]
    ]
}, {
    artist: "Bo Burnham",
    songName: "Welcome to the Internet",
    imageUrl: "/Src/Client/img/Album/WCTTI.png",
    songUrl: "/Src/Client/mp3/Welcome to the Internet.mp3",
    lyric: [
        [1, "Welcome to the internet"],
        [3, "Have a look around"],
        [5, "Anything that brain of yours can think of can be found"],
        [8, "We've got mountains of content"],
        [10, "Some better, some worse"],
        [13, "If none of it's of interest to you, you'd be the first"],
        [16, "Welcome to the internet"],
        [18, "Come and take a seat"],
        [20, "Would you like to see the news or any famous women's feet?"],
        [24, "There's no need to panic"],
        [26, "This isn't a test, haha"],
        [28, "Just nod or shake your head and we'll do the rest"],
        [32, "Welcome to the internet"],
        [33, "What would you prefer?"],
        [35, "Would you like to fight for civil rights or tweet a racial slur?"],
        [39, "Be happy"],
        [40, "Be horny"],
        [41, "Be bursting with rage"],
        [44, "We got a million different ways to engage"],
        [47, "Welcome to the internet"],
        [49, "Put your cares aside"],
        [50, "Here's a tip for straining pasta"],
        [52, "Here's a nine-year-old who died"],
        [54.5, "We got movies, and doctors, and fantasy sports"],
        [58, "And a bunch of colored pencil drawings"],
        [60, "Of all the different characters in Harry Potter fucking each other"],
        [62, "Welcome to the internet"],
        [64, "Hold on to your socks"],
        [65, "'Cause a random guy just kindly sent you photos of his cock"],
        [68, "They are grainy and off-putting"],
        [69.5, "He just sent you more"],
        [72, "Don't act surprised, you know you like it, you whore"],
        [74, "See a man beheaded"],
        [75, "Get offended, see a shrink"],
        [77, "Show us pictures of your children"],
        [79, "Tell us every thought you think"],
        [80, "Start a rumor, buy a broom"],
        [81, "Or send a death threat to a boomer"],
        [83, "Or DM a girl and groom her"],
        [84, "Do a Zoom or find a tumor in your"],
        [86, "Here's a healthy breakfast option"],
        [88, "You should kill your mom"],
        [89, "Here's why women never fuck you"],
        [90, "Here's how you can build a bomb"],
        [92, "Which Power Ranger are you?"],
        [93, "Take this quirky quiz"],
        [95, "Obama sent the immigrants to vaccinate your kids"],
        [99, "Could I interest you in everything?"],
        [100, "All of the time?"],
        [102, "A little bit of everything"],
        [104, "All of the time"],
        [105, "Apathy's a tragedy"],
        [106, "And boredom is a crime"],
        [108, "Anything and everything"],
        [110, "All of the time"],
        [111, "Could I interest you in everything?"],
        [112, "All of the time?"],
        [114, "A little bit of everything"],
        [115, "All of the time"],
        [117, "Apathy's a tragedy"],
        [118, "And boredom is a crime"],
        [120, "Anything and everything"],
        [121, "All of the time"],
        [132, "You know, it wasn't always like this"],
        [139, "Not very long ago"],
        [143, "Just before your time"],
        [147, "Right before the towers fell, circa '99"],
        [154, "This was catalogs"],
        [156, "Travel blogs"],
        [158, "A chat room or two"],
        [162, "We set our sights and spent our nights"],
        [165, "Waiting"],
        [168, "For you, you, insatiable you"],
        [176, "Mommy let you use her iPad"],
        [181, "You were barely two"],
        [184, "And it did all the things"],
        [187, "We designed it to do"],
        [191, "Now look at you, oh"],
        [196, "Look at you, you, you"],
        [203, "Unstoppable, watchable"],
        [207, "Your time is now"],
        [209, "Your inside's out"],
        [214, "Honey, how you grew"],
        [215, "And if we stick together"],
        [218, "Who knows what we'll do"],
        [222, "It was always the plan"],
        [226, "To put the world in your hand"],
        [233, "Hahaha"],
        [242, "Could I interest you in everything?"],
        [245, "All of the time"],
        [248, "A bit of everything"],
        [250, "All of the time"],
        [252, "Apathy's a tragedy"],
        [255, "And boredom is a crime"],
        [257, "Anything and everything"],
        [260, "All of the time"],
        [261, "Could I interest you in everything?"],
        [263, "All of the time"],
        [264.5, "A little bit of everything"],
        [266, "All of the time"],
        [267, "Apathy's a tragedy"],
        [268, "And boredom is a crime"],
        [270, "Anything and everything"],
        [271, "And anything and everything"],
        [272, "And anything and everything"],
        [273.5, "And all of the time"]
    ]
}]

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
    private randomPlaylist: IMusic[] = []
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


    constructor(playlist: IMusic[], elems: { endElem: HTMLElement; audioSliderElem: HTMLInputElement; audioPlayerElem: HTMLElement; mediaControlElem: HTMLElement; lyricImg: HTMLElement; titleElem: HTMLElement; volumeQueueAreaElem: HTMLElement; artistElem: HTMLElement; coverImgElem: HTMLElement; audioElem: HTMLAudioElement; audioPlayerBarElem: HTMLElement; sliderElem: HTMLInputElement; lyricParentElem: HTMLElement; startElem: HTMLElement }) {

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

        // for (const childElem of this.volumeQueueAreaElem.children) {
        //     console.log(childElem)
        // }

        this.audioSliderElem.addEventListener("input", this.volumeInputSliderHandler)

        this.audioPlayerBarElem.addEventListener("keyup", this.musicSliderKeyUpHandler)
        this.sliderElem.addEventListener("input", this.musicInputSliderHandler)
        this.sliderElem.addEventListener("mouseup", this.musicSliderMouseUpHandler)


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
        const percentage = parseInt(this.sliderElem.value)/duration *100
        this.sliderElem.setAttribute("style", `--pos: ${percentage}%`)
    }

    updateSlider = () => {
        this.sliderElem.value = String(this.audioElem.currentTime)
        this.updateSliderColor()
    }

    updateSliderInterval = () => {
        this.sliderUpdateIntervalId = setInterval(() => {
            this.updateSlider()
        }, 1000)
    }

    volumeInputSliderHandler = () => {
        this.volumeQueueAreaElem.setAttribute("style", `--audioPos: ${this.audioSliderElem.value}%`)
        this.audioElem.volume = parseInt(this.audioSliderElem.value)/100
        if (this.audioElem.volume === 0) {
            this.volumeQueueAreaElem.setAttribute("data-muted", "TRUE")
        }
        else {
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
        } else {
            this.mediaControlElem.setAttribute("data-shuffle", "FALSE")
        }
    }

    repeat = () => {
        this.repeatType = (this.repeatType + 1) % 3
        switch (this.repeatType) {
            case ERepeat.NONE:
                this.mediaControlElem.setAttribute("data-repeat", "NONE")
                break;
            case ERepeat.ONE:
                this.mediaControlElem.setAttribute("data-repeat", "ONE")

                break;
            case ERepeat.ALL:
                this.mediaControlElem.setAttribute("data-repeat", "ALL")
                break;
        }
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
        document.getElementById("audioSection").innerHTML += `
            <audio id="audioFile">
                <source src="${songUrl}" type="audio/mp3">
            </audio>
            `
        let newAudioElem = document.getElementById("audioFile") as HTMLAudioElement
        if (newAudioElem !== null) {
            this.audioElem = newAudioElem
            this.audioElem.volume = volume
            this.audioElem.addEventListener("ended", this.forwardAudio)
        }
        this.setupAudioImg(imageUrl)
        this.coverImgElem.setAttribute("src", imageUrl)
        this.titleElem.innerHTML = songName
        this.artistElem.innerHTML = artist


        this.audioElem.load()
        this.updateLyrics(lyric)
        this.updateSliderDuration()
    }

    private updateSliderDuration = () => {
        let id = setInterval(()=>{
            if (!isNaN(this.audioElem.duration)) {
                this.sliderElem.max = String(this.audioElem.duration)
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
            }
            else {
                const prev = this.previousPlaylist.pop()
                if (prev === undefined) {
                    this.audioElem.currentTime = 0
                }
                else {
                    this.queue.splice(0, 0, this.currentlyPlaying);
                    this.currentlyPlaying = prev
                    this.setupAudio(this.currentlyPlaying)
                }
            }
        }
        this.audioElem.currentTime = 0
        this.playAudio()
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

        if (repeatType === "ONE") {
            this.queue.splice(0, 0, this.currentlyPlaying);
        }
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
}


const audioPlayer = new AudioPlayer(testMusics, {
    audioPlayerElem: document.getElementById("audioPlayer") as HTMLElement,
    audioPlayerBarElem: document.getElementById("audioPlayerBar") as HTMLElement,
    audioElem: document.getElementById("audioFile") as HTMLAudioElement,
    startElem: document.getElementById("timeStart") as HTMLElement,
    endElem: document.getElementById("timeEnd") as HTMLElement,
    lyricParentElem: document.getElementById("lyricMain") as HTMLElement,
    lyricImg: document.getElementById("lyricImg") as HTMLElement,
    mediaControlElem: document.getElementById("mediaControl") as HTMLElement,
    sliderElem: document.getElementById("songSlider") as HTMLInputElement,
    coverImgElem: document.getElementById("mediaCoverImg") as HTMLElement,
    titleElem: document.getElementById("mediaTitle") as HTMLElement,
    artistElem: document.getElementById("mediaArtist") as HTMLElement,
    volumeQueueAreaElem: document.getElementById("volumeQueueArea") as HTMLElement,
    audioSliderElem: document.getElementById("audioSlider") as HTMLInputElement
})
