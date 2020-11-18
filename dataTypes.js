// Tipos de Datos

// 1. string (no existe char)
let texto = 'hola como estás';
console.log('string', texto);
console.log('typeof texto', typeof(texto))

// 2. number (no existe float, double o int)
let presioSiEsConEse = 16.26;
console.log('number', presioSiEsConEse);
console.log('typeof presioSiEsConEse', typeof(presioSiEsConEse))

// 3. boolean (true o false)
let esParaMi = true;
console.log('boolean', esParaMi);
console.log('typeof esParaMi', typeof(esParaMi))

// 4. NaN (Not a Number)
let noEsNumero = 'hola' * 5;
console.log('NaN', noEsNumero);
console.log('typeof noEsNumero', typeof(noEsNumero))

// 5. null
let nulo = null;
console.log('null', nulo);
console.log('typeof nulo', typeof(nulo))

// 6. undefined
let a;
console.log('undefined', a);
let array = [];
console.log('undefined', array[0]);
let objetito = {};
console.log('undefined', objetito.nombre);
console.log('typeof a', typeof(a));