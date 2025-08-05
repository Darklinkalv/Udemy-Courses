class Empleado
{
    constructor(nombre, sueldo)
    {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    get getNombre()
    {
        return this.nombre;
    }

    set setNombre(nombre)
    {
        this.nombre = nombre;
    }

    get getSueldo()
    {
        return this.sueldo;
    }

    set setSueldo(sueldo)
    {
        this.sueldo = sueldo;
    }

    obtenerDetalles()
    {
        return "Empleado: nombre: " + this.nombre + ", sueldo: " + this.sueldo;
    }
}

class Gerente extends Empleado
{
    constructor(nombre, sueldo, departamento)
    {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    get getDepartamento()
    {
        return this.departamento;
    }

    set setDepartamento(departamento)
    {
        this.departamento = departamento;
    }

    //Se sobrescribe el método obtenerDetalles de la clase padre
    obtenerDetalles()
    {
        return "Gerente: " + super.obtenerDetalles() + ", departamento: " + this.departamento;
    }
}

function imprimir(tipo)
{
    console.log(tipo.obtenerDetalles());
}

let gerente1 = new Gerente();
gerente1.setNombre = "Carlos";
gerente1.setSueldo = 5000;
gerente1.setDepartamento = "Sistemas";

let empleado1 = new Empleado();
empleado1.setNombre = "Ana";
empleado1.setSueldo = 3000;

imprimir(empleado1);
imprimir(gerente1);