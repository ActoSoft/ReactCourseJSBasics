// Pa comentar una línea
/* Pa comentar un block */

// Variables

// 1. var -> Permite re-declarar la variable, utilizado para variables globales
var testito = 'hola';
console.log(testito);
var testito = 'adios';
console.log(testito);

// 2. let -> No permite re-declarar la variable
let testote = 'hola';
console.log(testote);
let testote = 'adios';
console.log(testote);

// 3. const -> No podemos cambiar su valor durante la ejecución.
const a = 5;
a = 123;
console.log(a);