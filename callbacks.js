// callbacks -> función que recibe como parámetro otra función

const suma = (num1, num2) => num1 + num2

const resta = (num1, num2) => num1 - num2

const operacion = (num1, num2, ope) => {
  return ope(num1, num2)
}

console.log('suma', operacion(5, 7, suma))

console.log('resta', operacion(10, 2, resta))
