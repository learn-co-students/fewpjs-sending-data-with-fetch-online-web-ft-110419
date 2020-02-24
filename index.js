

function submitData(name, email) {
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
      };
    
      return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
          let body = document.querySelector("body")
          let element = document.createElement('p')
          element.innerHTML= object.id 
          body.appendChild(element)
        console.log(object);
      })
      .catch(function(error) {
        document.body.innerHTML= 'Unauthorized Access'
        alert("Unauthorized Access");
        console.log(error.message);
      });
}

