// Add your code here

let configObj = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body: JSON.stringify({  
        name: "Steve",
        email: "steve@steve.com"
    })
};

function submitData(name, email){
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object['id'];
    })
    .catch(function(error){
        alert("Something is off!");
        document.body.innerHTML = (error.message);
    })
};

/* configObj = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};
fetch("http://localhost:3000/dogs", configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
*/