const notas = [7, 4.5, 9, 6]
notas.push(8) // añadir al final
console.log(notas.length, notas[0]) // 5 7

// Métodos de arrays
// filter, map, reduce, some, sort
// filter: devuelve un array con los elementos que cumplen la condición
const aprobadas = notas.filter((n) => n >= 5) // [7, 9, 6, 8]
// map: devuelve un array con los resultados de aplicar la función a cada elemento
const redondeadas = notas.map((n) => Math.round(n)) // [7, 5, 9, 6, 8]
// reduce: devuelve un único valor acumulando los resultados de aplicar la función a cada elemento
const media = notas.reduce((suma, n) => suma + n, 0) / notas.length
// some: devuelve true si algún elemento cumple la condición
const hayDiez = notas.some((n) => n === 10) // false
// sort: ordena el array según la función de comparación
//[...notas]: hacer una copia
/*Los tres puntos son el operador de propagación (spread). «Sacan» todos los elementos 
de notas, y los corchetes los meten en un array nuevo. El resultado es una copia: [7, 4.5, 9, 6, 8]
Hace falta copiar porque sort, a diferencia de map, modifica el array sobre el que actúa. Si 
escribieras notas.sort(…), perderías el orden original de notas. Por eso el comentario dice «copia ordenada».*/
const ordenadas = [...notas].sort((a, b) => a - b) // copia ordenada

// Objetos: pares clave-valor
const alumno = {
  nombre: 'Ana',
  curso: 1,
  modulos: ['LMSGI', 'BD'],
  // método: función dentro de un objeto
  saludar() {
    return `Soy ${this.nombre}`
  },
}
alumno.email = 'ana@mail.com' // añadir valor apropiedad
const { nombre, curso } = alumno // desestructuración

// JSON: el formato de intercambio de datos de la web
const json = JSON.stringify(alumno) // objeto → texto
const copia = JSON.parse(json) // texto → objeto

console.log('Media:', media.toFixed(2))
console.log(
  'Aprobadas:',
  notas.filter((n) => n >= 5),
)

alumno = { nombre: 'Ana', curso: 1 }
console.log(`${alumno.nombre} está en ${alumno.curso}º`)
console.log(JSON.stringify(alumno))
