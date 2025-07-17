import express from "express";
import cors from "cors";
import Usuarios from "./BackEnd/models/Usuarios.js";
import DatosContacto from "./BackEnd/models/DatosContacto.js";
import Principal from "./BackEnd/models/Principal.js";

const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    mensaje : "todo funcionando ok"
  })
})


app.post("/api/login", async (req , res) => {
  const {nombreUsuario, contraseña } = req.body;

  try{
   const sucess = await Usuarios.loginUsuario(nombreUsuario, contraseña)
   console.log(`DATOS RECIBIDOS DESDE EL CLIENTE: ${contraseña} + '' + ${nombreUsuario}`) 
   if (sucess) {
       res.json({ mensaje: "login correcto" });
    }else{
        res.json({ mensaje: "login incorrecto" });
    }
  }catch{
    res.send('error en el servidor')

  }

})


app.get("/api/contacto", async (req, res) => {
  try {
    const datos = await DatosContacto.seleccionarDatos();
    if (datos) {
      res.json(datos);
      console.log(datos);
    } else {
      res.status(404).json({ mensaje: "No hay datos de contacto" });
    }
  } catch (err) {
    console.error("Error al obtener datos de contacto:", err);
    res.status(500).json({ mensaje: "Error al obtener datos de contacto" });
  }
});




app.get("/api/principal", async (req, res) => {
  try {
    const datos = await Principal.SeleccionarTexto();
    if (datos) {
      res.json(datos);
      console.log(datos);
    } else {
      res.status(404).json({ mensaje: "No hay datos de contacto" });
    }
  } catch (err) {
    console.error("Error al obtener texto desde la base de datos de la pagina principal", err);
    res.status(500).json({ mensaje: "Error al obtener datos de contacto" });
  }
});


app.put("/api/datos-contacto", async (req, res) => {
  console.log("Petición PUT /api/datos-contacto recibida");
  console.log("Body recibido:", req.body);

  const { correo, telefono, linkedin } = req.body;

  const actualizado = await DatosContacto.modificarInformacion(correo, telefono, linkedin);
  console.log("Resultado de modificarInformacion:", actualizado);

  if (actualizado) {
    res.json({ mensaje: "Datos actualizados correctamente" });
  } else {
    res.status(500).json({ mensaje: "No se pudieron actualizar los datos" });
  }
});




app.listen(3000 ,() => {
  console.log('escuchando el el puerto 3000')
})
