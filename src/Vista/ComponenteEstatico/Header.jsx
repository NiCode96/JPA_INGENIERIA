import { Container } from "@mui/material";
import BarraNavegacion from "../../ComponentesUI/BarraNavegacion";

function Header() {
    return(
<div>

<Container
  style={{
    backgroundImage: `url('/header.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '450px' ,
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
    maxWidth: '100%',
    fontFamily: 'monospace'
  }}
><h1 style={{ color: 'black', fontFamily: "'Kanit', sans-serif" }}>LaraPizarro Ingenieria</h1>
  
</Container>

<BarraNavegacion/>

</div>


    );
}

export default Header;