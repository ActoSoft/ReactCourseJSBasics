// Ciclos
const array = ['uno', 'dos', 'tres']
// for normal 
for (let i = 0; i < 10; i++) {
  console.log(i)
}
//for in (regresa el indice)
for (const i in array) {
  console.log(i)
}
//for of (regresa el elemento)
for (const value of array) {
  console.log(value)
}
// While
let numerito = 0
while(numerito < 10) {
  console.log(numerito)
  numerito += 1
}
// Do while
let result = '';
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);