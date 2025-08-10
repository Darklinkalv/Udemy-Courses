let promesa = new Promise((resolved) =>
{
    setTimeout(() => {
        resolved("Resolvio correctamente con timeout");
    }, 2000);
});

/*promesa.then(
    valor => {
        console.log(valor);
    }
);*/

//async indica que una funcion retorna una promesa
async function miFuncionConPromesa()
{
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(
    valor => {
        console.log(valor);
    }
);