// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//alert("Bienvenido al challenge del amigo secreto");

let amigos = [];
console.log();
let input
let NoInput = ""

function AsignarTextoElemento(elemento, texto) {
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreDelAmigo = document.getElementById('amigo').value;
    console.log(nombreDelAmigo);
        if (nombreDelAmigo === NoInput) {
        alert("Por favor, ingresa un nombre");
        nombreDelAmigo.pop();
        } else {
        amigos.push(nombreDelAmigo);
        document.querySelector("amigo").value = "";
        ();
        }
        limpiarCampo()
    return;
}

function limpiarCampo() {
    let valorCampo = document.getElementById('amigo');
    valorCampo.value = ''
}

function mostrarNombres() {
    let mombresDeAmigos = document.getElementById('ListaAmigos');
    return;

}

