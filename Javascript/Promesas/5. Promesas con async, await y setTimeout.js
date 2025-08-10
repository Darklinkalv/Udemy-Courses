//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout()
{
    let miPromesa = new Promise((resolved) =>
    {
        setTimeout(() =>
        {
            resolved("promesa con await y timeout");
        }, 2000);
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();