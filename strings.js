// Strings

// Podemos utilizar tanto comillas simples ('') como comillas dobles ("")

// Declarar un string
const texto = 'Hola Mundo!'

// Concatenación
const nombre = 'Martín'

// 1. Operador +
console.log('Hola! ' + nombre)

// 2. Operador , (agrega un espacio por defecto)
console.log('Hola!', nombre)

// 3. Template strings (ES6)
console.log(`Hola! ${nombre}`)
const name = 'Pedro'
const lastName = 'Sola'
const fullName = `${name} ${lastName}`
console.log(fullName)

// Split
const nombreCompleto = 'Martin-Melo-Godinez'

const nombresSeparados = nombreCompleto.split('-')

console.log(nombresSeparados)

// Join
const nombreCompletoArray = [ 'Martin', 'Melo', 'Godinez' ]
const nombreJoin = nombreCompletoArray.join(' ')
console.log(nombreJoin)

// Replace
const codigoPostal = 'Codigo Postal: %CP%'
const newCP = codigoPostal.replace('%CP%', '42039')
console.log(newCP)

// To Lower Case
const presio = "PRESIO"
console.log(presio.toLowerCase(presio))

// Length (para arrays también)
const palabrota = "parangaricutirimicuaro"
console.log(palabrota.length)