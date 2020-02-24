function submitData(name, email) {

    let userInfo = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })

}

submitData()