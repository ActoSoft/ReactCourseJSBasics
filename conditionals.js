// Condicionales

//Operadores Lógicos (?)
// > mayor qué
// < menor qué
// >= Mayor o igual qué
// <= Menor o igual qué
// == igual qué (valor)
// === igual qué (valor y tipo)
// != diferente a (valor)
// !== diferente a (valor y tipo)
// && si dos condiciones se cumplen regresa verdadero (y) 
// || una condicion se cumple regresa verdadero (o)
// Valores truthy & falsy
// 7 es truthy
// '' es falsy
// 0 es falsy
const calificacion = 4;
const puntosExtra = false;
// if, else, else if
if (calificacion >= 7) {
  console.log('APROBASTE!');
} else if (puntosExtra) {
  console.log('Te podemos echar la mano');
} else {
  console.log('Ya mejor ponte a barrer');
}
// Switch (valida una variable y ejecuta dependiendo su valor)
const compra = 'platano'
switch (compra) {
  case 'peras':
    console.log('Si tenemos peritas, pasele werito');
    break;
  // Como ejecutar una acción para varios casos
  case 'manzana':
  case 'durazno':
    console.log('De a 10 la bolsita');
    break;
  case 'sandia':
    console.log('Bien rojita acá dioy');
    break;
  default:
    console.log('jijo, no tenemos');
    break;
}
// Operadores ternarios
const chelas = 4;
// Cuando ocupamos ejecuciones si se cumple o no
chelas >= 10 ? console.log('no hay pedo, hay peda') : console.log('ahora si hay pedo, porque no hay para peda')
// Si no necesitamos ejecución cuando no se cumple
chelas >= 10 && console.log('no hay pedo, hay peda')
//if(chelas >= 10) {
//  console.log('no hay pedo, hay peda')
//} else {
//  console.log('ahora si hay pedo, porque no hay para peda')
//}
const tortilla = 'gruesa'
const quesito = false
if (tortilla === 'gruesa' && quesito) {
  console.log('ya tienes unas quekas bien perronas')
} else {
  console.log('No te puedes preparas unas kekonas :(')
}
if (tortilla === 'delgadita' || quesito) {
  console.log('Ya nomás te falta una cosa para desayunar')
} else {
  console.log('Ya vete al mercado porque te vas a morir de hambre')
}