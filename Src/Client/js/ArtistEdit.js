// Kiểm tra email hợp lệ
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

let serverAvatarPath = "/Src/Client/img/Artist/";

// Sự kiện dùng để thêm nghệ sĩ
let addArtist = document.getElementById("addArtist");
if (addArtist) {
    addArtist.onclick = function (e) {
        e.stopPropagation();
        let artistName = document.getElementById("artistName").value;
        if (artistName.trim() === "") {
            alert("Không được bỏ trống tên nghệ sĩ");
            return;
        }

        // Lấy ra nghệ sĩ Id
        let artistID = document.getElementById("artistID").innerText;

        // Lấy ra tên file
        let artistAvatar = document.getElementById("artistAvatar").value;
        if (artistAvatar.trim() === "") {
            artistAvatar = "NA";
        } else {
            artistAvatar = `${serverAvatarPath}/${artistID}/${artistAvatar}`;
        }
        let artistGender = document.getElementById("artistGender").value;
        let artistDOB = document.getElementById("artistDOB").value;
        if (artistDOB.trim() === "") {
            alert("Không được bỏ trống ngày sinh");
            return;
        }
        let artistVerify = document.querySelector('input[name="artistVerify"]:checked').value;
        let artistCountry = document.getElementById("artistCountry").value;
        if (artistCountry.trim() === "") {
            artistCountry = "NA";
        }
        let artistEmail = document.getElementById("artistEmail").value;
        if (artistEmail.trim() === "" || artistEmail.trim() === "NA") {
            artistEmail = "NA";
        } else {
            if (!validateEmail(artistEmail)) {
                alert("Địa chỉ email không hợp lệ");
                return;
            }
        }
        let artistType = document.getElementById("artistType").value;
        let artistListener = document.getElementById("artistListener").value;

        if (artistListener === "") {
            artistListener = 0;
        }

        let fetchFrom = "/Admin/AddArtist/Add";

        let data = {
            artistID: artistID,
            artistName: artistName,
            artistAvatar: artistAvatar,
            artistGender: artistGender,
            artistDOB: artistDOB,
            artistVerify: artistVerify,
            artistCountry: artistCountry,
            artistEmail: artistEmail,
            artistType: artistType,
            artistListener: artistListener
        };

        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(data => console.log(data))
            .then(() => alert("Thêm ca sĩ thành công"))
            .catch(data => console.log(data));
    };
}

// Sự kiện dùng để sửa nghệ sĩ
let editArtist = document.getElementById("editArtist");
if (editArtist) {
    editArtist.onclick = function (e) {
        e.stopPropagation();
        let artistID = document.getElementById("artistID").innerText.split(" ").pop();

        let artistName = document.getElementById("artistName").value;
        if (artistName.trim() === "") {
            alert("Không được bỏ trống tên nghệ sĩ");
            return;
        }

        // Lấy ra tên file
        let artistAvatar = document.getElementById("artistAvatar").value;
        if (artistAvatar.trim() === "") {
            artistAvatar = "NA";
        } else {
            artistAvatar = `${serverAvatarPath}/${artistID}/${artistAvatar}`;
        }

        let artistGender = document.getElementById("artistGender").value;
        let artistDOB = document.getElementById("artistDOB").value;
        if (artistDOB.trim() === "") {
            alert("Không được bỏ trống ngày sinh");
            return;
        }
        let artistVerify = document.querySelector('input[name="artistVerify"]:checked').value;
        let artistCountry = document.getElementById("artistCountry").value;
        if (artistCountry.trim() === "") {
            artistCountry = "NA";
        }
        let artistEmail = document.getElementById("artistEmail").value;
        if (artistEmail.trim() === "" || artistEmail.trim() === "NA") {
            artistEmail = "NA";
        } else {
            if (!validateEmail(artistEmail)) {
                alert("Địa chỉ email không hợp lệ");
                return;
            }
        }
        let artistType = document.getElementById("artistType").value;
        let artistListener = document.getElementById("artistListener").value;

        if (artistListener === "") {
            artistListener = 0;
        }

        let fetchFrom = "/Admin/EditArtist/Edit";

        let data = {
            artistID: artistID,
            artistName: artistName,
            artistAvatar: artistAvatar,
            artistGender: artistGender,
            artistDOB: artistDOB,
            artistVerify: artistVerify,
            artistCountry: artistCountry,
            artistEmail: artistEmail,
            artistType: artistType,
            artistListener: artistListener
        };

        fetch(fetchFrom, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
            .then(data => console.log(data))
            .then(() => alert("Sửa ca sĩ thành công"))
            .catch(data => console.log(data));
    };
}