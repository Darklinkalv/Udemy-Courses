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

// Prototype es una propiedad especial de los objetos en JavaScript que permite agregar propiedades y métodos a todos los objetos creados con un constructor específico.
// En este caso, estamos agregando una propiedad 'tel' al prototype de Persona, lo que significa que todos los objetos de tipo Persona tendrán acceso a esta propiedad.
Persona.prototype.tel = "0987654321"; //Agregando una propiedad al prototype de Persona

//Instancia de un objeto de tipo Persona
let padre = new Persona("Juan", "Pérez", "padre@gmail.com");
padre.tel = "123456789";
console.log(padre.tel);

let madre = new Persona("Karla", "Castillo", "ejemplo@gmail.com");
console.log(madre.tel);
