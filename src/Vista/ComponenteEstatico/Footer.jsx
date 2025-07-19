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

<h5>Nuestra Misión</h5>
  Ser un socio estratégico en ingeniería estructural, entregando soluciones precisas y confiables, con un enfoque riguroso en la calidad, la seguridad y la optimización integral del diseño.             </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

<img
  src="/usach.png"
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