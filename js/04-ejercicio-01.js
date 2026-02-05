class Persona {
    constructor(nombre, apellido, anioNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNacimiento = anioNacimiento;
    };

    calcularEdad() {
        let anioActual = new Date().getFullYear();
        return anioActual - this.anioNacimiento;
    };

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    };

    info() {
        return `
            NombreCompleto: ${this.nombreCompleto()}
            Edad: ${this.calcularEdad()}
        `;
    };
};

const persona1 = new Persona("David", "Cornejo", "1995");

console.log(persona1.info());