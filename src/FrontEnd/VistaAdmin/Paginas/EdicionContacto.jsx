import { Container, Box } from "@mui/material";
import AreaTexto from "../../ComponentesUI/AreaDeTexto";
import BotonActualizar from "../../ComponentesUI/BotonUpdate";


export default function EdicionContacto(){
return (
<Container>
    <h4 style={{fontWeight: 'bold'}}>EDICION SECCION : CONTACTO</h4>  
    <br />

<Box>
    <h6>CORREO ELECTRONICO</h6> 
    <AreaTexto/>
    <BotonActualizar/>
</Box>

<br /><br />

<Box>
    <h6>NUMERO TELEFONO</h6> 
    <AreaTexto/>
     <BotonActualizar/>
</Box>

<br /><br /><br />

<Box>
    <h6>CUENTA LINKEDIN</h6> 
    <AreaTexto/>
     <BotonActualizar/>
</Box>

<br />


</Container>

);

}