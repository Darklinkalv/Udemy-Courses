let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "alalalal",
    edad: 30,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

persona.tel = "123456789";
persona.tel = "987654321"; //Se modifica

console.log(persona.tel);

delete persona.tel; //Se elimina
console.log(persona.tel); //undefined

//Concatenar cada valor de cada propiedad del objeto
console.log("Nombre: " + persona.nombre + ", Apellido: " + persona.apellido +
    ", Email: " + persona.email + ", Edad: " + persona.edad);

//for in
for(nombrePropiedad in persona)
{
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray); //Imprime un array con los valores del objeto

let personaString = JSON.stringify(persona);
console.log(personaString); //Convierte el objeto a una cadena JSON