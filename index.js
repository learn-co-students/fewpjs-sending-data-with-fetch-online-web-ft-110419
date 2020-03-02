const body = document.querySelector('body')

function appendContentToBody(content) {
    const output = content
    const header = document.createElement('h1')
    header.innerText = output
    body.appendChild(header)
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
            return appendContentToBody(object.id)
        })
        .catch(function(error) {
            appendContentToBody("Unauthorized Access")
            console.log(error.message)
        })
}