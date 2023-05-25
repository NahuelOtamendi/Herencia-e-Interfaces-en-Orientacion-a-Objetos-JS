import { Empleados } from "./Empleados.js";

export class Directores extends Empleados {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

  verBonificacion(bono) {
    bono = 10;
    return super._verBonificacion(bono);
  }
}
