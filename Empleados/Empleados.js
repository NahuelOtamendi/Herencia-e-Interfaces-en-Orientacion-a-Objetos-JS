export class Empleados {
  #nombre;
  #dni;
  #salario;
  #clave;

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = "";
  }

  autenticable(clave) {
    return clave == this.#clave;
  }

  asignarClave(clave) {
    this.#clave = clave;
  }

  verBonificacion() {
    throw new Error("Debe implementarse este metodo en la clase hijo");
  }

  _verBonificacion(bono) {
    return this.#salario + (this.#salario * bono) / 100;
  }

  verSalario() {
    return this.#salario;
  }
}
