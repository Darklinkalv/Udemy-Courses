let persona1 = 
{
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function()
    {
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = 
{
    nombre : "Karla",
    apellido: "Castillo",
}

// Usando el método call para invocar el método nombreCompleto de persona1 en el contexto de persona2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2)); // Asigna el resultado del método a persona2
//Call funciona unicamente con funciones