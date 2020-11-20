// función (programación) -> un bloque de código que recibe parámetros, hace acciones muy específicas y retornar (o no) un valor

// Forma 1 -> ES5
/* function sayMyName(name) {
  const greeting = `Hola! ${name}`
  return greeting
} */

// Forma 2 -> ES6 (Arrow function)
const sayMyName = (name) => {
  const greeting = `Hola! ${name}`
  return greeting
}

const sayMyName2 = name => (`Hola! ${name}`)

const saludo = sayMyName2('Panchito')
console.log(saludo)