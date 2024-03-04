import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Aire acondicionado", 12.98],
  ["Equipos de bombeo", 1.18],
  ["Ofimatica", 56.66],
  ["Otros", 6.49],
  ["Iluminación interior", 19.82],
  ["Iluminación interior", 2.87],
];

export const data2 = [
  ["Fechas", "Consumo"],
  ["01/10/2018-31/10/2018", 13425],
  ["01/11/2018-30/11/2018", 12172],
  ["01/12/2018-31/12/2018", 9369],
  ["01/01/2019-31/01/2019", 21115],
  ["01/02/2019-28/02/2019", 15031],
  ["01/03/2019-31/03/2019", 14582],
  ["01/04/2019-30/04/2019", 12689],
  ["01/05/2019-31/05/2019", 11456],
  ["01/06/2019-30/06/2019", 6344],
  ["01/07/2019-31/07/2019", 6255],
  ["01/08/2019-31/08/2019", 7264],
  ["01/09/2019-30/09/2019", 3783],
];
export const options2 = {
  chart: {
    title: "CONSUMO ANUAL ENERGÍA ELÉCTRICA (kWh)",
    subtitle: "Figura 1 Perfil de consumo eléctrico anual",
  },
  backgroundColor: "transparent",
};

export const options = {
  title: "Consumo de energia",

  is3D: true,
  backgroundColor: "transparent",
};

