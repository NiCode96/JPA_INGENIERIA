import { Container } from "@mui/material";
import Boton from "./ComponentesUI/Boton";
import Header from "./Vista/ComponenteEstatico/Header";
import Principal from "./Vista/Paginas/Principal";
import Footer from "./Vista/ComponenteEstatico/Footer";

function App() {
  return (
    <div style={{padding : 0}}>
      <Header />
      <Principal/>
      <Footer/>
    </div>
  );
}

export default App;