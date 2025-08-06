//Funciones de tipo callback
//Una funcion callback es una función que se pasa a otra función como argumento
//y que se ejecuta dentro de esa función.
function imprimir(mensaje)
{
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback)
{
    let resultado = op1 + op2;
    funcionCallback(`El resultado de la suma es: ${resultado}`);
}

sumar(5, 7, imprimir); //El resultado de la suma es: 12

//Llamadas aseincronas con setTimeout
//setTimeout es una función que permite ejecutar una función después de un tiempo determinado

function miFuncionCallback()
{
    console.log("Saludo despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); //Saludo despues de 3 segundos

setTimeout(function()
{
    console.log("Saludo anonimo despues de 2 segundos");
}, 2000);

setTimeout(() => {
    console.log("Saludo con funcion flecha despues de 1 segundo");
}, 5000);