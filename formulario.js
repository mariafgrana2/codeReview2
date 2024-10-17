//Se implementa el uso de const en lugar de var
//Se añade ";"
const formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.prevent();
  
  const n = formulario.elements["name"];
  const a = formulario.elements["age"];
  const na = formulario.elements["nationality"];

  const nombre = n.value;
  const edad = a.value;

  const i = na.selectedIndex;
  const nacionalidad = na.options[i].value;

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

const lista = document.getElementById("guest-list")

const elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}