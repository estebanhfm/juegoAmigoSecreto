// A una array de amigos vacia se agregaran los amigos pulsando el boton añadir.

    let amigos =[];
    let ingresos = 0; 
    
function agregarAmigo () {
    amigos.push(document.getElementById('amigo').value);
ingresos++;
    console.log(amigos);
    console.log(ingresos);
}

// Al agregar un amigo con el boton añadiir, 
// éste se almacena en un parrafo bajo el boton como participante del sorteo. 
// se almacenan los indices del array o elementos de acuerdo al ingreso que lleva un contador.

/* aun no se me ocurre como agregar la lista 

let ingresos = 0;

function asignarParticipante (elemento, texto) {
    let participanteHTLM = document.createElement("p");
    participanteHTLM.textContent = amigos[ingresos];

}

*/

// al sortear amigo se aplicara un random a los numeros de ingresos 
// de los elementos del array amigos
// se mostrara el alert (tu amigo es , anotalo para que no se te olvide)

