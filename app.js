
// A una array de amigos vacia se agregaran los amigos pulsando el boton añadir. Alerta si el campo esta vacio.

    let amigos =[];
        
function agregarAmigo () {
    
if(document.getElementById('amigo').value== '') {
    alert('debe agregar a un amigo') ;
}else{
   amigos.push(document.getElementById('amigo').value);
    document.querySelector('#amigo').value = '';
    mostrarAmigo();
}
    console.log(amigos);
  }

// Crear lista de amigos participantes

function mostrarAmigo () {
    let lista = document.getElementById("listaAmigos"); // linea 27 html
    lista.innerHTML = ''; // limpiar lista

for (let i = 0; i < amigos.length; i++) {

      let elementoLista = document.createElement('li');
    elementoLista.textContent = amigos[i];
    lista.appendChild(elementoLista);
    }
 
}



