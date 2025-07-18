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
    
<Grid container spacing={2} style={{
  backgroundImage : "url('/fondoContacto.jpg')",
  height :'400px',
  backgroundSize :'cover',
  backgroundPosition :'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: 'blur(6px)',
  backgroundColor: '#000000'
}}>


<Grid item xs={12} sm={10} md={8} lg={6} style={{ 
  margin: '10px',
  fontSize : '3vh', 
  display : 'flex',  
  flexDirection: 'column', 
  alignItems: 'center', 
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#000000b4',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.86)'
}} >

    <h3 style={{ 
      fontWeight: 700,
      fontSize: '4vh',
      color: '#939394ff',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>Contáctanos</h3>

<ul style={{
  fontSize: '1.5vw',
  fontWeight: 500,
  fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  listStyle: 'none'
}}>
  <li >Correo:{datos ? datos.correo : 'cargando correo...'}</li>
  <li >Telefono:{datos ? datos.telefono : 'cargando telefono...'}</li>
  <li>Linkdin:{datos ? datos.linkedin : 'cargando linkedin...'}</li>
</ul>
 

</Grid>


     </Grid>


    );
}