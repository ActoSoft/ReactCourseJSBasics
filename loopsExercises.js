// Métodos de arreglos para iterarlos

const promociones = ['Macbook', 'Xiaomi','Sony', 'ASUS', 'GoPro']

/* for (const promocion of promociones) {
  console.log(`Los artículo ${promocion} se encuentran en rebaja`)
} */

const forEachCallback = (value, index) => {
  console.log('Valor:', value)
  console.log('Índice:', index)
  console.log('------------------------')
}

// forEach
//promociones.forEach(forEachCallback)

// EJERCICIO
const promocionesFull = [
  {
    producto: 'Macbook Pro 2019',
    precioOriginal: 55000,
    descuentoPercetage: 10 
  },
  {
    producto: 'Xiaomi Redmi Note 10',
    precioOriginal: 10000,
    descuentoPercetage: 15 
  },
  {
    producto: 'PlayStation 5',
    precioOriginal: 15000,
    descuentoPercetage: 20 
  },
  {
    producto: 'SSD ADATA 480 GB',
    precioOriginal: 1300,
    descuentoPercetage: 21 
  },
]

/* const myCallback = (obj, index) => {
  const precioConDescuento = obj.precioOriginal * (1 - (obj.descuentoPercetage / 100) ) 
  const message = `Aprovecha el buen fin y adquiere el ${obj.producto} que tiene un precio de $${obj.precioOriginal} y cuenta con un ${obj.descuentoPercetage}% de descuento, por lo que sólo pagarías $${precioConDescuento}`;
  console.log(message)
} */

// promocionesFull.forEach(myCallback);

promocionesFull.forEach((obj, index) => {
  const precioConDescuento = obj.precioOriginal * (1 - (obj.descuentoPercetage / 100) ) 
  const message = `Aprovecha el buen fin y adquiere el ${obj.producto} que tiene un precio de $${obj.precioOriginal} y cuenta con un ${obj.descuentoPercetage}% de descuento, por lo que sólo pagarías $${precioConDescuento}`;
  console.log(message)
})

// Filter -> Filtrar elementos de un arreglo por un criterio o condición
const promocionesDescuentoMamalon = promocionesFull.filter(obj => {
  return obj.descuentoPercetage > 19
})

console.log('Filtrados', promocionesDescuentoMamalon)

// Aprovecha el buen fin y adquiere el Xbox One que tiene un precio de $14000.00 y cuenta con un 30% de descuento, por lo que sólo pagarías $9800.00