import { Container, Box } from "@mui/material";
import AreaTexto from "../../ComponentesUI/AreaDeTexto";
import BotonActualizar from "../../ComponentesUI/BotonUpdate";
import { useState, useEffect } from "react";

export default function EdicionContacto() {
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/contacto");
        const data = await res.json();
        setCorreo(data.correo || "");
        setTelefono(data.telefono || "");
        setLinkedin(data.linkedin || "");
      } catch (err) {
        console.error("Error al cargar los datos actuales", err);
      }
    };
    cargarDatos();
  }, []);

  const actualizarTodo = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/datos-contacto", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, telefono, linkedin }),
      });

      const data = await res.json();
      if (res.ok) {
        setMensaje("✅ Datos de contacto actualizados correctamente");
      } else {
        setMensaje(`❌ Error: ${data.mensaje}`);
      }
    } catch (err) {
      console.error(err);
      setMensaje("Error al conectar con el servidor");
    }
  };

  return (
    <Container>
      <h4 style={{ fontWeight: "bold" }}>EDICION SECCION : CONTACTO</h4>
      <br />

      <Box>
        <h6>CORREO ELECTRONICO</h6>
        <AreaTexto value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </Box>

      <br /><br />

      <Box>
        <h6>NUMERO TELEFONO</h6>
        <AreaTexto value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </Box>

      <br /><br /><br />

      <Box>
        <h6>CUENTA LINKEDIN</h6>
        <AreaTexto value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      </Box>

      <br />
      <BotonActualizar onClick={actualizarTodo} />

      {mensaje && <p>{mensaje}</p>}
    </Container>
  );
}