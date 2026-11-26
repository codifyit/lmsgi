// Diapositiva 3: para cambiar el contenido se asigna un valor

const titulo = document.getElementById("titulo")
titulo.textContent = "Ofertas de invierno"

const aviso = document.getElementById("aviso")
aviso.innerHTML = "Envío <strong>gratis</strong> desde 20 €"

// Comprobación: así queda el DOM
console.log(titulo.outerHTML)
console.log(aviso.outerHTML)
