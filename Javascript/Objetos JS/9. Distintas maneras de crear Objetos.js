// Funcion constructor de objetos de tipo Persona
//Nombre de la función debe iniciar con mayúscula
function Persona(nombre, apellido, email)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function()
    {
        return this.nombre + " " + this.apellido;
    }
}

//Instancia de un objeto de tipo Persona
let padre = new Persona("Juan", "Pérez", "padre@gmail.com");
console.log(padre.nombreCompleto());

let madre = new Persona("Karla", "Castillo", "ejemplo@gmail.com");
console.log(madre.nombreCompleto());

padre.nombre = "Jaimito"; //Modifica el nombre del objeto padre
console.log(padre.nombre);
console.log(padre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {}; //Es lo mismo que la línea anterior

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; //Es lo mismo que la línea anterior y lo mas recomendable es usarlo como aqui

let miNumero = new Number(10);
let miNumero2 = 10; //Es lo mismo que la línea anterior y lo mas recomendable es usarlo como aqui

let miBoolean = new Boolean(true);
let miBoolean2 = true; //Es lo mismo que la línea anterior y lo mas recomendable es usarlo como aqui

let miArreglo1 = new Array(1, 2, 3);
let miArreglo2 = [1, 2, 3]; //Es lo mismo que la línea anterior y lo mas recomendable es usarlo como aqui

let miFuncion = new Function();
let miFuncion2 = function() {}; //Es lo mismo que la línea anterior y lo mas recomendable es usarlo como aqui