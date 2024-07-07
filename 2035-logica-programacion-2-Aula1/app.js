let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function handleTryClick() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero es menor");
    } else {
      asignarTextoElemento("p", "El numero es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function condicionesInciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Escoge un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numero = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numero);
  console.log(numerosSorteados);

  if (numerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se asignaron todos los numeros posibles");
  } else {
    if (numerosSorteados.includes(numero)) {
      return generarNumeroSecreto();
    } else {
      numerosSorteados.push(numero);
      return numero;
    }
  }
}

function handleNewGame() {
  //limpiamos la caja
  limpiarCaja();
  //mensajes iniciales
  //generamos el numero secreto
  //inicializamos los intentos
  condicionesInciales();
  //desabilitamos el boton de reiniciar juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesInciales();
