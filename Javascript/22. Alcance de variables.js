// Alcance de variables en JS

let variableGlobal = 5;

//Definicion funcion
function miFuncion(variableLocal)
{
    console.log(variableLocal);
    //Modificamos la variable global
    variableGlobal = 10;
}

//Llamamos la funcion
miFuncion(variableGlobal);