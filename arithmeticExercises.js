// Programa que calcule la suma y multiplicación de 3 números

// Entrada

// Con números random
const max = 20;
const min = 10;
// let num1 = Math.round(Math.random() * (max - min) + min);
// let num2 = Math.round(Math.random() * (max - min) + min);
// let num3 = Math.round(Math.random() * (max - min) + min);

// Desde el teclado
let num1 = Number(prompt('Ingresa el primer número'));
let num2 = Number(prompt('Ingresa el segundo número'));
let num3 = Number(prompt('Ingresa el tercer número'));


console.log('Num1', num1);
console.log('Num2', num2);
console.log('Num3', num3);

// Proceso
const suma = num1 + num2 + num3
const multiplicacion = num1 * num2 * num3

// Salida
console.log('Suma', suma)
console.log('Multiplicacion', multiplicacion)