// Diapositiva 5: crear un elemento nuevo lleva tres pasos

// 1. Crear
const li = document.createElement("li")
// 2. Rellenar
li.textContent = "Chocolate"
li.classList.add("producto")
li.dataset.precio = "2.90"
// 3. Insertar
document.getElementById("productos").append(li)

// Comprobación
console.log(li.outerHTML)
console.log("Productos:", document.querySelectorAll(".producto").length)
