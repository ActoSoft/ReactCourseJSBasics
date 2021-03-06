const students = [
  {
    firstName: 'Arturito',
    lastName: 'Papucho',
    calif1: 7,
    calif2: 8.8,
    calif3: 8.5
  },
  {
    firstName: 'Emily',
    lastName: 'García',
    calif1: 9,
    calif2: 8.5,
    calif3: 10
  },
  {
    firstName: 'Noe',
    lastName: 'Estrada',
    calif1: 8,
    calif2: 8,
    calif3: 6
  },
  {
    firstName: 'Raúl',
    lastName: 'Sánchez',
    calif1: 9,
    calif2: 5,
    calif3: 8
  },
]
// 1. Por cada estudiante, guardar dentro del objeto el NOMBRE COMPLETO DEL ESTUDIANTE.
// 2. Por cada estudiante, guardar dentro del objeto el promedio de sus calificaciones
// 3. Filtrar los estudiantes y quedarme únicamente con aquellos que tienen un promedio mayor a 8
// 4. Imprimir los estudiantes encontrados en el paso 3 de la siguiente manera: 
// El alumno Pepito Perez tuvo un promedio de 11 y se ganó unos chetos.
const studentsWithAvg = students.map(student => {
  const { firstName, lastName, calif1, calif2, calif3 } = student
  const fullName = `${firstName} ${lastName}`
  const average = (calif1 + calif2 + calif3) / 3
  const newStudent = { ...student, fullName, average }
  return newStudent
})
const intelligentStudents = studentsWithAvg.filter(student => {
  return student.average >= 8
})
intelligentStudents.forEach(student => {
  const { fullName, average } = student
  console.log(`El alumno o alumna ${fullName} tuvo un promedio de ${average} y se ganó unos chetos.`)
  console.log('')
})