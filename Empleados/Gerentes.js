import { Empleados } from "./Empleados.js";

export class Gerentes extends Empleados {
  constructor(nombre, dni, salario, clave) {
    super(nombre, dni, salario, clave);
  }

  verBonificacion(bono) {
    bono = 5;
    return super._verBonificacion(bono);
  }
}
