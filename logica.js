let app = document.getElementById("app");
app.style.marginTop = "15vh";

let nuevoDiv = document.createElement("div");
nuevoDiv.setAttribute("class", "container text-center card p-4 ");
nuevoDiv.setAttribute("style", "max-width: 30vw");
app.appendChild(nuevoDiv);

let banderaParentesis = true;
let banderaOscura = false;

let teclas = [
    "C", "/", "*", "CE", 
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "()",
    "0", ".", "^", "="];

let contenedorTema;
let campoValores;
let campoResultado;
let seccion;
let icono;

for (let i = 0; i < 3; i++) {
    contenedorTema = document.createElement("div");
    contenedorTema.setAttribute("class", "d-flex justify-content-center");
    nuevoDiv.appendChild(contenedorTema);

    switch (i){
        case (0):
            let botonTema = document.createElement("button");
            botonTema.setAttribute("class", "mb-3 row form-control text-center btn btn-primary");
            botonTema.addEventListener("click", cambiarTema);
            icono = document.createElement("span");
            icono.setAttribute("class", "material-icons");
            icono.textContent = "dark_mode";
            botonTema.appendChild(icono);
            contenedorTema.appendChild(botonTema);
            break;
        case (1):
            campoValores = document.createElement("input");
            campoValores.setAttribute("class", "row form-control text-center");
            campoValores.setAttribute("readonly", true);
            campoValores.setAttribute("style", "font-weight: bolder;");
            contenedorTema.appendChild(campoValores);
            break;
        case (2):
            campoResultado = document.createElement("input");
            campoResultado.setAttribute("class", "my-3 row form-control text-center");
            campoResultado.setAttribute("readonly", true);
            campoResultado.setAttribute("style", "font-weight: bolder;");
            campoResultado.value = "Resultado anterior: 0";
            contenedorTema.appendChild(campoResultado);
            break;
    }
}

for (let i = 0; i < teclas.length; i++) {
    if (i % 4 === 0) {
        seccion = document.createElement("div");
        seccion.setAttribute("class", "row");
        nuevoDiv.appendChild(seccion)
    }

    let nuevoBoton = document.createElement("button");
    nuevoBoton.setAttribute("class", "btn btn-primary col m-1");
    nuevoBoton.textContent = teclas[i];

    switch (i) {
        case (0):
            nuevoBoton.addEventListener("click", borrarTodo);
            break;
        case(3):
            nuevoBoton.addEventListener("click", borrarUltimo);
            break;
        case(15):
                nuevoBoton.addEventListener("click", termino);
                break;
        case(18):
                nuevoBoton.addEventListener("click", factorial);
                break;
        case(19):
            nuevoBoton.addEventListener("click", calcular);
            break;
        default:
            nuevoBoton.addEventListener("click", function() {
                campoValores.value += teclas[i];
            });
            break;
    }

    seccion.appendChild(nuevoBoton);
}

function factorial() {
    campoValores.value += "**";
}

function termino() {
    campoValores.value += (banderaParentesis)? "(": ")";
    banderaParentesis = !banderaParentesis;
}

function calcular() {
    let resultado = parseFloat(eval(campoValores.value).toFixed(3));

    campoResultado.value = "Resultado anterior: " + resultado;
    borrarTodo();
    campoValores.value += resultado;
}

function agregarNumero(valor) {
    campoValores.value += valor;
}

function borrarTodo() {
    campoValores.value = "";
}

function borrarUltimo() {
    campoValores.value = campoValores.value.slice(0, -1);
}

function cambiarTema() {
    let botones = document.querySelectorAll("button");
    
    if (banderaOscura) {
        app.parentElement.style.backgroundColor = "#222831"
        nuevoDiv.style.backgroundColor = "#393E46";
        campoResultado.style.backgroundColor = "#AAAAAA";
        campoValores.style.backgroundColor = "#AAAAAA";
        botones.forEach(actual => {
            actual.classList.remove("btn-primary");
            actual.classList.add("btn-dark");
        });
        icono.textContent = "light_mode";
    }
    else {
        app.parentElement.style.backgroundColor = "#F7FBFC"
        nuevoDiv.style.backgroundColor = "#D6E6F2";
        campoResultado.style.backgroundColor = "#B9D7EA";
        campoValores.style.backgroundColor = "#B9D7EA";
        botones.forEach(actual => {
            actual.classList.remove("btn-dark");
            actual.classList.add("btn-primary");
        });
        icono.textContent = "dark_mode";
    }
    banderaOscura = !banderaOscura;
}

cambiarTema();