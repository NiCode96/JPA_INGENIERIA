import Conexion from "./Conexion.js";

export default class Principal {
  constructor(sobreNosotros, queHacemos) {
    this.sobreNosotros = sobreNosotros;
    this.queHacemos = queHacemos;
  }


  static async SeleccionarTexto(){

    const conexion = await Conexion.getInstance();
    const consultaSelect = 'SELECT * FROM paginaPrincipal WHERE id_paginaPrincipal = 1';

    try {

        const resultadoSelect = await conexion.ejecutar(consultaSelect);

        if (resultadoSelect.length > 0) {
            return resultadoSelect[0];
            
        }else{
            return null;
        }
        
    } catch (error) {
        console.log('No se ha podido ejecutar la consulta desde la clase Principal' + `${error}`)
    }

  }
  
}
