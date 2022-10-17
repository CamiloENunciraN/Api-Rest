


document.getElementById("boton").onclick = function(){

fetch('http://localhost:3000/peticion', { mode: 'no-cors'})
  .then(response => response.json())
  .then(data => console.log(data));

	}