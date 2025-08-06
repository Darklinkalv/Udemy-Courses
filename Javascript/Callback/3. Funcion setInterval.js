let reloj = () =>
{
    let fecha = new Date();
    console.log(`Hora actual: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); //Imprime la hora actual cada segundo