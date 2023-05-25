export class SistemaAutenticacion {
  //Polimorfismo: Capacidad de invocar al mismo metodo o atributo desde distintos objetos, que no sean necesariamente de clases heredables y que puedan tener diferentes comportamientos en diferentes implementaciones.

  static login(usuario, clave) {
    return usuario.autenticable(clave);
  }
}
