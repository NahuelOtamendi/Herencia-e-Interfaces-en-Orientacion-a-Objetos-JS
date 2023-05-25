import { Cliente } from "../Cliente.js";

export class Cuenta {
  #cliente;
  #saldo;

  constructor(cliente, numero, agencia, saldo) {
    //Se conviente en una clase abstracta, solo es posible extenderla y no instanciarla.
    if (this.constructor == Cuenta) {
      throw new Error(
        "No se debe instanciar una clase padre, solo se debe extender a las clases hijos."
      );
    }
    this.#cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.#saldo = saldo;
    Cuenta.cantidadCuentas++;
  }

  static cantidadCuentas = 0;

  set cliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta() {
    //Se conviente en un metodo Abstracto
    throw new Error("Debe implementarse este metodo en la clase hijo");
  }

  _retirarDeCuenta(valor, comision) {
    comision = valor * (comision / 100);
    valor += comision;

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
    valor = 200;
    valor = valor * 1000;
  }
}
