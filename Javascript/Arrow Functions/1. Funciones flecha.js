/*function miFunction() {
    console.log("Hola, soy una función normal");
}*/

let miFunction = function() { //Para definir una función anónima la declaramos como una variable
    console.log("Hola, soy una función");
};

let miFuncionFlecha = () =>
    {
        console.log("Hola, soy una función flecha");
    }

miFunction();
miFuncionFlecha();

// La diferencia entre una función normal y una función flecha es que la función flecha no tiene su propio contexto de "this",
//  lo que significa que no se puede usar para métodos de objetos que dependen del contexto de "this".