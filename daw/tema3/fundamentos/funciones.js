//función declarativa
function sumar(a, b = 0) {
  return a + b
}
//llamada a la función
let suma = sumar(2, 3) // 5
console.log(suma)
//función expresiva de tipo flecha
const sumaFlecha = (a, b = 0) => a + b
//llamada a la función
console.log(sumaFlecha(2))

//función expresiva de tipo flecha, con más de una línea
const sumaFlechaLineas = (a, b = 0) => {
  let resultado = a + b
  return resultado
}
//llamada a la función
console.log(sumaFlechaLineas(2, 3))

//función expresiva de tipo flecha, con más de una línea
//el segundo parámetro es una función que se ejecuta dentro de la
//función sumarTodos
function sumarTodos(limite, accion) {
  let sumaParcial = 0
  for (let i = 0; i < limite; i++) sumaParcial = accion(i, sumaParcial)
  return sumaParcial
}
//llamada a la función pasando una función anónima como segundo parámetro
//la función anónima recibe dos parámetros, el primero es el valor de i
//y el segundo es la suma parcial que se va acumulando en cada iteración
let resultado = sumarTodos(3, (i, sumaParcial) => {
  sumaParcial = sumaParcial + i
  return sumaParcial
})
console.log(resultado)
