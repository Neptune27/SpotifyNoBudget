// Example starter JavaScript for disabling form submissions if there are invalid fields
const validate = (event) => {
    'use strict'
    event.preventDefault()
    console.log(event)

    if (!event.target.checkValidity()) {
        event.stopPropagation()
    }


    event.target.classList.add('was-validated')
}


