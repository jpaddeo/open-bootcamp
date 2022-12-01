// IF
let numeroIf = -1;
if (numeroIf <= 0) {
  console.log('El numero es negativo o igual a cero');
} else {
  console.log('El numero es positivo');
}

// WHILE
let numeroWhile = 0;
while (numeroWhile <= 3) {
  console.log(numeroWhile);
  numeroWhile++;
}

// DO WHILE
let numeroDoWhile = 0;
do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 1);

// FOR
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// SWITCH
const estacion = 'verano';
switch (estacion) {
  case 'verano':
    console.log(`Que calor ${estacion}!`);
    break;
  case 'invierno':
    console.log(`Que frío ${estacion}!`);
    break;
  case 'primavera':
    console.log(`Templado ${estacion}`);
    break;
  case 'otoño':
    console.log(`Está fresco ${estacion}!`);
    break;
  default:
    console.log('No es ninguna de las estaciones');
    break;
}
