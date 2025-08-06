const miFuncionFlecha = () => console.log("Hola, soy una función flecha");

miFuncionFlecha();

const saludar = (nombre) => {
    return "Hola, " + nombre + "! Bienvenido a las funciones flecha.";
}
console.log(saludar("Juan"));


const saludar2 = () => "Saludos desde una función flecha sin parámetros y simplificada";
console.log(saludar2());


const regresaObjeto = () => ({ nombre: "Alex", edad: 42 });
console.log(regresaObjeto());

const funcionConVariosParametros = (op1, op2) => 
    {
        return op1 + op2;
    }
console.log(funcionConVariosParametros(3, 7));