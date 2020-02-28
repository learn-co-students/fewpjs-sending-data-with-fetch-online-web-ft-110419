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
    let p = document.createElement("p");
    p.innerHTML = object.id;
    document.querySelector("body").appendChild(p);
  })
  .catch(function(error) {
    let h = document.createElement("H1");
    h.innerHTML = "Unauthorized Access";
    document.querySelector("body").appendChild(h);
    alert("Unauthorized Access");
    console.log(error.message);
  });
}