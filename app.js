// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//alert("Bienvenido al challenge del amigo secreto");

let amigos = []
//Declara el array para la lista de amigos
let input
let NoInput = ""
//Declara las variables para los inputs

function agregarAmigo() {
    let nombreDelAmigo = document.getElementById('amigo').value;
    //función que agrega los nombre al array
        if (nombreDelAmigo === NoInput) {
        alert("Por favor, ingresa un nombre");
        //Si no hay un nombre ingresado, aparecerá un aviso solicitando que ingrese un nombre
        } else {
        amigos.push(nombreDelAmigo);
        //De lo contrario, se aceptará el nommbre
    MostrarNombreEnLista();
    //Muestra el nombre válido en la lista
        }
    //limpiarCampo()
    //Limpia el campo después de añadir el nombre del amigo
    return;
}

function limpiarCampo() {
    let valorCampo = document.getElementById('amigo');
    valorCampo.value = ''
}
//Función que limpia el campo después de añadir el nombre del amigo

function MostrarNombreEnLista() {
//Función para mostrar el nombre en la lista
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaDelHTML = document.createElement("li");
      listaDelHTML.textContent = element;
      listaDeAmigos.appendChild(listaDelHTML);
    }
  }

function sortearAmigo() {
//Fanción que hace el sorteo de los nombres al pulsar el botón "Sortear amigo"
  let cantidadDeAmigos = amigos.length;
  if (cantidadDeAmigos === 0) {
    alert("Por favor, inserte un nombre para poder sortear");
    //Si no hay por lo menos un nombre en la lista, no se hará el sorteo y aparecerá un mensaje solicitando que indique un nommbre
  } else {
    let indiceDeAmigo = Math.floor(Math.random() * cantidadDeAmigos);
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = amigos[indiceDeAmigo];
    //De lo contrario, se iniciará el sorteo
    return;
  }
}