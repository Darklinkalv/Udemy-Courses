class Persona {
    
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad)
    {
        this._nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }

    get getIdPersona()
    {
        return this.idPersona;
    }

    get getNombre()
    {
        return this._nombre;
    }

    set setNombre(nombre)
    {
        this._nombre = nombre;
    }

    get getApellido()
    {
        return this.apellido;
    }

    set setApellido(apellido)
    {
        this.apellido = apellido;
    }

    get getEdad()
    {
        return this.edad;
    }

    set setEdad(edad)
    {
        this.edad = edad;
    }

    toString()
    {
        return "ID: " + this.idPersona + ", Nombre: " + this._nombre + ", Apellido: " + this.apellido + ", Edad: " + this.edad;
    }
}

class Empleado extends Persona
{

    static _idEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo)
    {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado._idEmpleado;
    }

    get getIdEmpleado()
    {
        return this.idEmpleado;
    }

    get getSueldo()
    {
        return this.sueldo;
    }

    set setSueldo(sueldo)
    {
        this.sueldo = sueldo;
    }

    toString()
    {
        return "ID Empleado: " + this.idEmpleado + ", " + super.toString() + ", Sueldo: " + this.sueldo;
    }

}

class Cliente extends Persona
{

    static _idCliente = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro)
    {
        super (nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++Cliente._idCliente;
    }

    get getIdCliente()
    {
        return this.idCliente;
    }

    get getFechaRegistro()
    {
        return this.fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro)
    {
        this.fechaRegistro = fechaRegistro;
    }

    toString()
    {
        return "ID Cliente: " + this.idCliente + ", " + super.toString() + ", Fecha Registro: " + this.fechaRegistro;
    }
}

let persona1 = new Persona("Ami", "Sandoval", 40);
console.log(persona1.toString());

let empleado1 = new Empleado("Alex", "Calixto", 30, 5000);
console.log(empleado1.toString());

let cliente1 = new Cliente("Juan", "Pérez", 25, new Date());
console.log(cliente1.toString());

console.log(cliente1.getIdCliente); // Acceso al ID del cliente