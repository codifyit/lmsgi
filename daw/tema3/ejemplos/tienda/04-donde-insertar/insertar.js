// Diapositiva 6: cuatro métodos para elegir dónde aparece

const lista = document.getElementById("productos")

const primero = document.createElement("li")
primero.textContent = "Primero"
lista.prepend(primero)          // dentro, como primer hijo

const ultimo = document.createElement("li")
ultimo.textContent = "Último"
lista.append(ultimo)            // dentro, como último hijo

const antes = document.createElement("p")
antes.textContent = "Antes de la lista"
lista.before(antes)             // fuera, antes de la lista

const despues = document.createElement("p")
despues.textContent = "Después de la lista"
lista.after(despues)            // fuera, después de la lista

// Comprobación
lista.querySelectorAll("li").forEach(li => console.log(li.textContent))
console.log(lista.previousElementSibling.textContent)
console.log(lista.nextElementSibling.textContent)
