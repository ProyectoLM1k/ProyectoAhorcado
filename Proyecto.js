const Abced = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";  //Declara la constante
var abc = [];  //Array vacío el cual almacenará el abecedario

function pintarAbecedario() {
    let parte = document.getElementById('letra');  //Obtiene letra (se posicióna)
    for (let i = 0; i < Abced.length; i++) {  //Recorre cada letra del abecedario
        let button = document.createElement("button");  //Crea un botón por cada vuelta
        button.textContent = Abced[i];  //El botón pasa a contener la letra de la posición i

        parte.appendChild(button);  //Añade el botón
        abc.push(Abced[i]);  //Añade la letra al array

        button.onclick = function () {
            button.style.visibility = "hidden";  //Oculta el botón al clickar sobre él
            alert("Letra " + abc[i] + " borrada");  //Muestra una alerta

        }

    }
}
    window.onload = pintarAbecedario; //Se ejecuta la función cada vez que se recarga la ventana (página)
