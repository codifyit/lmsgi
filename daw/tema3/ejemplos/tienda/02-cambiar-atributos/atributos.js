// Diapositiva 4: los atributos se cambian con setAttribute

const logo = document.getElementById("logo")
logo.setAttribute("src", "logo-navidad.png")
logo.alt = "Logo de Navidad"   // como propiedad

document.getElementById("web").href = "https://www.mitienda.es"

document.getElementById("cantidad").value = 5
document.querySelector(".producto").dataset.precio = "2.75"

// Comprobación: así queda el DOM
console.log(logo.outerHTML)
console.log(document.getElementById("web").outerHTML)
console.log(document.getElementById("cantidad").value)
console.log(document.querySelector(".producto").outerHTML)
