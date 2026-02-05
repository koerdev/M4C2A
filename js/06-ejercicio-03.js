/* 3️⃣ Producto

🧱 Producto de una tienda. Crear una clase Producto que represente un producto de una tienda.

Atributos

nombre

precio

stock

Métodos

vender(cantidad)

reponer(cantidad)

mostrarInfo() */

class Producto {
    constructor(nombre, precioInicial = 0, stockInicial = 0) {
        this.nombre = nombre;
        this.precio = precioInicial;
        this.stock = stockInicial;
    };

    vender(cantidad) {
        if(cantidad > 0) {
            if(this.stock >= cantidad) {
                this.stock -= cantidad;
                return `Venta exitosa! El nuevo stock disponible es: ${this.stock}`;
            } else {
                return "No hay suficiente stock para vender";
            };
        } else {
            return "La cantidad a vender debe ser mayor a 0";
        };
    };

    reponer(cantidad) {
        if(cantidad > 0) {
            this.stock += cantidad;
            return `Reposicion exitosa! El nuevo stock disponible es: ${this.stock}`;
        } else {
            return "La cantidad a reponer debe ser mayor a 0";
        };
    };

    mostrarInfo() {
        return `
            Nombre: ${this.nombre}
            Precio: ${this.precio}
            Stock: ${this.stock}
        `;
    };
};

const producto1 = new Producto("Notebook Victus", 1200, 20);

console.log(producto1.mostrarInfo());
console.log(producto1.vender(3));
console.log(producto1.reponer(5));