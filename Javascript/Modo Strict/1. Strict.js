"use strict";

// Ya no es posible declarar variables sin usar 'var', 'let' o 'const'
// Esto lanzará un error en modo estricto
x = 10;
console.log(x); 


// Para corregirlo, debemos declarar 'x' correctamente
let x = 10;
console.log(x); // 10

//Tampoco funcionarian funciones sin declarar
miFuncion();

function miFuncion() {
    console.log("¡Hola, mundo!");
}

//Tambien se puede declarar el "use strict" dentro de una función
function otraFuncion() {
    "use strict";
    let y = 20; // Ahora 'y' está en modo estricto
    console.log(y); // 20
}