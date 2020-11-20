const ranges = [
  { max: 10, min: 5 },
  { max: 25, min: 2 },
  { max: 37, min: 1 },
  { max: 1, min: -1 },
  { max: 50, min: 48 },
  { max: 80, min: 53 },
  { max: 2, min: -8 },
]

// 1. Calcular el valor intermedio del rango
// 2. Guardar dicho valor intermedio del rango
// 3. Quedarme con los rangos cuyo valor intermedio sea mayor a 30
// 4. Sumar los valores intermedio de los rangos que cumplen con la condicion anterior e imprimir el resultado de la suma

const rangesWithMiddle = ranges.map(range => {
  range.middle = (range.max + range.min) / 2
  return range
}).filter(range => range.middle >= 30)

let suma = 0
rangesWithMiddle.forEach(range => {
  suma += range.middle
})

console.log('La suma es:', suma)