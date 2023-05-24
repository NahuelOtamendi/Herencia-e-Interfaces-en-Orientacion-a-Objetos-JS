/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./cuenta.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./cuentaAhorro.js";
import { CuentaNomina } from "./CuentaNomina.js";

const cliente1 = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente1, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente1, "9985", "001", 0);

const cuentaNominaLeonardo = new CuentaNomina(cliente1, "3", "003", 100);
console.log("cuentaNominaLeonardo:", cuentaNominaLeonardo);

cuentaNominaLeonardo.depositoEnCuenta(150);
console.log("cuentaNominaLeonardo saldo:", cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log("cuentaNominaLeonardo saldo:", cuentaNominaLeonardo.verSaldo());
