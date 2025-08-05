let resultado = "Hola"; //Si no es numero o si es cadena vacía, se lanzará un error

try{
    if( isNaN(resultado) ) {
        throw new Error("El resultado no es un número");
    }
    else if (resultado === "") {
        throw new Error("El resultado es una cadena vacía");
    }
}
catch (error) {
    console.error("Se produjo un error:", error);
    //console.log(error.name);
    //console.log(error.message);
}