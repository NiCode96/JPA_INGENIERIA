import { Grid } from "@mui/material";
import Acordeon from "../../ComponentesUI/Acordeon";

export default function Contacto(){
    return(
    
     <Grid container spacing={2} style={{backgroundImage : "url('/contacto.jpg')", height :'400px' , backgroundSize :'cover', backgroundPosition :'center'}}>


<Grid item xs ={6} style ={{ paddingLeft : '30px', paddingTop: '30px',fontSize : '3vh' }} >

    <h3 style={{fontWeight: 'bolder'}} >Contáctanos</h3>

<ul style={{fontSize: '1.5vw' , fontWeight: 'bold'}}>
  <li >Correo: <a  style={{listStyle: 'none', color: 'inherit' , textDecoration: 'none'}} href="https://mail.google.com">jpa.ingenieria.solutions@gmail.com</a> </li>
  <li >Telefono: +569 7949 0233</li>
  <li>Linkdin: <a style={{listStyle: 'none', color: 'inherit' , textDecoration: 'none'}} href="https://www.linkedin.com">www.linkedin.com/in/jpaingeniería</a></li>
</ul>
 

</Grid>


     </Grid>


    );
}