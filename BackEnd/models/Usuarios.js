import Conexion from "./Conexion.js";

export default class Usuario {
  constructor(
    id_usuario,
    nombreUsuario,
    nombre,
    apellido,
    estadoUsuario,
    contraseña
  ) {
    this.id_usuario = id_usuario;
    this.nombreUsuario = nombreUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estadoUsuario = estadoUsuario;
    this.contraseña = contraseña;
  }

  get idusuario() {
    return this._idusuario;
  }
  set idusuario(in_idusuario) {
    this._idusuario = in_idusuario;
  }

  get nombreUsuario() {
    return this._nombreUsuario;
  }
  set nombreUsuario(in_nombreUsuario) {
    this._nombreUsuario = in_nombreUsuario;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(in_nombre) {
    this._nombre = in_nombre;
  }

  get apellido() {
    return this._apellido;
  }
  set apellido(in_apellido) {
    this._apellido = in_apellido;
  }

  get estadoUsuario() {
    return this._estadoUsuario;
  }
  set estadoUsuario(in_estadoUsuario) {
    this._estadoUsuario = in_estadoUsuario;
  }

  get contraseña() {
    return this._contraseña;
  }
  set contraseña(in_contraseña) {
    this._contraseña = in_contraseña;
  }


 



static async loginUsuario(usuario, contraseña){
  const conexiondb = await Conexion.getInstance();
  const consultaSQL = 'SELECT * FROM usuarios WHERE nombreUsuario = ?  AND  contraseña = ? ';
  const parametros = [usuario, contraseña];

  try {
    const resultadoConsulta = await conexiondb.ejecutar(consultaSQL, parametros);
    
    if (resultadoConsulta.length > 0) {
      return true;
    } else{
      return false;
    }
  } catch (error) {
    console.log(`Error al momento de ejecutar la consulta para Login desde la clase Usuarios ${error}`);
    
  }


}


}
