const validate = async (event) => {
    'use strict'
    event.preventDefault()
    console.log(event)

    if (!event.target.checkValidity()) {
        event.stopPropagation()
    }

    const uri = "GetSignIn?" + new URLSearchParams({
        username: event.target[0].value,
        password: event.target[1].value,
    })

    const res = await fetch(uri);
    if (res.status !== 403) {
        const cont = await res.json()
        if (cont["isAdmin"] === true) {
            location.href = "/Admin"
        }
        else {
            location.href = "/Play"
        }
    }
    else {
        const errorElem = document.getElementById("error")
        errorElem.innerText = "Username hoặc mật khẩu sai"
        errorElem.setAttribute("style", "")
    }
}

const validateSignUp = async (event) => {
    'use strict'
    event.preventDefault()
    console.log(event)

    if (!event.target.checkValidity()) {
        event.stopPropagation()
    }

    let sex = ""
    for (let i = 5; i <= 7; i++) {
        if (event.target[i].checked) {
            sex = event.target[i].id
        }
    }


    const uri = "GetSignUp?" + new URLSearchParams({
        username: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
        name: event.target[3].value,
        bDay: event.target[4].value,
        sex: sex
    })
    console.log(uri)

    const res = await fetch(uri, {
        method: "POST"
    });
    if (res.status !== 403) {
        const cont = await res.json()
        if (cont["success"] === true) {
            location.href = "/Play"
        }
    }
    else {
        const errorElem = document.getElementById("error")
        errorElem.innerText = "Username bị trùng"
        errorElem.setAttribute("style", "")
    }
}

