// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

alert("Bienvenido al challenge del amigo secreto");

let amigos = []
let input
let NoInput = ""

function agregarAmigo() {
    let nombreDelAmigo = document.getElementById('amigo').value;
    console.log(nombreDelAmigo);
        if (nombreDelAmigo === NoInput) {
        alert("Por favor, ingresa un nombre");
        } else {
        }
    let nuevoAmigo = amigos.push(nombreDelAmigo);
    limpiarCampo()
    return;
}

function limpiarCampo() {
    let valorCampo = document.getElementById('amigo');
    valorCampo.value = ''
}


