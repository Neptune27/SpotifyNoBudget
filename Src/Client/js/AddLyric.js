"use strict";
// <button id="AddLyricBtn" class="btn btn-outline-primary mt-4" style="width: 100%">Thêm lời bài hát</button>
const uriChunks = window.location.href.split("/");
const timeConverter = (val) => {
    if (!val.match(/:/g)) {
        val = "0:" + val;
    }
    const time = val.split(":");
    const total = Number(time[0]) * 60 + Number(time[1]);
    return `${Math.floor(total / 60)}:${total % 60}`;
};
const AddLyricHandler = (lyrics = []) => {
    const element = document.getElementById("AddLyricBtn");
    if (element === null) {
        throw Error("Huh???");
    }
    const lyricSectionElem = document.getElementById("LyricSection");
    if (lyricSectionElem === null) {
        throw Error("WUT???");
    }
    const addItem = (TG = "", lyric = "") => {
        if (TG === "") {
            if (lyricSectionElem.lastElementChild !== null) {
                let val = lyricSectionElem.lastElementChild.querySelector("input[placeholder='TG']");
                if (val !== null) {
                    TG = val.value;
                }
            }
        }
        const div = document.createElement('div');
        div.setAttribute("class", "d-flex gap-2");
        div.innerHTML += `
            <input type="text" class="form-control" placeholder="TG" value="${timeConverter(TG)}" style="width: 4rem">
            <input type="text" class="form-control" placeholder="Lời bài hát" value="${lyric}">
            <button class="btn btn-outline-danger">Xóa</button>
        `;
        const tgInp = div.querySelector("input[placeholder='TG']");
        if (tgInp !== null) {
            tgInp.addEventListener("input", (e) => {
                let char = tgInp.value[tgInp.value.length - 1];
                if (!char.match(/[0-9:]/g)) {
                    tgInp.value = tgInp.value.slice(0, tgInp.value.length - 1);
                }
            });
            tgInp.addEventListener("focusout", () => {
                tgInp.value = timeConverter(tgInp.value);
            });
        }
        lyricSectionElem.appendChild(div);
        for (const lyricSectionElemElement of lyricSectionElem.children) {
            const delBtn = lyricSectionElemElement.querySelector("button");
            if (delBtn === null) {
                throw Error("OK???");
            }
            delBtn.addEventListener("click", () => {
                lyricSectionElemElement.remove();
            });
        }
    };
    for (const lyric of lyrics) {
        addItem(String(lyric[0]), String(lyric[1]));
    }
    element.addEventListener("click", () => {
        addItem();
    });
};
if (uriChunks[uriChunks.length - 1] === "0") {
    AddLyricHandler();
}
else {
    fetch(`/Song/GetLyrics/${uriChunks[uriChunks.length - 1]}`)
        .then(res => res.json())
        .then(data => {
        AddLyricHandler(JSON.parse(data["LYRICS"]));
    });
}
//# sourceMappingURL=AddLyric.js.map