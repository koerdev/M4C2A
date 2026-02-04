const empleado = {
    nombre: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
    cargo: "Desarrollador"
};

// console.log(empleado);

/* let nombre = empleado.nombre;
let apellido = empleado.apellido;
let nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto); */

// Destructuring
const {nombre, apellido} = empleado;
let nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);