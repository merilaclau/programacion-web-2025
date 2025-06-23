// REPASO ARRAYS
// Un array (o arreglo) es una lista ordenada de valores. Sirve para guardar varios valores en una sola variable.
// Un array de números
const numeros = [10, 20, 30, 40];

// Un array de strings (texto)
const frutas = ["manzana", "banana", "pera"];

// Un array de booleanos
const respuestas = [true, false, true];


// ÍNDICE (index)
// Cada elemento en un array tiene una posición, que se llama índice. El índice empieza desde 0, no desde 1.
const colores = ["rojo", "verde", "azul"];

console.log(colores[0]); // "rojo"
console.log(colores[1]); // "verde"
console.log(colores[2]); // "azul"


// CAMBIOS DE VALOR
// Aunque usamos const, podemos cambiar los elementos internos del array porque no estamos cambiando la referencia, solo su contenido. 
// Lo que no podemos es cambiar todo el array por otro array.
const dias = ["lunes", "martes", "miércoles"];

dias[1] = "viernes"; // modificamos un elemento del array (el array sigue siendo el mismo)

console.log(dias); // ["lunes", "viernes", "miércoles"]


// BUCLE FOR
const numeros = [5, 10, 15, 20];

for (let i = 0; i < numeros.length; i++) {
  
  console.log("Índice:", i, "Valor:", numeros[i]);
}


// Sumar todos los elementos de un array
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log("Suma total:", suma); // 15

// Crear un nuevo array con valores modificados
const edades = [10, 15, 20];
const edadesDobles = [];

for (let i = 0; i < edades.length; i++) {
  edadesDobles.push(edades[i] * 2);
}

console.log(edadesDobles); // [20, 30, 40]

// Contar cuántos valores cumplen una condición
const notas = [8, 4, 7, 10, 3];
let aprobados = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 6) {
    aprobados++;
  }
}

console.log("Cantidad de aprobados:", aprobados); // 3


// Length
const animales = ["perro", "gato", "conejo", "loro"];

console.log("Cantidad de animales:", animales.length); // 4


// Comprobar si un array está vacío con length
const tareas = [];

if (tareas.length === 0) {
  console.log("No hay tareas pendientes.");
} else {
  console.log("Tienes", tareas.length, "tareas pendientes.");
}


// Length + bucle for
const colores = ["rojo", "verde", "azul"];

for (let i = 0; i < colores.length; i++) {
  console.log("Color:", colores[i]);
}



// FOR EACH
// Se usa para recorrer un array y ejecutar una función por cada elemento. 
// No devuelve un nuevo array; simplemente hace algo con cada elemento.
// Es como un for más elegante
// La arrow function que usamos como param se llama callback

const frutas = ["manzana", "banana", "pera"];

frutas.forEach((fruta, index) => {
  console.log("Índice:", index, "Fruta:", fruta);
});


// MAP
// Se usa para crear un nuevo array a partir de otro, aplicando una transformación a cada elemento.
// Siempre devuelve un nuevo array del mismo largo que el original.
// También requiere de un callback como param
const numeros = [1, 2, 3, 4];

// Multiplicamos cada número por 10
const multiplicados = numeros.map(numero => numero * 10);

console.log(multiplicados); // [10, 20, 30, 40]
