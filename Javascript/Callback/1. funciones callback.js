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