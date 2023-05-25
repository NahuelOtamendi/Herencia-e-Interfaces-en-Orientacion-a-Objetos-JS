export class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
  #clave;

  constructor(nombreCliente, dniCliente, rutCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.rutCliente = rutCliente;
    this.#clave = "";
  }

  autenticable(clave) {
    return clave == this.#clave;
  }

  asignarClave(clave) {
    console.log("Cliente ~ asignarClave ~ clave:", clave);
    this.#clave = clave;
  }
}
