/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./cuenta.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaAhorro } from "./cuentaAhorro.js";

const cliente1 = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente1, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente1, "9985", "001", 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(90);
console.log(cuentaAhorroLeonardo.verSaldo());
