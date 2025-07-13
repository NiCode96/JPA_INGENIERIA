import { Container, Typography } from "@mui/material";
import BarraNavegacion from "../../ComponentesUI/BarraNavegacion";

function Header() {
  return (
    <div>
      <Container
        style={{
          position: "relative",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          padding: 0,
          margin: 0,
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <video
          src="public/pre.mp4"
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        {/* Título */}
<Typography
  variant="h1"
  sx={{
    color: "white",
    fontFamily: "Michroma",
    fontSize: "8vh",
    fontWeight: "bolder",
    zIndex: 1,
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#ffffff",
      textShadow: "0 0 10px #ffffff, 0 0 20px #ffffff",
    },
  }}
>
  JPA Ingenieria
</Typography>

        <br />

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Michroma",
            fontSize: "3vh",
            zIndex: 1,
          }}
        >
          El futuro de la ingeniería, en nuestras manos
        </Typography>
      </Container>

      <BarraNavegacion />
    </div>
  );
}

export default Header;