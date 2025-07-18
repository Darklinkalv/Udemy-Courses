// Funciones recursivas
// Imprimir 3, 2, 1

let topeMax = 5;

function contarRegresivo(tope)
{
    console.log(tope);
    tope--;
    if (tope >= 1) 
    {
        contarRegresivo(tope);
    }
    else 
    {
        console.log("Fin de la cuenta regresiva");
    }
}

// Llamada a la función
contarRegresivo(topeMax);

