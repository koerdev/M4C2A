const nums = [1, 2, 3, 4];

const doble = nums.map((item) => {
    return `${item}++`;
});

// console.log(doble);

// Funcion declarativa
function sumar(a, b) {
    return a + b;
};

// console.log(sumar(10, 12));

const sumar2 = (a, b) => a + b;

console.log(sumar2(15, 17));

const saludar = (nombre) => `Hola, buenas tardes ${nombre}`;

console.log(saludar("Pedro"));

const saludar2 = nombre => "Hola, buenas tardes " + nombre;

console.log(saludar2("David"));

let nombre = "Susana";
let apellido = "Rodriguez";

let nombreCompleto = "Tu nombre es: " + nombre + " y tu apellido es: " + apellido;

// console.log(nombreCompleto);

let nombreCompleto2 = `Tu nombre es ${nombre} y tu apellido es ${apellido}`;

console.log(nombreCompleto2);