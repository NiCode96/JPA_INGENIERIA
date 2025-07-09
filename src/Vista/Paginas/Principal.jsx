import { Box, Container, Grid } from "@mui/material";
import CartaImagen from "../../ComponentesUI/CartaImagen";

function Principal() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
    <img style={{width: '30%', height : 'auto', maxWidth: '100%'}} src="public/profesional.jpg" class="rounded float-start" alt="..."/> <br />
    
    <Box style={{ display : 'flex', justifyContent: 'center'}} >
      <p style={{marginLeft: '100px'}}>


              <h1 style={{fontWeight: 'bolder'}}>Sobre Nosotros</h1>


              
        <br />
      En JPA Ingeniería nos especializamos en el cálculo estructural, ofreciendo soluciones de diseño en acero y hormigón armado para todo tipo de proyectos, desde obras menores hasta estructuras industriales.
      
      <br /><br />
      Nuestro equipo está compuesto por profesionales con sólida formación técnica y enfoque práctico, comprometidos con entregar proyectos seguros, eficientes y ajustados a norma, que respondan tanto a las necesidades del cliente como a las exigencias actuales de la ingeniería.

</p>
   
    </Box>

        </Grid>
        
        <Grid item xs={12} md={6}>
    <img style={{width: '40%', height : 'auto', maxWidth: '100%'}}  src="public/presentacion.jpg" class="rounded float-end" alt="..."></img>

    <Box style= {{display: 'flex', justifyContent :'center', marginTop: '50px'}}>
      <p>
        <h1 style={{fontWeight: 'bolder'}}>¿Qué hacemos?</h1>
        <p>
          <ul>
            <li>Diseño y cálculo de estructuras en Hormigón Armado</li>
            <li>Diseño y cálculo de estructuras en acero (galpones, naves, soportes, marcos, etc.)</li>
            <li>Memorias para viviendas y construcciones menores</li>
            <li>Refuerzo o modificación de estructuras existentes</li>
            <li>Criterios de diseño y especificaciones técnicas estructurales</li>
          </ul>
        </p>
      </p>
    </Box>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Principal;