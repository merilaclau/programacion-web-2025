const nombre = 'Meri';
const apellido = 'Laclau';
const edadMeri = 37;
const esVegana = true;

let estudiosFinalizadosNull = null;
let estudiosFinalizadosUndefined;

// CONCATENAR TEXTO
const nombreCompletoConcatenado = 'Mi nombre es ' + nombre + ' ' + apellido;

// INTERPOLAR TEXTO
const nombreCompletoInterpolado = `Mi nombre es ${nombre} ${apellido}`;

// Suma
let edad = 5 + 5;
// Resta
edad = 10 - 5;
// Multiplicación
edad = 5 * 10;
// División
edad = 10 / 5;
// Módulo o resto
edad = 10 % 5;


// ASIGNACIONES ARITMÉTICAS
let numero = 100;

// AMBAS OPCIONES SUMAN 10 AL VALOR ORIGINAL
numero = numero + 10;
numero += 10;

console.log(numero); 

numero -= 10;
numero *= 2;
numero /= 4;


// COMPARACIONES
// Comparación estricta (valor y tipo de dato)
// igual
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false

// desigual
console.log(1 !== 2); // true
console.log(1 !== 1); // false

// Comparación no estricta (solo valor)
console.log(1 == 1); // true
console.log(1 == "1"); // true

console.log(1 > 2); // false
console.log(1 > 0); // true
console.log(1 > 1); // false

console.log(1 >= 2); // false
console.log(1 >= 0); // true
console.log(1 >= 1); // true

console.log(1 < 2); // true
console.log(1 < 0); // false
console.log(1 < 1); // false

console.log(1 <= 2); // true
console.log(1 <= 0); // false
console.log(1 <= 1); // true

// OPERADORES LÓGICOS
// Nos permiten hacer comparaciones y nos van a devolver un valor de tipo boolean

// && (Conjunción / AND )
// Sólo devuelve true si ambas variables o condiciones son true
console.log(esVegana && tieneMascotas);
// va a devolver true porque ambas variables son true
console.log(esVegana && fumaTabaco);
// va a devolver false porque sólo una de las variables es true

// || (Disyunción / OR )
// Devuelve true si al menos una condición o variable es true
console.log(esVegana || tieneMascotas);
// va a devolver true porque ambas variables son true
console.log(esVegana || fumaTabaco);
// va a devolver true porque al menos una de las variables es true

// ! (Negación / NOT )
// Invierte o niega el valor de una variable booleana
console.log(!fumaTabaco);
// va a devolver true porque fumaTabaco es originalmente false

// Método length
nombre.length();
// devuelve la cantidad de caracteres

// Método prompt
// abre una caja de diálogo en el navegador
prompt("Cómo te llamás");

// Método alert
// muestra un mensaje en el navegador
alert("Nombre inválido");

// ESTRUCTURAS DE CONTROL
/* Nos permiten controlar cómo va a ser el flujo de nuestro programa. 
Si se cumple una condición, sucederá una cosa, si se cumple otra, sucederá algo distinto.
*/

// IF
if (esVegana) {
  alert("Te preparo un hummus");
}

if (!esVegana) {
  alert("Te preparo un asado");
}

// IF, ELSE
if (esVegana) {
  alert("Te preparo un hummus");
} else {
  alert("Te preparo un asado");
}

// IF, ELSE IF, ELSE
if (!esVegana) {
  alert("Te preparo un asado");
} else if (!esVegana && fumaTabaco) {
  alert("Te preparo un pucho y un asado");
} else {
  alert("Te preparo un hummus");
}

// Tarea que hicimos en clases <3
const nombre2 = prompt("Decime tu nombre");
if (nombre2.length >= 1) {
  alert(`Bienvenide ${nombre}`);
} else {
  alert("Nombre inválido");
} 