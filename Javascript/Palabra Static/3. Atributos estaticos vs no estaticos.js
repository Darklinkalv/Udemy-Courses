class Persona
{
    static contadorObjetosPersona = 0; // Atributo estático para contar instancias

    email = "email@ejemplo.com"; // Atributo no estático de nuestros objetos

    constructor(nombre, apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; // Incrementa el contador al crear una nueva instancia
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
        return `${this._nombre} ${this._apellido}`;
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
console.log(empleado1);
console.log(empleado1.nombreCompleto()); // Accede al método get nombre() de Persona
console.log(empleado1.toString());

//console.log(persona1.saludar()); No es posible llamar un metodo static desde un objeto, se debe llamar desde la clase
console.log(Persona.saludar()); // Llamada correcta al método static
Persona.saludar2(persona1); // Llamada correcta al método static con un objeto como argumento

console.log(Empleado.saludar()); // Llamada correcta al método static de la clase Empleado
Empleado.saludar2(empleado1); // Llamada correcta al método static con un objeto como argumento

//console.log(persona1.contadorObjetosPersona); No se llama desde un objeto, sino desde la clase, en este caso, Persona
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona); // Accede al atributo estático desde la clase Empleado

console.log(persona1.email); // Accede al atributo no estático de persona1
console.log(empleado1.email); // Accede al atributo no estático de empleado1
console.log(Persona.email); // Esto no es posible, ya que 'email' es un atributo no estático
console.log(Empleado.email); // Esto tampoco es posible, ya que 'email' es un atributo no estático