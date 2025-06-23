// FILTER
// Se usa para filtrar elementos según una condición.
// Devuelve un nuevo array con solo los elementos que cumplen esa condición.

const edades = [12, 18, 25, 30, 15];

// Filtramos las edades mayores o iguales a 18
const mayores = edades.filter(edad => edad >= 18);

console.log(mayores); // [18, 25, 30]


// FIND
// Devuelve el primer elemento que cumpla una condición.
// Si no encuentra ninguno, devuelve undefined.
// A diferencia de filter, find devuelve un solo valor, no un array.

const nombres = ["Ana", "Luis", "Carlos", "Marta"];

// Buscamos el primer nombre que empiece con "C"
const resultado = nombres.find(nombre => nombre.startsWith("C"));

console.log(resultado); // "Carlos"


// OBJETOS
// Se crean abriendo y cerrando llaves. Sus propiedades y métodos se separan con coma. 
// La asignación de valor de sus propiedades se hace con dos puntos (:)
// Sus propiedades pueden ser de tipo string, number, boolean, array o incluso objetos dentro de objetos.

const persona = {
    nombre: 'Meri',
    apellido: 'Laclau',
    edad: 37,
    mascotas: [ 'Bellota', 'Beluga', 'Pirulo', 'Pochoclo'],
    esProgramadora: true,
    armarNombreCompleto: function() { console.log(`${this.nombre} ${this.apellido}`) },
    domicilio: {
        calle: 'Alvear',
        numero: 1234,
        ciudad: 'CABA'
    },
    fisionomia: {
        colorDePelo: 'Negro',
        colorDeOjos: 'Marrones',
        medidas: {
            altura: 1.60,
            peso: 55
        }
    }
};

// Para acceder a los elementos usamos el punto
console.log(persona.apellido);
// retorna 'Laclau'

persona.edad = 18;
// reasigna el valor de edad a 18

// También podemos asignar variables y su propiedad tendrá el mismo nombre que la variable.
const nombre = 'Pirulo';
const edad = 5;
const especie = 'Gato';
const comidaPreferida = 'atún'

const pirulo = {
    nombre,
    edad,
    especie,
    cenaPreferida: comidaPreferida,
    hermanites: [ 'Pochoclo', 'Derrida' ]
};