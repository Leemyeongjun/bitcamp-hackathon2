


function info() {
	let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "http://localhost:3000/hackathon", false);
  xhr.send();

  info = JSON.parse(xhr.responseText);
}