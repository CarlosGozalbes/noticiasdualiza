import { useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Card,
  Stack,
} from "@mui/material";
import Swal from 'sweetalert2';


import emailjs from '@emailjs/browser';
export default function ContactForm() {
    const form = useRef();
/*   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); */

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICEID, import.meta.env.VITE_EMAILJS_TEMPLATEID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
      })
      .then(
        () => {
            Swal.fire({
                icon: 'success',
                title: 'Enviado!',
                text: 'Tu mensaje se envio correctamente.',
              });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Error al enviar el mensaje. Por favor intentalo de nuevo mas tarde.',
          });
        },
      );
  };

  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 6 },
        color: "black",
        bgcolor: "#F2F2F2",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <form ref={form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                  <Typography variant="h4" align="center" mb={2}>
                    Manda un mensaje a informacion@ieshlanz.es
                  </Typography>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                  /*   value={name}
                    onChange={(e) => setName(e.target.value)} */
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Tu Email"
                    name="email"
                   /*  value={email}
                    onChange={(e) => setEmail(e.target.value)} */
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                  /*   value={message}
                    onChange={(e) => setMessage(e.target.value)} */
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Enviar
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-between",
                      gap: {xs:2}
                      
                    }}
                  >
                    <Typography component="h4" variant="h6">
                      O contactanos en
                    </Typography>
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        p: 3,
                        height: "fit-content",
                        border: "1px solid",
                        borderColor: "grey.800",
                        background: "transparent",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <Box sx={{ opacity: "50%" }}>
                        IES POLITÉCNICO HERMENEGILDO LANZ
                      </Box>
                      <div>
                        <Typography variant="body2" sx={{ color: "grey.800" }}>
                          Dpto. Instalación y Mantenimiento. Maria Dolores Sáenz
                          Pajares. Email: msaepaj412@g.educaand.es
                        </Typography>
                      </div>
                    </Stack>
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        p: 3,
                        height: "fit-content",
                        border: "1px solid",
                        borderColor: "grey.800",
                        background: "transparent",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <Box sx={{ opacity: "50%" }}>IES AL-BAYTAR</Box>
                      <div>
                        <Typography variant="body2" sx={{ color: "grey.800" }}>
                          Dpto. Instalación y Mantenimiento. David Racero.
                          Email: dracpat976@g.educaand.es
                        </Typography>
                      </div>
                    </Stack>
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        p: 3,
                        height: "fit-content",
                        border: "1px solid",
                        borderColor: "grey.800",
                        background: "transparent",
                        backgroundColor: "grey.200",
                      }}
                    >
                      <Box sx={{ opacity: "50%" }}>CIFP VIRGEN DE GRACIA</Box>
                      <div>
                        <Typography variant="body2" sx={{ color: "grey.800" }}>
                          Dpto. Energía y Agua. Raúl Morales Ocaña. Email:
                          rmo14@educastillalamancha.es
                        </Typography>
                      </div>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
