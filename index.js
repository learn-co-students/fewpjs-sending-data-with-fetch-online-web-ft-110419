// Add your code here
function submitData(name, email) {
    const body = document.querySelector("body");
    
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(obj => {
          const h1 = document.createElement("h1");
          h1.innerHTML = `Id:${obj.id} ${obj.name}`;
          body.appendChild(h1)
        })
        .catch(error => {
          let div = document.createElement("div");
          div.innerHTML = 'Unauthorized Access';
          body.appendChild(div);
        });

}