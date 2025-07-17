import { Box, Container, Grid } from "@mui/material";
import CartaImagen from "../../ComponentesUI/CartaImagen";
import { useState, useEffect } from "react";

function Principal() {

  const [datos, setDatos] = useState(null);

  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/api/principal`)
.then(res => res.json())
.then(objetoJS => setDatos(objetoJS))
.catch(err => `No fue posible realizar la consulta al servidor.  ${err}`)
  }, []);
  



  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
    <img style={{width: '30%', height : 'auto', maxWidth: '100%'}} src="public/profesional.jpg" class="rounded float-start" alt="..."/> <br />
    
    <Box style={{ display : 'flex', justifyContent: 'center'}} >
      <p style={{marginLeft: '100px'}}>


              <h1 style={{fontWeight: 'bolder'}}>Sobre Nosotros</h1>
              
        <br />

        <p style={{fontSize :' 1.5vw', justifyContent: 'center'}}>
{datos ? datos.sobreNosotros : 'Cargando informacion del servidor ...'}
        </p>


</p>
   
    </Box>

        </Grid>
        
        <Grid item xs={12} md={6}>
    <img style={{width: '40%', height : 'auto', maxWidth: '100%'}}  src="public/presentacion.jpg" class="rounded float-end" alt="..."></img>

    <Box   sx={{
    display: 'flex',
    justifyContent: 'center',
    mt: '50px',
    pr: 4
  }}>
      <p>
        <h1 style={{fontWeight: 'bolder'}}>¿Qué hacemos?</h1>
        <p>
          {datos ? datos.queHacemos : 'Cargando informacion del servidor ...'}

        </p>
      </p>
    </Box>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Principal;