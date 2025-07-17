import { Grid } from "@mui/material";
import Acordeon from "../../ComponentesUI/Acordeon";
import { useState, useEffect } from "react";



export default function Contacto(){

const [datos , setDatos] = useState(null);


useEffect(() => {

 fetch(`${import.meta.env.VITE_API_URL}/api/contacto`)
  .then(res => res.json())
  .then(objetoJS => setDatos(objetoJS))
  .catch(err => console.log(`hubo un error el fetch de contacto ${err}`))

}, [])



    return(
    
<Grid container spacing={2} style={{backgroundImage : "url('/contacto.jpg')", height :'400px' , backgroundSize :'cover', backgroundPosition :'center'}}>


<Grid item xs ={6} style ={{ paddingLeft : '30px', paddingTop: '30px',fontSize : '3vh' }} >

    <h3 style={{fontWeight: 'bolder'}} >Contáctanos</h3>

<ul style={{fontSize: '1.5vw' , fontWeight: 'bold'}}>
  <li >Correo:{datos ? datos.correo : 'cargando correo...'}</li>
  <li >Telefono:{datos ? datos.telefono : 'cargando telefono...'}</li>
  <li>Linkdin:{datos ? datos.linkedin : 'cargando linkedin...'}</li>
</ul>
 

</Grid>


     </Grid>


    );
}