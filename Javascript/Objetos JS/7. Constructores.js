// Funcion constructor de objetos de tipo Persona
//Nombre de la función debe iniciar con mayúscula
function Persona(nombre, apellido, email)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Instancia de un objeto de tipo Persona
let padre = new Persona("Juan", "Pérez", "padre@gmail.com");
console.log(padre);

let madre = new Persona("Karla", "Castillo", "ejemplo@gmail.com");
console.log(madre);

padre.nombre = "Jaimito"; //Modifica el nombre del objeto padre
console.log(padre.nombre);
console.log(padre);