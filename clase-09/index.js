// REPASO IF
/* 
Cuál es la diferencia entre estos dos bloques de código?
*/

// En este primer caso, se muestra por consola "Hola, vos" o "Todo bien". Es uno o el otro.
const debeTutear = true

if (debeTutear) {
    console.log("Hola, vos")
} else {
    console.log("Todo bien?")
}


// En este segundo caso, se muestran ambos porque el segundo console.log no está sujeto a ninguna condición
const debeTutear2 = true

if (debeTutear2) {
    console.log("Hola, vos")
} 

console.log("Todo bien?")

// OPERADOR TERNARIO
// Es una forma abreviada de hacer un if/else y asignar valor a una variable al mismo tiempo

const tieneDescuento = true
const precioFinal = tieneDescuento ? 20 : 100
// Si tiene descuento es true, el precio final será 20, si no, será 100


// IF o SWITCH?
/* Escribir un programa que pida ingresar un número del 1 al 12 por prompt 
y que devuelva por alert el nombre de mes correspondiente. 
Hacerlo primero con if-else if y después con switch. */

const numero = prompt("Ingresá un número del 1 al 12");

// versión con if - else if
if (numero === "1") {
  alert("El mes es enero");
} else if (numero === "2") {
  alert("El mes es febrero");
} else if (numero === "3") {
  alert("El mes es marzo");
} else if (numero === "4") {
  alert("El mes es abril");
} else if (numero === "5") {
  alert("El mes es mayo");
} else if (numero === "6") {
  alert("El mes es junio");
} else if (numero === "7") {
  alert("El mes es julio");
} else if (numero === "8") {
  alert("El mes es agosto");
} else if (numero === "9") {
  alert("El mes es septiembre");
} else if (numero === "10") {
  alert("El mes es octubre");
} else if (numero === "11") {
  alert("El mes es noviembre");
} else if (numero === "12") {
  alert("El mes es diciembre");
} else {
  alert("No corresponde a un mes");
}

// Versión con switch
switch (numero) {
  case "1":
    alert("El mes es enero");
    break;
  case "2":
    alert("El mes es febrero");
    break;
  case "3":
    alert("El mes es marzo");
    break;
  case "4":
    alert("El mes es abril");
    break;
  case "5":
    alert("El mes es mayo");
    break;
  case "6":
    alert("El mes es junio");
    break;
  case "7":
    alert("El mes es julio");
    break;
  case "8":
    alert("El mes es agosto");
    break;
  case "9":
    alert("El mes es septiembre");
    break;
  case "10":
    alert("El mes es octubre");
    break;
  case "11":
    alert("El mes es noviembre");
    break;
  case "12":
    alert("El mes es diciembre");
    break;
  default:
    alert("No corresponde a un mes");
}

// FUNCIONES
// Usamos la palabra clave function para declararlas
function obtenerMes() {
  const numero = prompt("Ingresá un número del 1 al 12");
  switch (numero) {
    case "1":
      alert("El mes es enero");
      break;
    case "2":
      alert("El mes es febrero");
      break;
    case "3":
      alert("El mes es marzo");
      break;
    case "4":
      alert("El mes es abril");
      break;
    case "5":
      alert("El mes es mayo");
      break;
    case "6":
      alert("El mes es junio");
      break;
    case "7":
      alert("El mes es julio");
      break;
    case "8":
      alert("El mes es agosto");
      break;
    case "9":
      alert("El mes es septiembre");
      break;
    case "10":
      alert("El mes es octubre");
      break;
    case "11":
      alert("El mes es noviembre");
      break;
    case "12":
      alert("El mes es diciembre");
      break;
    default:
      alert("No corresponde a un mes");
  }
  // el return hace que pueda devolver un valor. Es opcional, sólo se usa el return si se necesita hacer algo con ese valor más adelante
  return numero;
}

// Para invocar las funciones y hacer que se ejecute su código, usamos su nombre y los paréntesis
obtenerMes();


// FUNCIONES DENTRO DE FUNCIONES
function obtenerMensajeDeCumple() {
  const mesCumpleMeri = "5";
  const mesElegido = obtenerMes();

  if (mesElegido === mesCumpleMeri) {
    console.log("Feliz cumple Meri");
  } else {
    console.log("A llorar a la iglesia");
  }
}

// ALCANCE ("scope" en inglés)
// Qué pasa si escribo 
console.log(mesCumpleMeri) // Esto devuelve un error en la consola porque la variable mesCumpleMeri sólo existe dentro de la funcion obtenerMensajeDeCumple


// EJERCICIOS
//1.
/***********************************************
 *
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion le paso nombre y apellido como parámetro
 * 3. Toma ese nombre y me dice
 *    "Hola <nombre> <apellido>" en un alert.
 *
 ***********************************************/

function saludo(nombre, apellido) {
  alert(`Hola ${nombre} ${apellido}`);
}

saludo("Celeste", "Cabrera");
saludo("Meri", "Laclau");


function saludoMarta() {
  const nombre = "Marta";
  alert(`Hola ${nombre}`);
}

// Por qué conviene usar la función saludo en vez de saludoMarta? Porque saludoMarta sólo aplica a un caso particular y la otra es más escalable

// VALORS POR DEFECTO EN LOS PARÁMETROS
function saludo(nombre = "desconocide", apellido = "sin apellido") {
  alert(`Hola, ${nombre} ${apellido}`);
}

saludo("Meri", "Laclau"); // retorna "Hola, Meri Laclau"

saludo(); // retorna "Hola, desconocide sin apellido"

saludo("Meri"); // retorna "Hola, Meri sin apellido"


//2.
/***********************************************
 *
 * Hacer una funcion para elevar un
 * número al cuadrado. El numero va por param
 *
 ***********************************************/

function numeroAlCuadrado(numero) {
  return numero * numero;
}

numeroAlCuadrado(2); // retorna un 4

numeroAlCuadrado(5); // retorna un 25


//3.
/***********************************************
 *
 * Hacer una funcion para sumar dos números. 
 * Los números van por param
 *
 ***********************************************/
function suma(numero1, numero2) {
  return numero1 + numero2;
}

// FUNCIONES DE FLECHA 
// Es una forma abreviada de escribir una función y se asigna a una constante.
const suma = (numero1, numero2) =>
  console.log(`Los números ingresados son ${numero1} y ${numero2}`);

