"use strict";

try {
    // Código que puede generar un error
    //x = 10;
    //miFuncion();
    let x = 10;
} catch (error) {
    console.error("Se produjo un error:", error);
}
finally { //Opcional
    console.log("Termina la revision de errores, esto siempre se ejecuta");
}

console.log("Continuamos");