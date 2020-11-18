// Objetos

// Declarando objeto
const persona = {
  firstName: 'Martín',
  lastName: 'Melo Godínez',
  age: 23,
  gender: 'Masculino',
}

// Acceder a un atributo del objeto
console.log(`Hola, ${persona.firstName} ${persona.lastName}. Espero que estés muy bien`)

  // Forma alternativa
  console.log('Edad:', persona['age'])

// Agregar nueva propiedad a un objeto ya declarado
persona.phoneNumber = '7721231231'
// Actualizar un propiedad
persona.age = 24

// Eliminar una propiedad de un objeto
delete persona.gender

console.log(persona)

const users = [
  {
    firstName: 'Pepito',
    lastName: 'Juarez',
    email: 'pepito@juarez.com',
    phone: '1234'
  },
  {
    firstName: 'Arturo',
    lastName: 'Covarrubias',
    email: 'cova@cova.com',
    phone: '4321'
  }
]

// Convertir objetos en arreglos

// 1. Almacenar sólo las claves
const keys = Object.keys(persona)
console.log('keys', keys)

// 2. Almacenar sólo los valores
const values = Object.values(persona)
console.log('values', values)
// 3. Almacenamos tanto la clave como el valor
const pairs = Object.entries(persona)
console.log('pairs', pairs)

const newPersona = Object.fromEntries(pairs)
console.log('abr', newPersona)

