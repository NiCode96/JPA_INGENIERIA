import { Container } from "@mui/material";
import Boton from "./ComponentesUI/Boton";
import Header from "./Vista/ComponenteEstatico/Header";
import Principal from "./Vista/Paginas/Principal";
import Footer from "./Vista/ComponenteEstatico/Footer";
import Contacto from "./Vista/Paginas/Contacto";
import Portafolio from "./Vista/Paginas/portafolio";

function App() {
  return (
    <div style={{padding : 0}}>
      <Header />
      <br />

      <Principal/>
      <br /><br />



<Portafolio/>

<br /><br />

<Contacto></Contacto>

<br /><br />


      
      <Footer/>
    </div>
  );
}

export default App;