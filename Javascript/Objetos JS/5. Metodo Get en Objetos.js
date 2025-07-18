let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "alalalal",
    edad: 30,
    idioma: "ES",
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombreCompleto);