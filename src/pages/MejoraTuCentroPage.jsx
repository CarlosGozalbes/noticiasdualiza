import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import RadarIcon from "@mui/icons-material/Radar";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import DevicesIcon from "@mui/icons-material/Devices";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <BatteryAlertIcon />,
    description:
      "Señalizar en la puerta de salida “Revisar que todos los receptores se han apagado”.",
  },
  {
    icon: <PointOfSaleIcon />,
    description:
      "Cambiar la comercializadora para optimizar el coste del kWh (si es posible).",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    description:
      "Optimizar la potencia contratada en base al consumo real de energía (si es posible).",
  },
  {
    icon: <TipsAndUpdatesIcon />,
    description:
      "Sustituir las lámparas existentes por lámparas de tecnología LED.",
  },
  {
    icon: <DevicesIcon />,
    description:
      "Programar los ordenadores para que se apaguen automáticamente cuando finalice la jornada laboral. Y para que pasen a hibernación o suspensión transcurrido un tiempo.",
  },
  {
    icon: <RadarIcon />,
    description:
      "Instalación de detectores de presencia para automatizar el encendido y apagado de los sistemas de iluminación.",
  },
];

export default function MejoraTuCentroPage() {
  return (
    <Box
      id="mejoraCentro"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "black",
        bgcolor: "#F2F2F2",
        flexGrow: 1, 
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%", lg: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Guía de Buenas Prácticas - Instalación Eléctrica
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.800" }}>
            Para una instalación eléctrica segura y eficiente, sigue estas
            recomendaciones y más que encontraras en nuestra{" "}
            <a
              className="text-blue-700 hover:underline"
              href="/documents/guia_buenas_practicas.pptx"
              download
            >
              guía de buenas prácticas
            </a>
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.200",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography variant="body2" sx={{ color: "grey.800" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
