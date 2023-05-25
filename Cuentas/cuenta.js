import { Cliente } from "../Cliente.js";

export class Cuenta {
  #cliente;
  #saldo;

  static cantidadCuentas = 0;

  constructor(cliente, numero, agencia, saldo) {
    if (new.target === Cuenta) {
      throw new Error(
        "No se debe instanciar una clase padre, solo se debe extender a las clases hijas."
      );
    }
    this.#cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = saldo;
    Cuenta.cantidadCuentas++;
  }

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
    return this.#saldo;
  }

  retirarDeCuenta() {
    throw new Error("Debe implementarse este método en la clase hija.");
  }

  _retirarDeCuenta(valor, comision) {
    const comisionValor = valor * (comision / 100);
    valor += comisionValor;

    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
