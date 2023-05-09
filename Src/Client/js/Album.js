
function addAlbum() {
   
        
        let AlbumName = document.getElementById("AlbumName").value;
        if (AlbumName.trim() === "") {
            alert("Không được bỏ trống tên Album");
            return;
        }

        // Lấy ra tên file
        let AlbumAvatar = document.getElementById("AlbumAvatar").value;
        if (AlbumAvatar.trim() === "") {
            AlbumAvatar = "NA";
        }

        let AlbumDescriptions = document.getElementById("AlbumDescriptions").value;
        if (AlbumDescriptions.trim() === "") {
            AlbumDescriptions = "không có nhận xét nào";
        }
        
        let AlbumListener = document.getElementById("AlbumListener").value;

        if (AlbumListener === "") {
            AlbumListener = 0;
        }

        let AlbumTime = document.getElementById("AlbumTime").value;
        if (!(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(AlbumTime)||AlbumTime==="")) {
            alert("thời gian không đúng đinh dạng");
            return;
        }
        let AlbumDate = document.getElementById("AlbumDate").value;
        if (!(/[0-9]{4}:[0-9]{2}:[0-9]{2}/.test(AlbumDate)||AlbumDate==="")) {
            alert("Ngày tạo không đúng đinh dạng");
            return;
        }
        // 2 cái let dưới chưa xong
        let Created = document.getElementsByClassName("AlbumCreated");
        let AlbumCreated =[];
        for(const x of Created ){
            AlbumCreated.push(x.value);
        }
        console.log("ng tạo")
        console.log(AlbumCreated)

        let AlSong = document.getElementsByClassName("AlbumSong");
        let AlbumSong =[];
        for(const x of AlSong ){
            AlbumSong.push(x.value);
        }
        console.log( "song:")
        console.log( AlbumSong)

        // còn phần  ca sĩ + người lập

        let fetchFrom = "/Admin/AddAlbum/Add";

        let data = {
            AlbumName: AlbumName,
            AlbumAvatar: AlbumAvatar,
            AlbumListener: AlbumListener,
            AlbumDate: AlbumDate, 
            AlbumTime: AlbumTime,
            AlbumSong: AlbumSong,
            AlbumCreated: AlbumCreated,
            AlbumDescriptions: AlbumDescriptions

        };
        // console.log(data)
        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(data => console.log(data))
            .then(() => alert("Thêm Album thành công"))
            .catch(data => console.log(data));
    
}

// Sự kiện dùng để sửa nghệ sĩ
function editAlbum() {
let editAlbum = document.getElementById("editAlbum");
// header("Localhost: http://localhost/admin");

        let AlbumID = document.getElementById("AlbumID").innerText.split(" ").pop();

        let AlbumName = document.getElementById("AlbumName").value;
        if (AlbumName.trim() === "") {
            alert("Không được bỏ trống tên Album");
            return;
        }

        // Lấy ra tên file
        let AlbumAvatar = document.getElementById("AlbumAvatar").value;
        if (AlbumAvatar.trim() === "") {
            AlbumAvatar = "NA";
        }

        let AlbumDescriptions = document.getElementById("AlbumDescriptions").value;
        if (AlbumDescriptions.trim() === "") {
            AlbumAvatar = "không có nhận xét nào";
        }
        
        let AlbumListener = document.getElementById("AlbumListener").value;

        if (AlbumListener === "") {
            AlbumListener = 0;
        }

        let AlbumTime = document.getElementById("AlbumTime").value;
        if (!(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(AlbumTime)||AlbumTime==="")) {
            alert("thời gian không đúng đinh dạng");
            return;
        }
        let AlbumDate = document.getElementById("AlbumDate").value;
        if (!(/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(AlbumDate)||AlbumDate==="")) {
            alert("Ngày tạo không đúng đinh dạng");
            return;
        }

        // 2 cái let dưới chưa xong
        let Created = document.getElementsByClassName("AlbumCreated");
        let AlbumCreated =[];
        for(const x of Created ){
            AlbumCreated.push(x.value);
        }

        let AlSong = document.getElementsByClassName("AlbumSong");
        let AlbumSong =[];
        for(const x of AlSong ){
            AlbumSong.push(x.value);
        }
        // còn phần  ca sĩ + người lập

        let fetchFrom = "/Admin/EditAlbum/Edit";

        let data = {
            AlbumID: AlbumID,
            AlbumName: AlbumName,
            AlbumAvatar: AlbumAvatar,
            AlbumListener: AlbumListener,
            AlbumDate: AlbumDate, 
            AlbumTime: AlbumTime,
            AlbumSong: AlbumSong,
            AlbumCreated: AlbumCreated,
            AlbumDescriptions: AlbumDescriptions

        };

        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        }).then(() => alert("sửa Album thành công"))
            .catch(data => console.log(data));
            
    };


function adduserAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="userAs" class="AlbumCreated form-control" value="`+qq+`">
        <button class="btn btn-outline-danger">Xóa</button>

    `;
   
    

    let user = document.getElementById("addAluser");
    user.appendChild(div);    
        let delBtn = user.lastChild.querySelector("button");
        console.log(delBtn);
        if (delBtn === null) {
            throw Error("OK???");
            return;
        }
        delBtn.addEventListener("click", function() {
            this.closest("div").remove();
        })

}

function addSongAl(qq=""){
    const div = document.createElement('div');
    div.setAttribute("class", "d-flex gap-2");
    div.innerHTML += `
        <input list="SongAl" class="AlbumSong form-control" value=`+qq+`>
        <button class="btn btn-outline-danger">Xóa</button>
    `;


    let user = document.getElementById("addAlSong");
    user.appendChild(div);

    let delBtn = user.lastChild.querySelector("button");
    console.log(delBtn);
    if (delBtn === null) {
        throw Error("OK???");
        return;
    }
    delBtn.addEventListener("click", function() {
        this.closest("div").remove();
    })

}


let AddUserBtn = document.getElementById("AddUserBtn");
document.getElementById("AddUserBtn").addEventListener("click", () => {
    adduserAl();
});

let AddSongBtn = document.getElementById("AddSongBtn");
AddSongBtn.addEventListener("click", () => {
    addSongAl();
});
