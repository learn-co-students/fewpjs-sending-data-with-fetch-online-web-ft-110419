// Add your code here
function submitData(name, email) {
  const baseUrl = 'http://localhost:3000/';
  const configurationDogObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name, email })
  };

  return fetch(`${baseUrl}users`, configurationDogObject)
    .then(response => response.json())
    .then(json => {
      debugger
      document.body.innerHTML = JSON.stringify(json["id"]);
    })
    .catch(error => {
      document.body.innerHTML = error.message;
    })

}