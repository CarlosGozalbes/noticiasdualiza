import { Box, Container, Grid } from "@mui/material";
import Portada from "../components/Portada";
import Noticias from "../components/Noticias";
import getNoticias from "../components/api/api";

let noticias = await getNoticias();
let portada = noticias[0];

if (!noticias) {
  noticias = [];
}

// const noticias = [
//   {
//     title: "Featured post",
//     date: "Nov 12",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
//   {
//     title: "Post title",
//     date: "Nov 11",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     image: "https://source.unsplash.com/random?wallpapers",
//     imageLabel: "Image Text",
//   },
// ];
function NoticiasPage() {
  if (noticias.length > 0) {
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
            width: { sm: "100%" },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%", lg: "80%" },
              textAlign: { sm: "left", md: "center" },
            }}
          >
            <Grid container spacing={2.5}>
              <Grid md={12}>
                <Portada post={portada} />
                <Grid container spacing={4}>
                  {noticias.map((post) => (
                    <Noticias key={post.title} post={post} />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          width: { sm: "100%", md: "60%", lg: "80%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <h1>No hay noticias para cargar</h1>
      </Box>
    );
  }
}

export default NoticiasPage;
