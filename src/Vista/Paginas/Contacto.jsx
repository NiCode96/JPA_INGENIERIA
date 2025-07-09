import { Grid } from "@mui/material";
import Acordeon from "../../ComponentesUI/Acordeon";

export default function Contacto(){
    return(
    
     <Grid container spacing={2} style={{backgroundImage : "url('/contacto.jpg')", height :'400px' , backgroundSize :'cover', backgroundPosition :'center'}}>


<Grid item xs ={6} style ={{ paddingLeft : '30px', paddingTop: '30px',fontSize : '3vh' }} >

    <h3 >Contáctanos</h3>

  <Acordeon></Acordeon>
 

</Grid>


     </Grid>


    );
}