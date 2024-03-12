import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const imgUrl = import.meta.env.VITE_URL_IMAGES;

function Noticias(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.titulo}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.fecha}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.contenido}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <a href={post.link}>Continue reading...</a>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={`${imgUrl}${post.img}`}
            alt={post.titulo}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default Noticias;
