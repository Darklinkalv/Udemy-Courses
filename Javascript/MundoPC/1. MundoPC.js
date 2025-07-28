class DispositivoEntrada
{
    constructor(tipoEntrada, marca)
    {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada()
    {
        return this.tipoEntrada;
    }

    set setTipoEntrada(tipoEntrada)
    {
        this.tipoEntrada = tipoEntrada;
    }

    get getMarca()
    {
        return this.marca;
    }

    set setMarca(marca)
    {
        this.marca = marca;
    }
}

class Raton extends DispositivoEntrada
{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    get getIdRaton()
    {
        return this.idRaton;
    }

    toString()
    {
        return "Raton: [idRaton: " + this.idRaton + ", tipoEntrada: " + this.tipoEntrada + ", marca: " + this.marca + "]";
    }
}

class Teclado extends DispositivoEntrada
{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca)
    {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    get getIdTeclado()
    {
        return this.idTeclado;
    }

    toString()
    {
        return "Teclado: [idTeclado: " + this.idTeclado + ", tipoEntrada: " + this.tipoEntrada + ", marca: " + this.marca + "]";
    }
}

class Monitor 
{
    static contadorMonitores = 0;

    constructor(marca, tamano)
    {
        this.marca = marca;
        this.tamano = tamano;
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    get getIdMonitor()
    {
        return this.idMonitor;
    }

    get getMarca()
    {
        return this.marca;
    }

    set setMarca(marca)
    {
        this.marca = marca;
    }

    get getTamano()
    {
        return this.tamano;
    }

    set setTamano(tamano)
    {
        this.tamano = tamano;
    }

    toString()
    {
        return "Monitor: [idMonitor: " + this.idMonitor + ", marca: " + this.marca + ", tamano: " + this.tamano + "]";
    }
}

class Computadora
{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton)
    {
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.idComputadora = ++Computadora.contadorComputadoras;
    }

    get getIdComputadora()
    {
        return this.idComputadora;
    }

    get getNombre()
    {
        return this.nombre;
    }

    set setNombre(nombre)
    {
        this.nombre = nombre;
    }

    get getMonitor()
    {
        return this.monitor;
    }

    set setMonitor(monitor)
    {
        this.monitor = monitor;
    }

    get getTeclado()
    {
        return this.teclado;
    }

    set setTeclado(teclado)
    {
        this.teclado = teclado;
    }

    get getRaton()
    {
        return this.raton;
    }

    set setRaton(raton)
    {
        this.raton = raton;
    }

    toString()
    {
        return "Computadora: [idComputadora: " + this.idComputadora + ", nombre: " + this.nombre + this.monitor.toString() + this.teclado.toString() + this.raton.toString() + "]";
    }
}

class Orden
{
    static contadoresOrdenes = 0;

    constructor()
    {
        this.idOrden = ++Orden.contadoresOrdenes;
        this.computadoras = [];
    }

    agregarComputadora(computadora)
    {
        this.computadoras.push(computadora);
    }

    mostrarOrden()
    {
        let computadorasOrden = "";
        for(let computadora of this.computadoras)
        {
            computadorasOrden += "\n" + computadora.toString();
        }
        console.log("Orden: " + this.idOrden + ", Computadoras: " + computadorasOrden);
    }
}

let monitor = new Monitor();
monitor.setMarca = "Samsung";
monitor.setTamano = "27 pulgadas";

let raton = new Raton();
raton.setTipoEntrada = "USB";
raton.setMarca = "Logitech";

let teclado = new Teclado();
teclado.setTipoEntrada = "Bluetooth";
teclado.setMarca = "Generico";

let computadora = new Computadora();
computadora.setNombre = "Mi PC";
computadora.setMonitor = monitor;
computadora.setTeclado = teclado;
computadora.setRaton = raton;

let computadora2 = new Computadora();
computadora2.setNombre = "Darky";
computadora2.setMonitor = monitor;
computadora2.setTeclado = teclado;
computadora2.setRaton = raton;

let orden1 = new Orden();
orden1.agregarComputadora(computadora);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();