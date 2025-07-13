import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Boton from "./ComponentesUI/Boton";
import Header from "./Vista/ComponenteEstatico/Header";
import Principal from "./Vista/Paginas/Principal";
import Footer from "./Vista/ComponenteEstatico/Footer";
import Contacto from "./Vista/Paginas/Contacto";
import Portafolio from "./Vista/Paginas/portafolio";
import Panel from "./VistaAdmin/ComponenteEstatico/MenuPrincipal";
import EdicionPrincipal from "./VistaAdmin/Paginas/EdicionPrincipal";
import EdicionContacto from "./VistaAdmin/Paginas/EdicionContacto";
import EdicionProyectos from "./VistaAdmin/Paginas/EdicionProyectos";
import Login from "./VistaAdmin/ComponenteEstatico/Login";


function PaginaPrincipal() {
  return (

    <div style={{padding : 0}}>
      <Header />
    <br />

<section id="principal">
  <Principal/>
</section>

     <br/><br />
      
<section id="proyectos">
<Portafolio/>
</section>

     <br/><br />

<section id="contacto">
<Contacto/>
</section>


<br /><br />


      
      <Footer/>
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<PaginaPrincipal />} />

        {/* Panel con sub-rutas */}

        <Route path="/admin" element={<Login/>} />
        <Route path="/panel" element={<Panel />}>
          <Route path="principal" element={<EdicionPrincipal />} />
          <Route path="contacto" element={<EdicionContacto />} />
          <Route path="proyectos" element={<EdicionProyectos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;