function Consumos() {
  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sm={12} md={8}>
          <Typography variant="h3" gutterBottom>
            IES POLITÉCNICO HERMENEGILDO LANZ
          </Typography>
          <Typography variant="body1" gutterBottom>
            Los principales focos de consumo eléctrico están presentes en
            receptores como ordenadores, monitores, altavoces, impresoras,
            proyectores, equipos de iluminación, equipos de climatización y
            ventilación colectiva, split y radiadores eléctricos,
            principalmente.
          </Typography>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          <Typography variant="body1" gutterBottom>
            Por tanto, partiendo de la base de que la potencia contratada es de
            50Kw, el consumo y coste eléctrico anual que se tiene de referencia,
            pertenece al periodo del 01/10/2018 - 30/09/2019, siendo estos los
            siguientes:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PERIODO FACTURACIÓN</TableCell>
                  <TableCell>CONSUMO ENERGÍA ACTIVA TOTAL (kWh)</TableCell>
                  <TableCell>IMPORTE (con IVA) (€)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>01/10/2018-31/10/2018</TableCell>
                  <TableCell>13.425</TableCell>
                  <TableCell>2.101,68</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/11/2018-30/11/2018</TableCell>
                  <TableCell>12.172</TableCell>
                  <TableCell>1.417,28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/12/2018-31/12/2018</TableCell>
                  <TableCell>9.369</TableCell>
                  <TableCell>1.824,67</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/01/2019-31/01/2019</TableCell>
                  <TableCell>21.115</TableCell>
                  <TableCell>2.920,02</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/02/2019-28/02/2019</TableCell>
                  <TableCell>15.031</TableCell>
                  <TableCell>1.664.92</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/03/2019-31/03/2019</TableCell>
                  <TableCell>14.582</TableCell>
                  <TableCell>2.154,94</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/04/2019-30/04/2019</TableCell>
                  <TableCell>12.689</TableCell>
                  <TableCell>1.986,56</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/05/2019-31/05/2019</TableCell>
                  <TableCell>11.456</TableCell>
                  <TableCell>1.847.19</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/06/2019-30/06/2019</TableCell>
                  <TableCell>6.344</TableCell>
                  <TableCell>1.197.58</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/07/2019-31/07/2019</TableCell>
                  <TableCell>6.255</TableCell>
                  <TableCell>1.197.64</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/08/2019-31/08/2019</TableCell>
                  <TableCell>7.264</TableCell>
                  <TableCell>1.389,65</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01/09/2019-30/09/2019</TableCell>
                  <TableCell>3.783</TableCell>
                  <TableCell>1.038,3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TOTAL anual:</TableCell>
                  <TableCell>133.485</TableCell>
                  <TableCell>20.740,43</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 22 consumos y coste anual de la energía eléctrica
          </Typography>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
          />
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            El consumo medio mensual se estima en 11.123,75 kWh, el coste medio
            mensual en 1.728,369 € y la ratio económica del precio de la
            energía, teniendo en cuenta los datos anteriores, sería de 0,1553
            €/kWh. Así pues, los valores de consumos y costes energéticos
            anuales globales de electricidad se recogen en la siguiente tabla:
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    ELECTRICIDAD
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Consumo eléctrico (kWh/año)</TableCell>
                  <TableCell align="right">133.485</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coste eléctrico (€/año)</TableCell>
                  <TableCell align="right">20.740,43</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coste unitario con IVA (€/kWh)</TableCell>
                  <TableCell align="right">0,1553</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h3" sx={{ marginTop: 4 }} gutterBottom>
            CIFP Virgen de Gracia
          </Typography>
          <Typography variant="body1" gutterBottom>
            La instalación eléctrica del centro consiste en tres acometidas
            independientes, las cuales suministran energía a las tres partes del
            centro. Todos ellos están regidos por tarifas de tipo 3.0A, siendo
            la empresa comercializadora GBP (Global Biosfera Protect). En este
            caso los focos de consumo son el sistema de iluminación, los equipos
            de ofimática, el sistema de calefacción y otros consumos. De cada
            foco de consumo se va a realizar una breve introducción y
            posteriormente se va a mostrar unas tablas con los resultados
            obtenidos tras el análisis de los distintos consumos.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 4 }} gutterBottom>
            Sistemas de iluminación
          </Typography>
          <Typography variant="body1" gutterBottom>
            La instalación de iluminación interior está formada, en su mayoría,
            por lámparas LED aunque en ciertas zonas de poca afluencia hay
            instaladas lámparas fluorescentes. A continuación, se presenta una
            tabla con las características de las luminarias instaladas en el
            edificio, elaborada a partir de la información recopilada en la
            visita:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PLANTA</TableCell>
                  <TableCell>Nº DE LUMINARIAS</TableCell>
                  <TableCell>Nº DE LÁMPARAS</TableCell>
                  <TableCell>POTENCIA TOTAL (Kw)</TableCell>
                  <TableCell>HORAS DE USO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>ÁTICO</TableCell>
                  <TableCell align="right">102</TableCell>
                  <TableCell align="right">104</TableCell>
                  <TableCell align="right">2,912</TableCell>
                  <TableCell align="right">6888</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2º PLANTA</TableCell>
                  <TableCell align="right">208</TableCell>
                  <TableCell align="right">245</TableCell>
                  <TableCell align="right">5,701</TableCell>
                  <TableCell align="right">28374</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1º PLANTA</TableCell>
                  <TableCell align="right">203</TableCell>
                  <TableCell align="right">235</TableCell>
                  <TableCell align="right">4,272</TableCell>
                  <TableCell align="right">26076</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PLANTA BAJA</TableCell>
                  <TableCell align="right">207</TableCell>
                  <TableCell align="right">290</TableCell>
                  <TableCell align="right">5,199</TableCell>
                  <TableCell align="right">18352</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TOTAL PLANTA</TableCell>
                  <TableCell align="right">720</TableCell>
                  <TableCell align="right">910</TableCell>
                  <TableCell align="right">18,084</TableCell>
                  <TableCell align="right">79690</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 1. Características de las luminarias del CIFP Virgen de Gracia
          </Typography>
          <Typography variant="body1" gutterBottom>
            En cuanto al sistema de encendido y apagado de la mayoría de las
            luminarias ubicadas en el edificio se realiza de manera manual, bien
            mediante interruptor, o bien, mediante el cuadro eléctrico
            correspondiente, exceptuando el encendido de las luminarias del
            pasillo de la segunda planta que cuenta con un sensor de presencia.
            También señalar que el ascensor tiene un detector de presencia que
            se acciona cuando se abren las puertas con llave, y que cuando no
            haya presencia al cabo del tiempo las luminarias se apaguen.
            <br></br>
            Por otro lado, el edificio cuenta con unas características de
            edificación que hacen posible el aprovechamiento de la luz natural
            en casi todos los espacios.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 4 }} gutterBottom>
            Ofimática
          </Typography>
          <Typography variant="body1" gutterBottom>
            El centro cuenta con una elevada cantidad de ordenadores,
            proyectores e impresoras. Durante la visita para la auditoría la
            mayoría de las aulas con ordenadores estaban vacías, por lo que los
            equipos estaban apagados, pero un detalle a tener en cuenta de cara
            a posibles mejoras es que muchos monitores (≈60%) tenían el piloto
            de standby encendido. En cuanto a los equipos de impresión se
            encuentran principalmente en despachos y en departamentos del
            profesorado, así como las fotocopiadoras se encuentran en la sala de
            profesores y conserjería.
          </Typography>
          <Typography variant="body1" gutterBottom>
            A continuación, se incluye un resumen del material ofimático que se
            ha podido comprobar.
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2}>PLANTA</TableCell>
                  <TableCell colSpan={2} align="center">
                    MONITORES
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    PC
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    IMPRESORA FOTOCOPIADORA
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    PROYECTOR
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    POTENCIA TOTAL OFIMATICA (kW)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CANTIDAD</TableCell>
                  <TableCell>POTENCIA (kW)</TableCell>
                  <TableCell>CANTIDAD</TableCell>
                  <TableCell>POTENCIA (kW)</TableCell>
                  <TableCell>CANTIDAD</TableCell>
                  <TableCell>POTENCIA (kW)</TableCell>
                  <TableCell>CANTIDAD</TableCell>
                  <TableCell>POTENCIA (kW)</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>ÁTICO</TableCell>
                  <TableCell align="right">11</TableCell>
                  <TableCell align="right">0,04</TableCell>
                  <TableCell align="right">11</TableCell>
                  <TableCell align="right">0,125</TableCell>
                  <TableCell align="right">2</TableCell>
                  <TableCell align="right">0,1</TableCell>
                  <TableCell align="right">5</TableCell>
                  <TableCell align="right">0,275</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2º PLANTA</TableCell>
                  <TableCell align="right">118</TableCell>
                  <TableCell align="right">0,04</TableCell>
                  <TableCell align="right">118</TableCell>
                  <TableCell align="right">0,125</TableCell>
                  <TableCell align="right">2</TableCell>
                  <TableCell align="right">0,1</TableCell>
                  <TableCell align="right">12</TableCell>
                  <TableCell align="right">0,275</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1º PLANTA</TableCell>
                  <TableCell align="right">61</TableCell>
                  <TableCell align="right">0,04</TableCell>
                  <TableCell align="right">64</TableCell>
                  <TableCell align="right">0,125</TableCell>
                  <TableCell align="right">6</TableCell>
                  <TableCell align="right">0,1</TableCell>
                  <TableCell align="right">12</TableCell>
                  <TableCell align="right">0,275</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>PLANTA BAJA</TableCell>
                  <TableCell align="right">42</TableCell>
                  <TableCell align="right">0,04</TableCell>
                  <TableCell align="right">44</TableCell>
                  <TableCell align="right">0,125</TableCell>
                  <TableCell align="right">20</TableCell>
                  <TableCell align="right">0,1</TableCell>
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">0,275</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TOTAL PLANTA</TableCell>
                  <TableCell align="right">232</TableCell>
                  <TableCell align="right">0,04</TableCell>
                  <TableCell align="right">237</TableCell>
                  <TableCell align="right">0,125</TableCell>
                  <TableCell align="right">30</TableCell>
                  <TableCell align="right">0,1</TableCell>
                  <TableCell align="right">30</TableCell>
                  <TableCell align="right">0,275</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>POTENCIA TOTAL (Kw)</TableCell>
                  <TableCell align="center" colSpan={2}>
                    9,28
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    29,625
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    3
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    8,25
                  </TableCell>
                  <TableCell align="center">50,155</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 2. Potencia eléctrica de los equipos ofimáticos del CIFP
            Virgen de Gracia
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 4 }} gutterBottom>
            Otros equipos eléctricos
          </Typography>
          <Typography variant="body1" gutterBottom>
            Existen instalados en el centro otros consumidores de electricidad,
            cuyas características generales se muestran en la siguiente tabla,
            elaborada a partir de la información recopilada durante la visita:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ORTOS EQUIPOS ELECTRICOS</TableCell>
                  <TableCell>POTENCIA ELECTRICA (kW)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>PANTALLA SMART</TableCell>
                  <TableCell align="right">2,1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>FRIGORIFICO</TableCell>
                  <TableCell align="right">0,54</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CENTRO DE COMUNICACIONES</TableCell>
                  <TableCell align="right">2,65</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MICROONDAS</TableCell>
                  <TableCell align="right">2,4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ARMARIOS PORTATILES</TableCell>
                  <TableCell align="right">7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAQUINA EXPENDEDORA</TableCell>
                  <TableCell align="right">0,4</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAQUINA BEBIDAS</TableCell>
                  <TableCell align="right">0,55</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAQUINA CAFE</TableCell>
                  <TableCell align="right">1,85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TRITURADORA</TableCell>
                  <TableCell align="right">0,7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DISP AGUA</TableCell>
                  <TableCell align="right">0,17</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SPLIT</TableCell>
                  <TableCell align="right">3,87</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TV</TableCell>
                  <TableCell align="right">0,045</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>POTENCIA ELÉCTRICA TOTAL</TableCell>
                  <TableCell align="right">22,28</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 3.Potencia de otros de equipos de consumo eléctrico del CIFP
            Virgen de Gracia
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            A continuación, se muestra una tabla resumen con la potencia
            instalada en los diferentes sistemas analizados:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>TIPO DE INSTALACIÓN</TableCell>
                  <TableCell>
                    TOTAL Potencia eléctrica instalada (kWe)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Bombeo ACS, Calefacción y Refrigeración</TableCell>
                  <TableCell align="right">605,27</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Iluminación</TableCell>
                  <TableCell align="right">18,084</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ofimática</TableCell>
                  <TableCell align="right">55,33</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Otros Consumidores de Energía</TableCell>
                  <TableCell align="right">22,275</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Totales</TableCell>
                  <TableCell align="right">699,259</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="body1" gutterBottom>
            Tabla 4. Tabla resumen de potencia instalada en el CIFP Virgen de
            Gracia
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            Por otro lado, la tarifa contratada para cada cuadro eléctrico es la
            siguiente:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>TARIFA ACCESO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nº CUPS:</TableCell>
                  <TableCell>ES0022000005139943SG1P</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan={6}>POTENCIA CONTRATADA</TableCell>
                  <TableCell align="left">P1: 11 kW</TableCell>
                </TableRow>
                
                <TableRow>
             
                  <TableCell align="left">P2: 15,1 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P3: 15,1 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P4: 15,1 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P5: 15,1 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P6: 15,1 kW</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 20. Parámetros de contratación tarifaria cuadro 2
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>TARIFA ACCESO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nº CUPS:</TableCell>
                  <TableCell>ES0022000005139943SM1P</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan={6}>POTENCIA CONTRATADA</TableCell>
                  <TableCell align="left">P1: 16 kW</TableCell>
                </TableRow>
                
                <TableRow>
             
                  <TableCell align="left">P2: 19,8 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P3: 19,8 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P4: 19,8 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P5: 19,8 kW</TableCell>
                </TableRow>
                <TableRow>
                  
                  <TableCell align="left">P6: 19,8 kW</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 21. Parámetros de contratación tarifaria cuadro 3
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
          Los datos de consumo y coste eléctrico anuales disponibles para el suministro se han obtenido a partir de la facturación del periodo 01/01/2022 - 31/12/2022: 
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" >PERIODO FACTURACIÓN</TableCell>
                  <TableCell align="center" >CONSUMO ENERGÍA ACTIVA TOTAL (kWh)</TableCell>
                  <TableCell align="center" >IMPORTE (CON IVA) €</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">01/01/2022 - 31/01/2022</TableCell>
                  <TableCell align="center">2.004</TableCell>
                  <TableCell align="center">932,03</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center">01/02/2022 - 28/02/2022</TableCell>
                  <TableCell align="center">1.900</TableCell>
                  <TableCell align="center">916,12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/03/2022 - 31/03/2022</TableCell>
                  <TableCell align="center">3.248</TableCell>
                  <TableCell align="center">932,03</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/04/2022 - 30/04/2022</TableCell>
                  <TableCell align="center">2.492</TableCell>
                  <TableCell align="center">1.166,90</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/05/2022 - 31/05/2022</TableCell>
                  <TableCell align="center">1.518</TableCell>
                  <TableCell align="center">627,63</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/06/2022 - 30/06/2022</TableCell>
                  <TableCell align="center">1.677</TableCell>
                  <TableCell align="center">694,08</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/07/2022 - 31/07/2022</TableCell>
                  <TableCell align="center">1.171</TableCell>
                  <TableCell align="center">535,85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/08/2022 - 31/08/2022</TableCell>
                  <TableCell align="center">607</TableCell>
                  <TableCell align="center">421,65</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/09/2022 - 30/09/2022</TableCell>
                  <TableCell align="center">511</TableCell>
                  <TableCell align="center">403,89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/10/2022 - 31/10/2022</TableCell>
                  <TableCell align="center">1.477</TableCell>
                  <TableCell align="center">734,28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/11/2022 - 30/11/2022</TableCell>
                  <TableCell align="center">2.430</TableCell>
                  <TableCell align="center">839,11</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/12/2022 - 31/12/2022</TableCell>
                  <TableCell align="center">1.991</TableCell>
                  <TableCell align="center">748,30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">TOTAL ANUAL</TableCell>
                  <TableCell align="center">21.026</TableCell>
                  <TableCell align="center">9.978,15</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 3. Consumos y coste anual de la energía eléctrica cuadro 1
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" >PERIODO FACTURACIÓN</TableCell>
                  <TableCell align="center" >CONSUMO ENERGÍA ACTIVA TOTAL (kWh)</TableCell>
                  <TableCell align="center" >IMPORTE (CON IVA) €</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">01/01/2022 - 31/01/2022</TableCell>
                  <TableCell align="center">459</TableCell>
                  <TableCell align="center">286,78</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center">01/02/2022 - 28/02/2022</TableCell>
                  <TableCell align="center">2.116</TableCell>
                  <TableCell align="center">923,96</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/03/2022 - 31/03/2022</TableCell>
                  <TableCell align="center">1.229</TableCell>
                  <TableCell align="center">658,53</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/04/2022 - 30/04/2022</TableCell>
                  <TableCell align="center">1.360</TableCell>
                  <TableCell align="center">617,66</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/05/2022 - 31/05/2022</TableCell>
                  <TableCell align="center">1.069</TableCell>
                  <TableCell align="center">432,97</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/06/2022 - 30/06/2022</TableCell>
                  <TableCell align="center">633</TableCell>
                  <TableCell align="center">297,71</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/07/2022 - 31/07/2022</TableCell>
                  <TableCell align="center">1.500</TableCell>
                  <TableCell align="center">604,19</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/08/2022 - 31/08/2022</TableCell>
                  <TableCell align="center">820</TableCell>
                  <TableCell align="center">474,10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/09/2022 - 30/09/2022</TableCell>
                  <TableCell align="center">511</TableCell>
                  <TableCell align="center">350,25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/10/2022 - 31/10/2022</TableCell>
                  <TableCell align="center">965</TableCell>
                  <TableCell align="center">497,71</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/11/2022 - 30/11/2022</TableCell>
                  <TableCell align="center">1.057</TableCell>
                  <TableCell align="center">383,64</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/12/2022 - 31/12/2022</TableCell>
                  <TableCell align="center">1.515</TableCell>
                  <TableCell align="center">415,64</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">TOTAL ANUAL</TableCell>
                  <TableCell align="center">13.234</TableCell>
                  <TableCell align="center">5.997,14</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 23. Consumos y coste anual de la energía eléctrica cuadro 2
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" >PERIODO FACTURACIÓN</TableCell>
                  <TableCell align="center" >CONSUMO ENERGÍA ACTIVA TOTAL (kWh)</TableCell>
                  <TableCell align="center" >IMPORTE (CON IVA) €</TableCell>
                </TableRow>
                
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">01/01/2022 - 31/01/2022</TableCell>
                  <TableCell align="center">1.069</TableCell>
                  <TableCell align="center">569,69</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center">01/02/2022 - 28/02/2022</TableCell>
                  <TableCell align="center">6.088</TableCell>
                  <TableCell align="center">2.466,68</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/03/2022 - 31/03/2022</TableCell>
                  <TableCell align="center">3.867</TableCell>
                  <TableCell align="center">1.919</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/04/2022 - 30/04/2022</TableCell>
                  <TableCell align="center">4.294</TableCell>
                  <TableCell align="center">1.931,80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/05/2022 - 31/05/2022</TableCell>
                  <TableCell align="center">3.318</TableCell>
                  <TableCell align="center">1.148,88</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/06/2022 - 30/06/2022</TableCell>
                  <TableCell align="center">3.329</TableCell>
                  <TableCell align="center">1.202,47</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/07/2022 - 31/07/2022</TableCell>
                  <TableCell align="center">2.419</TableCell>
                  <TableCell align="center">993,88</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/08/2022 - 31/08/2022</TableCell>
                  <TableCell align="center">820</TableCell>
                  <TableCell align="center">503,23</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/09/2022 - 30/09/2022</TableCell>
                  <TableCell align="center">1.407 </TableCell>
                  <TableCell align="center">823,18</TableCell>
                </TableRow>
                
                <TableRow>
                  <TableCell align="center">01/10/2022 - 31/10/2022</TableCell>
                  <TableCell align="center">5.057</TableCell>
                  <TableCell align="center">2.320,10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">01/11/2022 - 30/11/2022</TableCell>
                  <TableCell align="center">3.146</TableCell>
                  <TableCell align="center">1.144,15</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="center">01/12/2022 - 31/12/2022</TableCell>
                  <TableCell align="center">1.566</TableCell>
                  <TableCell align="center">462,34</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">TOTAL ANUAL</TableCell>
                  <TableCell align="center">36.380</TableCell>
                  <TableCell align="center">15.485,40</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 24. Consumos y coste anual de la energía eléctrica cuadro 3
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            La distribución de consumos muestra un consumo variable a lo largo del año, en función del uso de la calefacción, siendo éste el más significativo y variable a lo largo del año. Se observa una mayor demanda de energía eléctrica durante los meses de invierno. El consumo medio mensual en el cuadro 1 se estima en 1.752,17 kWh, el coste medio mensual en 831,51 € y la ratio económica del precio de la energía sería de 0,47 €/kWh. El consumo medio mensual en el cuadro 2 se estima en 1.102,83 kWh, el coste medio mensual en 499,76 € y la ratio económica del precio de la energía sería de 0,45 €/kWh. El consumo medio mensual en el cuadro 3 se estima en 3.031,67 kWh, el coste medio mensual en 1.290,45 € y la ratio económica del precio de la energía sería de 0,42 €/kWh. 
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
          Así pues, los valores de consumos y costes energéticos anuales globales de electricidad se recogen en la siguiente tabla: 
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>ELECTRICIDAD</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>CONSUMO ELÉCTRICO (kWh/año)</TableCell>
                  <TableCell align="right">80.640</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>COSTE ELÉCTRICO (€/año)</TableCell>
                  <TableCell align="right">31.460,69</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>COSTE UNITARIO (con IVA) (€/kWh)</TableCell>
                  <TableCell align="right">0,45</TableCell>
                </TableRow>
            
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" gutterBottom>
            Tabla 25. Resumen de consumos y costes eléctricos
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Consumos;
