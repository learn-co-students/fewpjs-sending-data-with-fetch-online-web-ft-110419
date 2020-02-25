// Add your code here

function submitData(user_name, user_email) {
	let configurationObject = {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"name": user_name,
			"email": user_email
		})
	}
	let promise = fetch("http://localhost:3000/users", configurationObject).then(response => response.json()).then(function(object) {
		console.log(object);
		document.body.innerHTML = object["id"]
	} ).catch(function(error) {
		let p = document.createElement("p")
		p.innerHTML = error.message
		document.getElementsByTagName("body")[0].appendChild(p)
	})
	return promise
}

submitData("Lucy", "lucy@stuff.org")