//Paso por valor en JS
// Pasando informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro)
{
    parametro = 20; // Cambiando el valor del parametro
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento); // Imprime 10, ya que el valor original no se ha modificado