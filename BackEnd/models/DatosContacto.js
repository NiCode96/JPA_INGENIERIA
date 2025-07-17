import Conexion from "./Conexion.js";

export default class DatosContacto {
  constructor(id_contacto, correo, telefono, linkedin) {
    this.id_contacto = id_contacto;
    this.correo = correo;
    this.telefono = telefono;
    this.linkedin = linkedin;
  }

  static async modificarInformacion(correo, telefono, linkedin) {
    const conexion = await Conexion.getInstance();
    const consultaUpdate =
      "UPDATE datosContacto SET correo= ? ,telefono= ?, linkedin = ? WHERE id_contacto = 1";
    const parametros = [correo, telefono, linkedin];

    try {
      const resultadoUpdate = await conexion.ejecutar(
        consultaUpdate,
        parametros
      );

      console.log("Resultado de la actualización:", resultadoUpdate);

      if (resultadoUpdate.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(
        `No se pudo actualizar los datos de usario por error en la clase  DatosContacto ${err}`
      );
      return false;
    }
  }

  static async seleccionarDatos() {
    const conexion = await Conexion.getInstance();
    const consulta = "SELECT * FROM datosContacto";

    try {
      const resultadoSelect = await conexion.ejecutar(consulta);
      if (resultadoSelect.length > 0) {
        return resultadoSelect[0];
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        `No se pudo seleccionar los datos de usario por error en la clase  DatosContacto ${error}`
      );
      return null;
    }
  }
}
