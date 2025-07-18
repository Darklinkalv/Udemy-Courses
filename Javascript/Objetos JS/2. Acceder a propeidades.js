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
console.log(persona['nombre']);

//for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}