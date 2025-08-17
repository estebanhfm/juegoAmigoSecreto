
// A una array de amigos vacia se agregaran los amigos pulsando el boton añadir. Alerta si el campo esta vacio.

    let amigos =[];
        
function agregarAmigo () {
    
if(document.getElementById('amigo').value== '') {
    alert('Debe agregar a un amigo para el sorteo') ;
}else{
   amigos.push(document.getElementById('amigo').value);
    document.querySelector('#amigo').value = '';
    mostrarAmigo();
    document.querySelector('#resultado').value = ''; // asignar nada en el ganador
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

// Funcion para sortear el amigo secreto

function sortearAmigo () {

const indiceSecreto = Math.floor(Math.random()*amigos.length);
const amigoSecreto = amigos[indiceSecreto];

console.log(amigoSecreto);


// mostrar amigo en el espacio ganador index
let resultadoFinal = document.getElementById('resultado'); 
resultadoFinal.innerHTML= `Tu amigo secreto es:      ${amigoSecreto}`;

 }

