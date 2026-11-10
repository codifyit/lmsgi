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
function sumarTodos(limite, accion) {
  let sumaParcial = 0
  for (let i = 0; i < limite; i++) sumaParcial = accion(i, sumaParcial)
  return sumaParcial
}
let resultado = 0
resultado = sumarTodos(3, (i, sumaParcial) => {
  sumaParcial = sumaParcial + i
  return sumaParcial
})
console.log(resultado)
