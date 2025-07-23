let persona1 = 
{
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function(titulo, tel)
    {
        return this.nombre + " " + this.apellido + ", " + titulo + ", " + tel;
    }
}

let persona2 = 
{
    nombre : "Karla",
    apellido: "Castillo",
}

// Usando el método apply para invocar el método nombreCompleto de persona1 en el contexto de persona2
console.log(persona1.nombreCompleto("Licenciado", "987654321"));


let arreglo = ["Ingeniera", "123456789"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));