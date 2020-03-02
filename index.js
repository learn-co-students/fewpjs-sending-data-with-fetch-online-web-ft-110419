
function appendContentToBody(content) {

    return content
}

function submitData(name, email) {
    const userName = name
    const userEmail = email

    let formData = {
        name: userName,
        email: userEmail
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            const body = document.querySelector('body')
            const output = object.id
            const header = document.createElement('h1')
            header.innerText = output
            body.appendChild(header)
        })
        .catch(function(error) {
            console.log(error.message)
        })
}