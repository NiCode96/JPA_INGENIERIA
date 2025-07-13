/* eslint-env node */

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export default class Conexion {
  constructor() {
    this.conexion = null;
  }

  async conectar() {
    this.conexion = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
    });

    console.log("Conectado");
  }

  async cerrar() {
    if (this.conexion) {
      await this.conexion.end();
      console.log("conexion cerrada");
    }
  }

  async ejecutar(consulta, parametros = []) {
    const [resultado] = await this.conexion.execute(consulta, parametros);
    return resultado;
  }

  static async getInstance() {
    if (!this.instace) {
      this.instace = new Conexion();
      await this.instace.conectar();
    }

    return this.instace;
  }
}
