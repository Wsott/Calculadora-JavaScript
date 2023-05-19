let app = document.getElementById("app");
app.style.marginTop = "25vh";

let nuevoDiv = document.createElement("div");
nuevoDiv.setAttribute("class", "container text-center card p-4 ");
nuevoDiv.setAttribute("style", "max-width: 30vw");
app.appendChild(nuevoDiv);

let banderaParentesis = true;

let teclas = [
    "C", "/", "*", "CE", 
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "()",
    "0", ".", "+-", "="];

let contenedorTema = document.createElement("div");
contenedorTema.setAttribute("class", " d-flex justify-content-center");
nuevoDiv.appendChild(contenedorTema);

let campoValores = document.createElement("input");
campoValores.setAttribute("class", "row form-control text-center");
campoValores.setAttribute("readonly", true);
campoValores.setAttribute("style", "font-weight: bolder;");
contenedorTema.appendChild(campoValores);

contenedorTema = document.createElement("div");
contenedorTema.setAttribute("class", "d-flex justify-content-center");
nuevoDiv.appendChild(contenedorTema);

let campoResultado = document.createElement("input");
campoResultado.setAttribute("class", "my-3 row form-control text-center");
campoResultado.setAttribute("readonly", true);
campoResultado.setAttribute("style", "font-weight: bolder;");
campoResultado.value = "Resultado: 0";
contenedorTema.appendChild(campoResultado);

let seccion;
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

function termino() {
    campoValores.value += (banderaParentesis)? "(": ")";
    banderaParentesis = !banderaParentesis;
}

function calcular() {
    campoResultado.value = "Resultado: " + eval(campoValores.value);
    borrarTodo();
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