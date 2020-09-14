// Add your code here
function submitData(name, email) {
  let destinationURL = "http://localhost:3000/users";

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

  return fetch(destinationURL, configObj)
    .then(response => response.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(error => document.body.innerHTML = error.message);
}