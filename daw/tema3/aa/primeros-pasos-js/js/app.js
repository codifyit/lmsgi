let alumno = "Lucía"; //inicialización de variable
let edad = 18; //inicialización de variable
let nombre; //declaración de variable sin inicialización
console.log(alumno, edad); //muestra en consola el valor de las variables
edad = 19; //asignación de un nuevo valor a la variable edad
console.log("Nueva edad:", edad);
console.log(typeof alumno, typeof edad); //se utiliza el operador typeof 
                                         //para conocer el tipo de dato de las 
                                         //variables

const PRECIO_BOCADILLO = 3.5;
const PRECIO_ZUMO =1.5;
console.log("Bocadillo:", PRECIO_BOCADILLO, "Zumo:", PRECIO_ZUMO);

const CURSO = "1.º ASIR";
const MATRICULADO = true;
let tutor;
const AULA = null;
console.log(typeof CURSO, typeof edad, typeof MATRICULADO, 
    typeof tutor, typeof AULA);
console.log(typeof 18, typeof "18");

let modulos = ["Programación", "Bases de Datos", 
    "Lenguajes de Marcas"];
for (let m of modulos)
     console.log(m); // for...of recorre valores

for (let i=0;i<modulos.length;i++)
    console.log(modulos[i]); // for recorre índices

