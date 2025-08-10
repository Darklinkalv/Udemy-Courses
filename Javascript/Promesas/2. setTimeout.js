let promesa = new Promise((resolved) =>
{
    setTimeout(() => {
        resolved("Resolvio correctamente con timeout");
    }, 2000);
});

promesa.then(
    valor => {
        console.log(valor);
    }
);