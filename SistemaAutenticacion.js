export class SistemaAutenticacion {
  //Polimorfismo: Capacidad de invocar al mismo metodo o atributo desde distintos objetos, que no sean necesariamente de clases heredables y que puedan tener diferentes comportamientos en diferentes implementaciones.

  static login(usuario, clave) {
    if ("autenticable" in usuario && usuario.autenticable instanceof Function)
      return usuario.autenticable(clave);
    return false;
  }
}
