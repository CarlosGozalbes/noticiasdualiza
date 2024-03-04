
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  '/logos/caixa.png',
  '/logos/fpempresa.png',
  
];

const darkLogos = [
    '/logos/caixa.png',
    '/logos/fpempresa.png',
  
];

const logoStyle = {
  width: '200px',
  height: '80px',
  objectFit:"contain",
  margin: '0 32px',
  opacity: 0.7,
};

export default function Colaboradores() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="Colaboradores" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Colaboradores
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`copmañia ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}