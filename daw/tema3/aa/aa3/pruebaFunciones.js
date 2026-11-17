import { esPrimo, esCapicua, contarMultiplos,
    mayorYPosicion, precioEntradas } from './funciones.js';

//Pruebas de la función esPrimo
console.log(esPrimo(7));
console.log(esPrimo(12));
console.log(esPrimo(1));
console.log(esPrimo(29));

//Pruebas de la función esCapicua
console.log(esCapicua(1221));
console.log(esCapicua(12345));
console.log(esCapicua(7));
console.log(esCapicua(4554));

//Pruebas de la función contarMultiplos
console.log(contarMultiplos(1, 20, 3));
console.log(contarMultiplos(10, 50, 10));
console.log(contarMultiplos(1, 5, 7));

//Pruebas de la función mayorYPosicion
console.log(mayorYPosicion([4, 9, 2, 7]));
console.log(mayorYPosicion([15, 3, 8]));
console.log(mayorYPosicion([-5, -2, -9, -1]));

//Pruebas de la función precioEntradas
console.log(precioEntradas(2, 8, false));
console.log(precioEntradas(2, 8, true));
console.log(precioEntradas(10, 5, false));
console.log(precioEntradas(10, 5, true));