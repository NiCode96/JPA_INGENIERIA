import { Container, Box } from "@mui/material";
import AreaTexto from "../../ComponentesUI/AreaDeTexto";
import SubirArchivo from "../../ComponentesUI/SubirArchivo";


export default function PrincipalAdmin(){
return (
<Container>
    <h4 style={{fontWeight: 'bold'}}>EDICION SECCION : PRINCIPAL</h4>  
    <br />

 
<Box>
    <h4>Sobre Nosotros</h4> 
    <AreaTexto/>

    <br />

    <h6>Cambiar Imagen</h6>
    <SubirArchivo></SubirArchivo>
</Box>


<br /><br /><br />


<Box>
    <h4>¿Qué hacemos?</h4> 
    <AreaTexto/>

    <br />

    <h6>Cambiar Imagen</h6>
    <SubirArchivo></SubirArchivo>
</Box>


</Container>

);

}