class Producto
{

    static contadorProductos = 0;

    constructor(nombre, precio)
    {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }

    get getIdProducto()
    {
        return this.idProducto;
    }

    get getNombre()
    {
        return this.nombre;
    }

    set setNombre(nombre)
    {
        this.nombre = nombre;
    }

    get getPrecio()
    {
        return this.precio;
    }

    set setPrecio(precio)
    {
        this.precio = precio;
    }

    toString()
    {
        return "ID: " + this.idProducto + ", Nombre: " + this.nombre + ", Precio: $" + this.precio.toFixed(2);
    }
}

class Orden
{
    static contadorOrdenes = 0;
    static  get MAX_PRODUCTOS()
    {
        return 5;
    }

    constructor()
    {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    get getIdOrden()
    {
        return this.idOrden;
    }

    agregarProducto(producto)
    {
        if(this.productos.length < Orden.MAX_PRODUCTOS)
        {
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        }
        else{
            console.log("No se pueden agregar más productos a la orden " + this.idOrden + ", máximo permitido: " + Orden.MAX_PRODUCTOS);
        }
    }

    calcularTotal()
    {
        let total = 0;
        for(let producto of this.productos)
        {
            total += producto.getPrecio;
        }
        return total;
    }

    mostrarOrden()
    {
        let productosOrden = "";
        for(let producto of this.productos)
        {
            productosOrden += "\n" + producto.toString();
        }
        console.log("Orden: " + this.idOrden + ", Total:$ " + this.calcularTotal() +", Productos: " + productosOrden);
    }
}

let producto1 = new Producto("Pantalón", 100);
let producto2 = new Producto("Camisa", 50);
let producto3 = new Producto("Zapatos", 200)

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();