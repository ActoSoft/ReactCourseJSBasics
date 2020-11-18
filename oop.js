// OOP -> POO -> Programación Orientada a Objectos en JS

class Cellphone {

  // metodos -> llamar(), mandarMensaje(), recargar(), tomarFotos(), instalarAplicacion()
  constructor(marca, nombre, almacenamiento, RAM, color, numero, saldoDisponible = 0) {
    this.marca = marca
    this.nombre = nombre
    this.almacenamiento = almacenamiento
    this.freeSpace = almacenamiento
    this.RAM = RAM
    this.color = color
    this.numero = numero
    this.saldoDisponible = saldoDisponible
    this.costoMinLlamada = 5
    this.costoMensajeTexto = 0.80
  }

  // method
  getCellphoneInfo = () => {
    return `Soy un ${this.marca} ${this.nombre}, y tengo de almacenamiento ${this.almacenamiento} GB`
  }

  // recargar
  recharge = (amount) => {
    this.saldoDisponible += amount
    return `Saldo actualizado: ${this.saldoDisponible}`
  }

  // Crear metodo que reciba la cantidad de minutos de una llamada y descuente del crédito lo correspondiente

  call = (minutes) => {
    const callTotal = (this.costoMinLlamada * minutes)

    if (this.validateSaldo(callTotal)) {
      this.saldoDisponible -= callTotal
      return `Después de la llamada de ${minutes} minutos, su saldo disponible es de: ${this.saldoDisponible}`
    }
    return this.getInsufficientSaldo()
  }

  // Crear metodo que indique que se envio UN mensaje de texto y descontar del saldo lo correspondiente
  messageSent = () => {

    if (this.validateSaldo(this.costoMensajeTexto)) {
      this.saldoDisponible -= this.costoMensajeTexto
      return `Se realizó un mensaje de texto, ahora su saldo disponible es de: ${this.saldoDisponible}`
    }
    return this.getInsufficientSaldo()
  }

  validateSaldo = (amountToDiscount) => {
    return this.saldoDisponible >= amountToDiscount
  }

  validateAlmacenamiento = (appToInstallSize) => {
    return this.freeSpace >= appToInstallSize
  }

  getInsufficientSaldo = () => `No cuentas con el saldo disponbile para hacer esta acción`

  getInsufficientAlmacenamiento = () => `No cuentas con el almacenamiento disponible para hacer esta acción`

  // Metodo para instalar una aplicación, debe de decirme la cantidad de espacio libre que me queda en el almacenamiento, recibir la cantidad de mb de la aplicación

  installApp = (appSize, name) => {
    const appSizeInGB = appSize / 1000
    if (this.validateAlmacenamiento(appSizeInGB)) {
      this.freeSpace -= appSizeInGB
      return `Se instaló la aplicación ${name}. Espacio disponible después de la instalación ${this.freeSpace} GB`
    }
    return this.getInsufficientAlmacenamiento()
  }
}

const xiaomi = new Cellphone('Xiaomi', 'Redmi Note 7', 64, 4, 'Negro', '1234', 0)
console.log(xiaomi.getCellphoneInfo())
// console.log(xiaomi.recharge(50))
// console.log(xiaomi.recharge(100))
console.log(xiaomi.call(10))
console.log(xiaomi.messageSent())
console.log(xiaomi.installApp(500, 'Fornais'))
console.log(xiaomi.installApp(60000, 'NodeModules'))
console.log(xiaomi.installApp(4000, 'COD'))

const samsung = new Cellphone('Samsung', 'A50', 128, 6, 'Rojo', '5678', 200)
// console.log(samsung.getCellphoneModel())
