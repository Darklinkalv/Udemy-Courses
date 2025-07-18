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