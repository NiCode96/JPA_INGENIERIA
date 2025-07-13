import { Container } from "react-bootstrap";
import Carta from "../../ComponentesUI/CartaImagen";
import { Box } from "@mui/material";
import Boton from "../../ComponentesUI/Boton";


export default function Portafolio(){

     let imagen1 = 'public/obra1.jpg';
     let titulo1  = 'Diseño y construcción de un puente vehicular de concreto postensado'
     let cuerpo1 = 'Proyecto que consiste en el análisis, dimensionamiento y ejecución de un puente para tráfico pesado, utilizando técnicas de concreto postensado para optimizar la resistencia y reducir el uso de materiales. Incluye estudios de suelo, cargas vivas y muertas, y planificación de la obra.'

     let imagen2 = 'public/obra2.jpg'
     let titulo2  = 'Sistema de drenaje pluvial urbano para mitigación de inundaciones'
     let cuerpo2 = 'Evaluación estructural y refuerzo de un edificio patrimonial para cumplir con normativas sísmicas actuales, manteniendo su valor arquitectónico. Incluye el uso de materiales compuestos, inyecciones de resinas y estructuras metálicas discretas para mejorar la capacidad de carga sin alterar su estética original.'
     
     let imagen3 = 'public/obra3.jpg'
     let titulo3  = 'Refuerzo estructural de un edificio histórico mediante técnicas modernas'
     let cuerpo3 = 'Diseño e implementación de una red de colectores, canales y pozos de infiltración en una zona urbana vulnerable a inundaciones. El proyecto considera modelación hidrológica e hidráulica para asegurar la evacuación eficiente del agua lluvia y disminuir el riesgo en eventos climáticos extremos.'
     
    
    return(

       
        <Container><br /><br />

<h1 style={{fontWeight: 'bolder'}}>Nuestros Proyectos</h1><br /><br />
      

<Box sx={{display : 'flex', flexDirection : 'row', flexWrap : 'wrap', gap: 2 }}>
            <Carta imagen={imagen1} titulo={titulo1} cuerpo={cuerpo1}></Carta>
            <Carta imagen={imagen2} titulo={titulo2} cuerpo={cuerpo2}></Carta>
            <Carta imagen={imagen3} titulo={titulo3} cuerpo={cuerpo3}></Carta>
</Box>
<br />
<Boton/>

        </Container>
    );

}