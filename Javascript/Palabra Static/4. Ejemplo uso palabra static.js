class Persona
{
    static contadorPersonas = 0; // Atributo estático para contar instancias

    constructor(nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas; // Incrementa el contador al crear una nueva instancia
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }

    get apellido()
    {
        return this._apellido;
    }

    set apellido(apellido)
    {
        this._apellido = apellido;
    }

    nombreCompleto()
    {
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase Object
    toString()
    {
        //Se aplica poliformismo
        //Poliformismo es la capacidad de un objeto de tomar muchas formas dependiendo del contexto
        //Por ejemplo, al utlizar .toString() en persona1 se invoca el metodo nombreCompleto() de Persona
        //y al utilizarlo en empleado1 se invoca el metodo nombreCompleto() de Empleado
        //Esto es polimorfismo porque el mismo método se comporta de manera diferente según el contexto
        return this.nombreCompleto();
    }

    static saludar()
    {
        return "Hola desde el metodo static";
    }

    static saludar2(persona)
    {
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona
{
    constructor(nombre, apellido, departamento)
    {
        super(nombre, apellido); //Llama al constructor de la clase padre Persona
        this._departamento = departamento;
    }

    get departamento()
    {
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto()
    {
        return super.nombreCompleto() + ", " + this._departamento;
    }
}


let persona1 = new Persona("Alex", "Calixto");
console.log(persona1.toString());

let empleado1 = new Empleado("Alejandro", "Montoya", "Desarrollo");
console.log(empleado1.toString());
