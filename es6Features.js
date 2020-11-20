// ES6 Feature


// 1. Spread operator ...[], ...{} -> // Toma todos los valores de un arreglo o de un objeto y los copia en un nuevo objeto

// 2. Unknown -> Si añades una propiedad, cuyo valor está almacenado en una variable con el mismo nombre de la propiedad, sólo pon la variable

// 3. Destructuring -> Permite definir variables a partir de propiedades que pertenecen a un objeto

const student = { firstName: 'Martín', lastName: 'Melo' }

/*const firstName = student.firstName
const lastName = student.lastName*/

const { firstName, lastName } = student
console.log('firstName', firstName)
console.log('lastName', lastName)

// Object.freeze(student)
const fullName = `${student.firstName} ${student.lastName}`
const age = 23

// student.fullName = fullName -> No funciona por el freeze

/*const newStudent = {
  firstName: student.firstName,
  lastName: student.lastName,
  fullName: fullName
} -> Funciona pero mucha talacha */ 

/* const testito = student
console.log('testito before', testito)
student.algo = 'algo'
console.log('testito after', testito) -> Crea referencia */ 

const newStudent = { ...student, fullName, age }
console.log(newStudent)
