import { Container, Grid } from "@mui/material";
import CartaImagen from "../../ComponentesUI/CartaImagen";

function Principal() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eaque,
            blanditiis voluptatem perferendis explicabo voluptatibus a expedita
            minus recusandae omnis delectus pariatur non dolorem, ex adipisci
            quis iure ullam dicta.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <CartaImagen />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Principal;