alert("test");
actualizar();

//escuchar actualizaciones del servidor
function actualizar(){
  const source = new EventSource('/actualizaciones'); // Establecer la conexión SSE
  source.onmessage = function(event) {
    document.getElementById('actualizacion').innerHTML = event.data; // Actualizar el contenido HTML
    };
}
