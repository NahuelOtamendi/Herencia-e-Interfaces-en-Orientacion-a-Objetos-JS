import { Cuenta } from "./cuenta.js";

export class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor, 2);
  }

  transferirParaCuenta(valor, cuentaDestino) {
    super._retirarDeCuenta(valor, 0);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
