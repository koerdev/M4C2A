/* let empleado = {
    nombre: "Juan",
    apellido: "Perez",
    cargo: "Desarrollador",
    salario: 7000,
    direccion: "Yerbas Buenas",
    anioNacimiento: 1998,
}; */

class Empleado {
    constructor(nombre, apellido, cargo, salario, direccion, anioNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.direccion = direccion;
        this.anioNacimiento = anioNacimiento;
    };

    calcularEdad() {
        let anioActual = new Date().getFullYear();
        return anioActual - this.anioNacimiento;
    };

    crearEmail() {
        let email = (
            this.nombre +
            "." +
            this.apellido +
            "@notion.com"
        ).toLowerCase();
        return email;
    };

    informacion() {
        return `
            Nombre: ${this.nombre}
            Apellido: ${this.apellido}
            Email: ${this.crearEmail()}
            Edad: ${this.calcularEdad()}
            Salario: ${this.salario}
            Direccion: ${this.direccion}
            AnioNacimiento: ${this.anioNacimiento}
        `;
    };
};

// const empleado1 = new Empleado("Armin", "Contreras", "Gerente", "200000", "Viña", "1980");

/* console.log(empleado1);
console.log(empleado1.calcularEdad());
console.log(empleado1.crearEmail()); */

// const empleado2 = new Empleado("David", "Cornejo", "Sub Gerente", "150000", "Arica", "1995");

/* console.log(empleado2);
console.log(empleado2.calcularEdad());
console.log(empleado2.crearEmail()); */
// console.log(empleado2.informacion());

const empleado1 = new Empleado("David", "Cornejo", "Sub Gerente", "150000", "Arica", "1995");
const empleado2 = new Empleado("Maria", "Torres", "Ingeniera", "150000", "Calle 456", "1990");
const empleado3 = new Empleado("Pedro", "Gutierrez", "Gerente", "200000", "Calle 789", "1988");
const empleado4 = new Empleado("Ana", "Hernandez", "Secretaria", "110000", "Calle 012", "1978");

let empleados = [];

empleados.push(empleado1);
empleados.push(empleado2);
empleados.push(empleado3);
empleados.push(empleado4);

// console.log(empleados);

empleados.forEach((empleado) => {
    console.log(empleado.informacion());
});