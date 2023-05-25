/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas/cuenta.js";
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

const cuentaCorrienteLeonardo = new CuentaCorriente(cliente1, "1", "001");
const cuentaCorrienteMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente1, "1", "001", 0);
const cuentaAhorroMaria = new CuentaAhorro(cliente2, "2", "002", 0);

const cuentaNominaLeonardo = new CuentaNomina(cliente1, "1", "001", 0);
const cuentaNominaMaria = new CuentaNomina(cliente2, "2", "002", 0);
