import { Box, Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

function Constructivas() {
  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sm={12} md={8}>
          <Typography variant="h3" gutterBottom>
            Opacos en edificios A,B y D
          </Typography>

          <Typography variant="body1" gutterBottom>
            Se propone el uso de aislamiento insuflado para mejorar la
            eficiencia energética reduciendo las pérdidas o ganancias térmicas.
            La medida consistiría en inyectar un material aislante en las
            cámaras de aire existentes en las fachadas del edificio, utilizando
            equipos especiales de insuflación. El material propuesto es
            Poliuretano (PUR) proyectado con CO2 en celda cerrada, con una
            conductividad térmica aproximada de 0,032 (ya que puede variar en
            función del fabricante).
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body1">
            El principal propósito del aislamiento insuflado es crear una capa
            aislante continua y uniforme, que ocupe los espacios existentes y
            reduzca la transferencia de calor entre el interior y el exterior (o
            viceversa).
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body1">
            El material utilizado para el aislamiento insuflado puede variar
            según la aplicación y las características específicas del edificio.
            Algunos materiales comunes incluyen la celulosa, la fibra de vidrio
            y la lana mineral, entre otros.{" "}
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body1">
            Con esto se gana una mejora significativa en cuanto a la
            transmitancia térmica pasando de 1.19 W/m2K a 0.45 W/m2K para la
            fachada tipo A y de 0.93W/m2K a 0.40 W/m2K en fachada tipo B
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body1">
            En cuanto a la carpintería para que siga respetando su estilo debido
            a la catalogación que conlleva se ha previsto hacer una modificación
            manteniendo el mismo color actual pero siendo el nuevo tipo PVC
            correderas o fijas según las necesidades para los edificios A,B y D
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            Tras el estudio iniciado para la insuflación de poliuretano en la
            cámara de aire en los edificios A,B y D se ha llegado a la siguiente
            conclusión:{" "}
          </Typography>
          <Typography sx={{ marginTop: 2 }} variant="body1">
            Con las mediciones generadas deduciendo los huecos obtenemos:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta Baja: 1874.6 m2
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta primera: 1197.15 m2
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta segunda: 205.52 m2
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            El precio de m2 de aislamiento insuflado en cámara de aire de
            poliuretano con un espesor medio de 50 mm ronda los 8.52 euros/m2,
            por lo cual obtendremos los siguientes presupuestos divididos por
            plantas:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta Baja: 13.318.63 euros
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta primera: 7.903.83 euros
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Planta segunda: 1.425.40 euros
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            Con una inversión de 22.647.86 euros aislaríamos al completo el
            edificio obteniendo ya no solo un considerable ahorro económico
            futuro en calefacción y refrigeración, sino que La rehabilitación
            con este producto, permite estar alineada con la agenda 2030,
            fomentando la reducción de las emisiones de CO2 e impulsando la
            economía circular.
          </Typography>
          <img src="/images/economiacirc.png" alt="" />

          <Typography variant="body1" gutterBottom>
            Captura de pantalla del tipo de aislamiento seleccionado
          </Typography>
          <Typography variant="h3" sx={{ marginTop: 4 }} gutterBottom>
            Propuesta de mejora del control solar
          </Typography>
          <Typography variant="body1" gutterBottom>
            Colocación de toldos: Toldos fijos de la empresa BricoDepot en las
            fachadas suroeste y al sureste. Se ha optado por la colocación de
            toldos de dimensiones 3,80 m de ancho y 3 m de largo extendido
            completamente.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            Es conveniente usar colores acordes al tipo de edificio, funcionales
            y poco llamativos por ello está empresa nos ofrece este toldo
            retráctil manual de aluminio y poliéster, resistente a la corrosión
            y a los rayos ultravioleta (UV). Tiene una inclinación ajustable de
            hasta 42º{" "}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <img src="/images/toldo1.png" alt="" />
            <img src="/images/toldo2.png" alt="" />
          </Box>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            Toldos necesarios según dimensiones de cada hueco Vista axonométrica
            con medidas de mejora (Estado actual Edificio C)
          </Typography>
          <img src="/images/toldo3.png" alt="" />
          <Typography variant="h3" sx={{ marginTop: 4 }} gutterBottom>
            Recomendaciones en huecos edificio A, B y D
          </Typography>
          <Typography variant="body1" gutterBottom>
            Se ha hecho una clasificación de las ventanas del edificio y se
            propondrán mejoras que mantengan la esencia exigida en el edificio
            antiguo. Estas propuestas se enfocan en aumentar la eficiencia
            disminuyendo los puentes térmicos producidos en los huecos,
            consiguiendo así un mejor aislamiento y menor coste en
            climatización.
          </Typography>
          <ul>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Instalar vidrios de doble o triple acristalamiento donde no los hubiera: Los vidrios con varias capas ayudan a mejorar el aislamiento térmico y acústico de las ventanas. El espacio entre las capas de vidrio puede llenarse con gas argón para mejorar aún más las propiedades de aislamiento.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Utilizar vidrios de baja emisividad (Low-E): Estos vidrios cuentan con una capa especial que refleja el calor hacia el interior en invierno y hacia el exterior en verano. Esto ayuda a mantener la temperatura interior más estable y reduce la transferencia de calor a través de las ventanas.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Instalar marcos de ventanas eficientes: Los marcos de las ventanas  tienen un papel muy  importante en el aislamiento del hueco. Los marcos de PVC, madera o aluminio con rotura de puente térmico, son opciones muy ventajosas. Esta medida es recomendable hacerla conjuntamente con el cambio de vidrios, ya que abarataría los costos de instalación y se aislaría el hueco por completo.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Utilizar selladores y juntas de calidad: Para evitar fugas de aire y filtraciones, es importante asegurarse de que las ventanas estén correctamente selladas. Se pueden aplicar selladores de calidad y utilizar juntas adecuadas para minimizar las corrientes de aire.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Instalar persianas o cortinas térmicas: Las persianas o cortinas con propiedades aislantes pueden ayudar a reducir la transferencia de calor a través de las ventanas. Estas se colocarán donde no las hubiera, o en su caso sustituirlas por unas de mayor calidad.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Considerar el uso de láminas o vinilos reflectantes: Estas películas se aplican directamente sobre el vidrio y pueden reducir la ganancia solar, bloquear los rayos UV y mejorar la privacidad. Son de fácil colocación y tienen precios asequibles.
              </Typography>
            </li>
          </ul>
          <Typography variant="h3" sx={{ marginTop: 4 }} gutterBottom>
          Recomendaciones en huecos Edificio C
          </Typography>
          <Typography variant="body1" gutterBottom>
          En cuanto al Edificio C se ha propuesto la inclusión de Argón entre las capas de los vidrios, para así mejorar la transmitancia térmica con un coeficiente variable de 0.1 a 0.3 W/m2K
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Constructivas;
