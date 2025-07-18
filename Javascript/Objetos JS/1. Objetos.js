let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "alalalal",
    edad: 30,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.apellido);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = "Alex";
persona2.apellido = "Smith";
persona2.email = "aeofeop";
persona2.direccion = "candiles 86";

console.log(persona2.nombre);
console.log(persona2.apellido);