

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name: name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }

// let body = document.querySelector("body")

// function submitData(name, email){  
//     let configObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json',
//             "Accepts": 'application/json'
//         },
//         body: JSON.stringify({name: name, email: email})
//         };
//     fetch("http://localhost:3000/users", configObj)
//         .then(function(response) {
//         return response.json();
//         })
//         .then(function(object) {
       
//         body.innerHTML += object.id
//         }).catch(function(error) {
//             alert("Can't do it")})
// }