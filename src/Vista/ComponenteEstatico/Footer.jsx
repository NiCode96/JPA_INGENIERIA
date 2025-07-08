import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
<MDBFooter bgColor='dark' className='text-center text-lg-left text-light'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

            <p>
      En LaraPizarro Ingeniería brindamos servicios de ingeniería de alta competencia, con soluciones innovadoras y a medida. Confíe en nuestro equipo para llevar sus proyectos al siguiente nivel. ¡Contáctenos hoy desde esta página!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

<img
  src="public/usach.png"
  alt=""
  className="img-fluid"
/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Desarrollado por:{' '}
        <a className='text-light' href=''>
          NativeCode.cl
        </a>
      </div>
    </MDBFooter>
  );
}