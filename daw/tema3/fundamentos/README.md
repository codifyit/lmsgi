# Guía de Puntos y Comas en JavaScript & Configuración de Prettier

Esta guía explica de forma clara cuándo es estrictamente obligatorio usar el punto y coma (`;`) en JavaScript debido al comportamiento del **ASI** (_Automatic Semicolon Insertion_), y cómo automatizar su gestión en tus proyectos utilizando **Prettier**.

---

## 🚨 Casos donde el punto y coma SÍ es obligatorio

El motor de JavaScript no insertará un punto y coma de forma automática si la siguiente línea comienza con alguno de estos caracteres: `(`, `[`, o `` ` ``.

### 1. Líneas que empiezan con Corchetes `[` (Arrays o Desestructuración)

Si la línea anterior no tiene `;`, JavaScript pensará que estás intentando acceder a una propiedad o índice de la línea de arriba.

```javascript
// ❌ ERROR: JS interpreta -> const a = 1.forEach(...)
const a = (1)[(1, 2, 3)].forEach((x) => console.log(x))

// ✅ SOLUCIÓN
const a = 1
;[1, 2, 3].forEach((x) => console.log(x))
```

### 2. Líneas que empiezan con Paréntesis `(` (Funciones Autoejecutables / IIFE)

JavaScript asumirá que estás intentando ejecutar la línea anterior como si fuera una función, pasando el resto como argumentos.

```javascript
// ❌ ERROR: JS interpreta -> const saludar = () => {}()
const saludar = () => {}
;(async () => {
  // Código...
})()

// ✅ SOLUCIÓN
const saludar = () => {}
;(async () => {
  // Código...
})()
```

### 3. El peligro del `return` (Comportamiento Inverso)

Aquí ocurre lo contrario: el ASI inserta un punto y coma donde **no** quieres, rompiendo la lógica. Si dejas el valor de retorno en la línea de abajo, el motor asume que la sentencia terminó en la palabra clave `return`.

```javascript
// ❌ ERROR: Devuelve 'undefined' porque JS inserta un ';' justo tras el return
function obtenerUsuario() {
  return
  {
    name: 'Alex'
  }
}

// ✅ SOLUCIÓN
function obtenerUsuario() {
  return {
    name: 'Alex',
  }
}
```

---

## 🛠️ La Solución: Automatizar con Prettier

Para evitar errores humanos y no tener que memorizar estas reglas, lo mejor es delegar el formateo a **Prettier**.

### 2. Configuración

Crea un archivo llamado `.prettierrc` en la raíz de tu proyecto y elige el estilo que prefieras:

#### Opción A: Estilo Moderno (Sin puntos y comas)

Prettier eliminará todos los puntos y comas innecesarios, pero **añadirá automáticamente uno** al principio de las líneas conflictivas (las que empiezan con `[` o `(`) para proteger tu código.

```json
{
  "semi": false
}
```

#### Opción B: Estilo Clásico (Con puntos y comas)

Prettier se asegurará de que todas las líneas finalicen con punto y coma de forma estricta y uniforme.

```json
{
  "semi": true
}
```

### 3. El archivo de automatización del editor: settings.json

Tienes que crear primero una carpeta llamada .vscode en la raíz de tu proyecto, y dentro de ella meter el archivo de configuración.

- Ruta exacta: .vscode/settings.json
- Contenido:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
