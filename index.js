// Add your code here

function submitData(name, email) {
    let user = {name, email}; // we create a variable with an object taking two keys, name and email.
    let data = { // data is just a variable containing an object for fetch's second argument
        method: "POST", //HTTP verb specified
        headers: { // headers is the metadata sent with an HTTP request - Headers are sent just ahead of the actual data payload of our POST request
            "Content-Type": "application/json", // "Content-Type" is a header - is used to indicate what format the data being sent is in. JSON is the most common format we will be using
            "Accept": "application/json" // When sending data, the server at the destination URL will send back a response, often including data that the sender of the fetch() request might find useful
          }, // Accept here will accept the data sent back after the POST request goes through.
          body: JSON.stringify(user) // we stringify the variable user object keys, because the data is sent as text.
        };// Whatever data we're assigning to the body of our request needs to be a string
// when we stringify user, it would be the same as taking an argument that already has key/value piars. example: submitData("Ethan", "Ethan@gmail.com") 
    return fetch('http://localhost:3000/users', data) //fetch will take the url and the data variable(which houses an object) as an argument
    .then(function(response) { // data is a POST method, so fetch will take this as a post request.
        return response.json();
    }).then(function(object) {
        document.body.innerHTML = object.id // the object we returned is now appended onto the page with object.id
    })
    .catch(function(error) { // we can add a catch at the end in case there is an error it will appear on the page.
        alert("Oops!");
        document.body.innerHTML = error.message;
      });
}



