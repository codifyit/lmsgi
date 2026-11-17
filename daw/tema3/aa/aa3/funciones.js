  /**
 * Comprueba si un número es primo.
 * @param {number} numero - El número a comprobar.
 * @returns {string} Un mensaje indicando si el número es primo o no.
 */
export function esPrimo(numero) {
  //se consideran primos los números mayores o iguales a 2
  if (numero < 2) {
    return "El número " + numero + " no es primo";
  }
  //comprobamos si existe un divisor distintos de 1 y del propio número,
  //si existe, el número no es primo
  let i = 2;
  do {
    i++;
  }while(i<numero && numero % i !== 0);
  if(numero%i===0)
    return "El número " + numero + " no es primo";
  //si hemos llegado hasta aquí, el número es primo
  return "El número " + numero + " es primo";
}
/**
 * Comprueba si un número es capicúa.
 * @param {number} numero - El número a comprobar.
 * @returns {string} Un mensaje indicando si el número es capicúa o no.
 */
export function esCapicua(numero) {
  let resto = numero;
  let alReves = 0;
  //invertimos el número
  while (resto > 0) {
    const ultimaCifra = resto % 10;
    alReves = alReves * 10 + ultimaCifra;
    resto = (resto - ultimaCifra) / 10;
  }
  if (alReves === numero) {
    return "El número " + numero + " es capicúa";
  }
  return "El número " + numero + " no es capicúa";
}
/**
 * Cuenta los múltiplos del divisor existentes entre el número inicial y el número final.
 * @param {number} inicio - El número inicial del rango.
 * @param {number} fin - El número final del rango.
 * @param {number} divisor - El número por el que se quieren encontrar múltiplos.
 * @returns {string} Un mensaje indicando la cantidad de múltiplos encontrados.
 */
export function contarMultiplos(inicio, fin, divisor) {
  let contador = 0;
  for (let i = inicio; i <= fin; i++) {
    if (i % divisor === 0) {
      contador++;
    }
  }
  return "Entre " + inicio + " y " + fin + " hay " + contador + " múltiplos de " + divisor;
}
/**
 * Encuentra el mayor número en un array y su posición.
 * @param {number[]} numeros - El array de números.
 * @returns {string} Un mensaje indicando el mayor número y su posición.
 */
export function mayorYPosicion(numeros) {
  //asumimos que el primer número es el mayor y su posición es 0
  let mayor = numeros[0];
  let posicion = 0;
  //recorremos el array desde la segunda posición hasta el final
  //para buscar si hay algún número mayor que el actual mayor
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
      posicion = i;
    }
  }
  return "El mayor es " + mayor + " y está en la posición " + posicion;
}
/**
 * Calcula el precio total de las entradas de cine, aplicando descuentos si es necesario.
 * @param {number} numEntradas - El número de entradas a comprar.
 * @param {number} precioUnitario - El precio unitario de cada entrada.
 * @param {boolean} esEstudiante - Indica si el comprador es estudiante.
 * @returns {string} Un mensaje indicando el precio total a pagar.
 */
export function precioEntradas(numEntradas, precioUnitario, esEstudiante) {
  let total = numEntradas * precioUnitario;
  if (esEstudiante) {
    total = total - total * 20 / 100;
  }
  if (numEntradas >= 10) {
    total = total - total * 10 / 100;
  }
  return "Total a pagar por " + numEntradas + " entradas: " + total + " €";
}

