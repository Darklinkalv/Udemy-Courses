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