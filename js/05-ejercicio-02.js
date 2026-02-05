/*CuentaBancaria

🧱 Simula una cuenta bancaria. Crear una clase CuentaBancaria que permita:

guardar un saldo

depositar dinero

retirar dinero

consultar el saldo

Atributos

titular

saldo

Métodos

depositar(monto)

retirar(monto)

mostrarSaldo() */

class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    };

    depositar(monto) {
        if(monto > 0) {
            this.saldo += monto;
            return `Deposito exitoso! Su nuevo saldo es: ${this.saldo}`;
        } else {
            return "El monto a depositar debe ser mayor a 0";
        };
    };

    retirar(monto) {
        if(monto > 0) {
            if(this.saldo >= monto) {
                this.saldo -= monto;
                return `Retiro exitoso! Su nuevo saldo es: ${this.saldo}`;
            } else {
                return "No tiene suficiente saldo para retirar";
            };
        } else {
            return "El monto a retirar debe ser mayor a 0";
        };
    };

    mostrarSaldo() {
        return `Su saldo es de ${this.saldo}`;
    };
};

const cuenta1 = new CuentaBancaria("David", 10000);

console.log(cuenta1.mostrarSaldo());
console.log(cuenta1.depositar(5000));
console.log(cuenta1.retirar(8000));