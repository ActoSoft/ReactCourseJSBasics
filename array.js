// Arreglos / Arrays
// Los arreglos se utilizan con corchetes []
const array = ['Arturo', 'Martín', 'Kemonito'];
//console.log(array);
// Se puede tener diferentes tipos de datos en un arreglo
const arreglito = ['Arturo', 24, 234.98, true, ['Martin', false, 12331], {color: 'rojito'}];
console.log(arreglito);
// Cómo acceder a un elemento de un arreglo con su índice
console.log(arreglito[4])
// Acceder a un elemento de un arreglo anidado (Un arreglo dentro de otro arreglo)
console.log(arreglito[4][2])
//Cómo saber cuántos elementos tiene mi arreglo
console.log(arreglito.length)
// Cómo acceder al último elemento de un arreglo
const long = arreglito.length
console.log(arreglito[long - 1])
//console.log(arreglito[arreglito.length - 1])
//Como extraer elementos de un arreglo
const arreglitoExtraido = arreglito.slice(0,3)
console.log(arreglitoExtraido)
//Agregar elementos a nuestro arreglo (Al final del arreglo)
arreglito.push('BadBunny')
arreglito.push('Anuel')
console.log(arreglito)
//Eliminar elementos de un arreglo (Elimina el último elemento), al igual que regresa ese elemento.
const ultimo = arreglito.pop()
console.log(arreglito)
console.log(ultimo)
//Eliminar el primer elemento de un arreglo, al igual que regresa ese elemento.
const yoMerenges = arreglito.shift()
console.log(arreglito)
console.log(yoMerenges)
// Como saber si un elemento existe en un arreglo (Regresa un valor booleano)
const incluye = arreglito.includes('Martin')
//const incluye = arreglito[3].includes('Martin')
console.log(incluye)

// ¿Cómo mostrar el elemento que estoy buscando dentro de un elemento?
const found = arreglito.find(function (value) {
  return value === 234.99 
})

console.log('LO ENCONTRE', found)