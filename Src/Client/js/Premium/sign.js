// Example starter JavaScript for disabling form submissions if there are invalid fields
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
    const cont = await res.json();
    console.log(cont["USERNAME"])
    if (cont["USERNAME"]) {
        window.location.href = "/"
    }

    event.target.classList.add('was-validated')
}


