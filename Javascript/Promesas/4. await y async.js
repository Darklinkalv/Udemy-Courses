async function funcionConPromesaYAwait()
{
    let miPromesa = new Promise((resolved) =>
    {
        resolved("Resolvio correctamente con await");
    });

    //await solo funciona dentro de funciones async
    console.log(await miPromesa);
}

funcionConPromesaYAwait();