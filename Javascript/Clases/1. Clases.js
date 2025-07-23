class Persona
{
    constructor(nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Alex", "Calixto");
console.log(persona1.nombre); //Accede al metodo get nombre(), no son necesarios los parentesis para los get

persona1.nombre = "Alejandro"; //Accede al metodo set nombre()
console.log(persona1.nombre); // Muestra "Alejandro"