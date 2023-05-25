/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas/cuentaAhorro.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Directores } from "./Empleados/Directores.js";
import { Gerentes } from "./Empleados/Gerentes.js";
import { Empleados } from "./Empleados/Empleados.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

/*Creación de objetos*/
const cliente1 = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente1, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");
const cuentaAhorroLeonardo = new CuentaAhorro(cliente1, "3", "003", 0);
const cuentaNominaLeonardo = new CuentaNomina(cliente1, "4", "004", 100);

const empleado = new Empleados("Nahuel Otamendi", "39055247", 100);
const gerente = new Gerentes("Noelia Seballos", "36387478", 100);
const director = new Directores("Laucha Sapo", "39044235", 100);

empleado.asignarClave(12345);

console.log(
  "SistemaAutenticacion:",
  SistemaAutenticacion.login(empleado, 12345)
);

cliente1.asignarClave(1234);

console.log(
  "SistemaAutenticacion:",
  SistemaAutenticacion.login(cliente1, 1234)
);
