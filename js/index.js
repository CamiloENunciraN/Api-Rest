


document.getElementById("boton").onclick = function(){

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

document.getElementById("boton2").onclick = function(){

fetch('https://localhost:3000/peticion')
  .then(response => response.json())
  .then(json => console.log(json))
}