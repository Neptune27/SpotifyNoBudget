"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
];
const testMusics = [{
        artist: "A",
        imageUrl: "/Src/Client/img/AkumaNoKo.jpg",
        songUrl: "/Src/Client/mp3/AkumaNoKo.mp3",
        lyric: lyrics,
        songName: "Akuma No Ko"
    }, {
        artist: "Yoasobi",
        songName: "Romance",
        imageUrl: "/Src/Client/img/Romance.jpg",
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
        imageUrl: "/Src/Client/img/WCTTI.png",
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
    }];
const timeConverter = (timestamp) => {
    let second = Math.floor(timestamp % 60);
    let minute = Math.floor(timestamp / 60);
    let secondFormatted = second < 10 ? `0${second}` : `${second}`;
    return `${minute}:${secondFormatted}`;
};
class AudioPlayer {
    constructor(playlist, elems) {
        this.prevLyricIntervalId = -1;
        this.sliderUpdateIntervalId = -1;
        this.currentPos = 0;
        this.setupEventListener = () => {
            const mCEChildren = this.mediaControlElem.children;
            for (const mCEChildElement of mCEChildren) {
                switch (mCEChildElement.id) {
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
                        mCEChildElement.addEventListener("click", this.playAudio);
                }
            }
            this.sliderElem.addEventListener("input", (e) => this.sliderHandler(e));
            this.sliderElem.addEventListener("mouseup", (e) => this.sliderMouseUpHandler(e));
            this.sliderElem.addEventListener("keyup", (e) => this.sliderKeyUpHandler(e));
        };
        this.updateStartEnd = () => {
            this.startElem.innerHTML = timeConverter(this.audioElem.currentTime);
            this.endElem.innerHTML = timeConverter(this.audioElem.duration);
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
                console.log(`Current Index: ${currentIndex}`);
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
                this.updateStartEnd();
            }, 250);
        };
        this.updateSliderColor = () => {
            this.sliderElem.setAttribute("style", `--pos: ${this.sliderElem.value}%`);
        };
        this.updateSlider = () => {
            this.sliderElem.value = String(this.audioElem.currentTime / this.audioElem.duration * 100);
            this.updateSliderColor();
        };
        this.updateSliderInterval = () => {
            this.sliderUpdateIntervalId = setInterval(() => {
                let slider = document.getElementById("songSlider");
                this.updateSlider();
            }, 1000);
        };
        this.updateMusic = async (timestamp) => {
            clearInterval(this.sliderUpdateIntervalId);
            this.audioElem.currentTime = timestamp;
            this.audioElem.pause();
            await this.audioElem.play();
            document.getElementById("mediaControl")?.setAttribute("data-played", "TRUE");
            this.updateSliderInterval();
        };
        this.sliderMouseUpHandler = async (event) => {
            let inputElem = event.target;
            let currentTimestamp = this.audioElem.duration * Number(inputElem.value) / 100;
            await this.updateMusic(currentTimestamp);
        };
        this.pauseAudio = () => {
            this.mediaControlElem.setAttribute("data-played", "FALSE");
            this.audioElem.pause();
        };
        this.playAudio = (event) => {
            this.audioElem.play();
            this.mediaControlElem.setAttribute("data-played", "TRUE");
        };
        this.backwardAudio = () => {
            if (this.audioElem.currentTime < 10) {
                if (this.currentPos > 0) {
                    this.currentPos--;
                    this.setupAudio(this.playlist[this.currentPos]);
                    this.audioElem.play();
                    return;
                }
            }
            this.audioElem.currentTime = 0;
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
            let { imageUrl, songUrl, lyric } = music;
            if (lyric === undefined) {
                lyric = [[0, "No"]];
            }
            this.audioElem.remove();
            // @ts-ignore
            document.getElementById("audioSection").innerHTML += `
            <audio id="audioFile">
                <source src="${songUrl}" type="audio/mp3">
            </audio>
            `;
            let newAudioElem = document.getElementById("audioFile");
            if (newAudioElem !== null) {
                this.audioElem = newAudioElem;
                this.audioElem.addEventListener("ended", this.forwardAudio);
            }
            this.setupAudioImg(imageUrl);
            // @ts-ignore
            this.audioElem.load();
            this.updateLyrics(lyric);
            this.updateStartEnd();
        };
        this.forwardAudio = () => {
            if (this.currentPos === this.playlist.length - 1) {
                this.pauseAudio();
                this.audioElem.currentTime = this.audioElem.duration;
            }
            else {
                this.currentPos++;
                this.setupAudio(this.playlist[this.currentPos]);
                this.audioElem.play();
            }
        };
        this.sliderKeyUpHandler = (e) => {
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
        const { audioElems, startElem, endElem, lyricParentElem, sliderElem, audioPlayerElem, lyricImg, mediaControlElem } = elems;
        this.playlist = playlist;
        this.audioElem = audioElems;
        this.startElem = startElem;
        this.endElem = endElem;
        this.lyricParentElem = lyricParentElem;
        this.sliderElem = sliderElem;
        this.audioPlayerElem = audioPlayerElem;
        this.lyricImg = lyricImg;
        this.mediaControlElem = mediaControlElem;
        this.updateSliderInterval();
        this.setupEventListener();
        // this.updateLyrics(playlist[0].lyric)
        this.setupAudio(this.playlist[0]);
    }
    sliderHandler(event) {
        clearInterval(this.sliderUpdateIntervalId);
        this.updateSliderColor();
    }
}
const audioPlayer = new AudioPlayer(testMusics, {
    audioPlayerElem: document.getElementById("audioPlayer"),
    audioElems: document.getElementById("audioFile"),
    startElem: document.getElementById("timeStart"),
    endElem: document.getElementById("timeEnd"),
    lyricParentElem: document.getElementById("lyricMain"),
    lyricImg: document.getElementById("lyricImg"),
    mediaControlElem: document.getElementById("mediaControl"),
    sliderElem: document.getElementById("songSlider"),
});
//# sourceMappingURL=AudioPlayer.js.map