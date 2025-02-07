const Abced = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let abc = [];

function pintarAbecedario() {
    let parte = document.getElementById('letra'); //Obtiene letra (se posicióna)
    for (let i = 0; i < Abced.length; i++) { //Recorre cada letra del abecedario
        let button = document.createElement("button"); //Crea un botón por cada vuelta
        button.textContent = Abced[i];  //El botón pasa a contener la letra de la posición i
        parte.appendChild(button); //Añade el botón
        abc.push(Abced[i]); //Añade la letra al array

        button.onclick = function () {
            this.style.visibility = "hidden"; // Ocultar el botón
            comprobarIntentos(Abced[i]);
        }
    }
}

window.onload = pintarAbecedario;

const palabrasPosibles = ["ELEFANTE", "PROGRAMACION", "JAVASCRIPT", "GATO", "ORDENADOR", "PLATAFORMA"]; // Array con las posibles palabras a adivinar.
const imagenesAhorcado = ["image6", "image5", "image4", "image3", "image2", "image1", "image0"]; // Array con los nombres de las imágenes del ahorcado (de la 6 a la 0).
let palabraSecreta = ""; // Variable para almacenar la palabra secreta a adivinar.
let palabraGuiones = []; // Array para almacenar las letras adivinadas y los guiones restantes.
let intentosRestantes = 6; // Variable para almacenar el número de intentos restantes.

function inicio() {
    intentosRestantes = 6; // Reinicia el número de intentos restantes.
    document.getElementById("intentos").textContent = intentosRestantes; // Actualiza el número de intentos restantes en la pantalla.
    document.getElementById("acierto").textContent = ""; // Limpia el mensaje de acierto/error.
    actualizarImagen(intentosRestantes); // Actualiza la imagen del ahorcado.


    const botones = document.querySelectorAll("#letra button"); // Obtiene todos los botones del abecedario.
    for (let i = 0; i < botones.length; i++) { // Itera sobre los botones del abecedario.
        botones[i].style.visibility = "visible"; // Muestra todos los botones del abecedario.
    }
    document.getElementById("msg-final").textContent = ""; // Limpia el mensaje final.
    document.getElementById("msg-final").classList.remove("zoom-in"); // Elimina la clase de animación del mensaje final.
}

function pintarGuiones() {
//Por hacer
}

function comprobarIntentos(letraSeleccionada) {
    let acierto = false; // Variable para indicar si la letra seleccionada está en la palabra secreta.
    for (let i = 0; i < palabraSecreta.length; i++) { // Itera sobre las letras de la palabra secreta.
        if (palabraSecreta[i] === letraSeleccionada) { // Si la letra seleccionada coincide con una letra de la palabra secreta.
            palabraGuiones[i] = letraSeleccionada; // Reemplaza el guión en la posición correspondiente con la letra seleccionada.
            acierto = true; // Indica que hubo un acierto.
        }
    }

    /**
     * Esta parte no funciona del todo
     */
    if (acierto) { // Si hubo un acierto.
        document.getElementById("acierto").textContent = "¡Bien!"; // Muestra un mensaje de "¡Bien!" en la pantalla.
        document.getElementById("acierto").classList.add("verde"); // Añade la clase "verde" al mensaje de acierto para que se muestre en color verde.
        pintarGuiones(); // Actualiza los guiones en la pantalla.
    } else { // Si no hubo un acierto.
        document.getElementById("acierto").textContent = "¡Error!"; // Muestra un mensaje de "¡Error!" en la pantalla.
        document.getElementById("acierto").classList.add("rojo"); // Añade la clase "rojo" al mensaje de error para que se muestre en color rojo.
        intentosRestantes--; // Decrementa el número de intentos restantes.
        actualizarImagen(intentosRestantes); // Actualiza la imagen del ahorcado.
        document.getElementById("intentos").textContent = intentosRestantes; // Actualiza el número de intentos restantes en la pantalla.
    }
}

function actualizarImagen(intentos) {
    // Itera sobre el array de nombres de imágenes del ahorcado.
    for (let i = 0; i < imagenesAhorcado.length; i++) {
        let img = imagenesAhorcado[i]; // Obtiene el nombre de la imagen actual.
        document.getElementById(img).style.opacity = i === 6 - intentos ? "1" : "0"; // Establece la opacidad de la imagen.
    }
}
function FinJuego() {
    //Por hacer
}

document.addEventListener('DOMContentLoaded', inicio);