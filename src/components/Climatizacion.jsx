import { Box, Grid } from "@mui/material/";
import Typography from "@mui/material/Typography";

import { Chart } from "react-google-charts";
const data = [
  ["Task", "Hours per Day"],
  ["Aporte Fotovoltaica", 19],
  ["Gas Natural", 65],
  ["Electrica de Red", 16],
];

const data2 = [
  ["Task", "Hours per Day"],
  ["Gas Natural 79%", 2394.5],
  ["Electricidad 21%", 633.3],
];

const options2 = {
  title: "Coste por tipo de energia en €",
  subtitle:
    "Imagen 5.2.2 Resumen de consumos energéticos por tipo de energia para la climatización Edificio C",
  is3D: true,
  backgroundColor: "transparent",
};

const options = {
  title: "Consumo por tipo de energia",
  subtitle:
    "Imagen 5.2.2 Resumen de consumos energéticos por tipo de energia para la climatización Edificio C",
  is3D: true,
  backgroundColor: "transparent",
};

function Climatizacion() {
  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item sm={12} md={8}>
          <Typography variant="h3" gutterBottom>
            IES POLITÉCNICO HERMENEGILDO LANZ
          </Typography>
          <Typography variant="h5" gutterBottom>
            Descripción de las instalaciones.
          </Typography>
          <Typography variant="body1" gutterBottom>
            El edificio objeto del análisis más pormenorizado ha sido el
            edificio C. En este edificio podemos encontrar diferentes equipos de
            climatización y ventilación:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Sistema de calefacción por radiadores con calderas de
                condensación de gas natural.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Sistema de climatización con equipos de expansión directa en
                oficinas y sala técnica donde se encuentra el rack informático.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                -Unidades de Tratamiento de aire (UTA’s) para asegurar la
                calidad adecuada de aire por medios mecánicos. Hay dos unidades
                que están conectadas al circuito de calefacción. Ambas poseen
                recuperador de calor de flujo cruzado integrado, con un
                rendimiento puede oscilar entre 50% y 60%.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: 4 }} gutterBottom>
            La instalación de calefacción está compuesta por dos calderas de
            condensación que funcionan en cascada y a través del sistema de
            bombeo envían agua a los radiadores situados en las aulas y en los
            despachos. Cada uno de los recintos (aulas u oficinas) cuenta con un
            termostato y una válvula de zona que permite sectorizar la
            instalación, mejorando así la eficiencia energética de la misma.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Los radiadores utilizados son de aluminio.
          </Typography>
          <img src="/images/radiadoresalu.png" alt="" />
          <Typography sx={{ marginTop: 4 }} variant="body1">
            En la instalación hay 5 circuitos, uno por planta y otro dos para
            alimentar a las UTAS’s. Cada uno funciona con una bomba circuladora
            independiente. Esta sectorización de la instalación permite que
            podamos activar o parar cada uno de los sistemas de bombeo, por lo
            tanto podamos seleccionar la planta a calefactar de manera
            independiente. Esta posibilidad de sectorización se debe tener en
            cuenta a la hora del análisis de los usos y de los consumos
            energéticos.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            Además, las bombas recirculadoras son modulantes, lo que las hace
            que puedan adaptarse a la hora de bombear el caudal solicitado por
            la instalación en función del número de estancias que demanden
            servicio de calefacción.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            Este aspecto hace que la instalación sea eficiente tanto desde el
            punto de vista de la producción de calor, como de su transporte a
            las unidades terminales .
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            El sistema de control de la instalación es horario. Este control se
            realiza a través de un LOGO, donde se define el calendario escolar y
            el número de horas de funcionamiento de la instalación según la
            época del año. Una vez que la instalación está en marcha, ya entran
            en funcionamiento los termostato de zona.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            Los equipos de expansión directa son tipo split 1x1. Cada uno de
            ellos está situado en una zona y funciona de manera independiente
            controlado por su termostato. Este es el único sistema de
            climatización para verano. La gran mayoría de los equipos son de
            tecnología inverter.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            En los edificios A, B y D del centro disponen de una instalación con
            dos calderas de Gasóleo de 400kW que también funcionan en cascada.
            En este caso, no hay termostatos de zona, sino válvulas de reglaje
            programables para el control de la instalación en algunas aulas,
            básicamente las que tienen un menor horario de ocupación. Esta
            instalación no se va a definir con más detalle por no haberse
            estudiado en profundidad en este proyecto.
          </Typography>
          <Typography variant="h5" sx={{ marginTop: 4 }} gutterBottom>
            Análisis
          </Typography>
          <Typography variant="body1" gutterBottom>
            Para analizar los datos de consumo térmico se parte de lo siguiente:
          </Typography>
          <ul>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                - El sistema de calefacción trabaja durante 243 horas en el año
                tipo.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                - Los equipos autónomos de aire acondicionado para aulas y
                despachos trabajan durante 216 horas en el año de estudio.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                - Las Unidades de Tratamiento de Aire (UTA) no funcionan durante
                el año de estudio.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginTop: 4 }} variant="body1">
                - Hay 3 equipos de recirculación de agua caliente de
                calefacción. Al ser modulantes, se considera que trabajan en
                torno al 60 % de su capacidad máxima, para el cálculo del
                consumo eléctrico en instalación de calefacción.
              </Typography>
            </li>
          </ul>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            El análisis de los consumos térmicos se ha realizado sobre los datos
            del edificio C del centro por ser el edificio del que más
            información se dispone.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="body1">
            La siguiente tabla recoge los datos de potencia térmica y eléctrica
            de las diferentes instalaciones, las horas de uso anuales, los
            consumos anuales y el coste total por fuente de energía.
          </Typography>
          <img src="/images/tablaradiadores.png" alt="" />
          <Typography sx={{ marginTop: 4 }} variant="body1">
            A continuación, se muestra en forma gráfica el consumo o aporte por
            energía primaria y el coste anual de cada energía.
          </Typography>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          <Typography variant="body1">
            Imagen 5.2.2 Resumen de consumos energéticos por tipo de energia
            para la climatización Edificio C
          </Typography>

          <Typography sx={{ marginTop: 4 }} variant="body1">
            Se observa que el mayor consumo corresponde al gas natural, siendo
            este más de la mitad del consumo energético total. En cuanto a la
            electricidad, el consumo de energía es menor que lo que se genera
            con la instalación fotovoltaica. Sin embargo, esto no significa que
            el consumo eléctrico sea nulo, ya que este consumo eléctrico solo
            hace referencia al de la instalación de climatización (la parte de
            iluminación, instalación informática, etc se analiza más adelante).
          </Typography>
          <Chart
            chartType="PieChart"
            data={data2}
            options={options2}
            width={"100%"}
            height={"400px"}
          />
          <Typography variant="body1">
            Imagen 5.2.3 Resumen de costos energéticos, para climatización, por
            tipo de energia.{" "}
          </Typography>

          <Typography sx={{ marginTop: 4 }} variant="body1">
            En el gráfico se observa que el coste que supone el gas natural es
            mucho mayor que el coste de electricidad, lo cual no es
            sorprendente, viendo que el consumo de gas natural es más de cuatro
            veces el consumo eléctrico de la instalación de climatización.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h5" gutterBottom>
            Propuestas de mejora. Medidas de ahorro energético (MAEs)
          </Typography>
          <Typography variant="body1" gutterBottom>
            Las medidas de mejora propuestas para las instalaciones de
            climatización/calefacción del centro son las siguientes:
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            OPTIMIZACIÓN DE LA FACTURACIÓN DE GAS NATURAL.
          </Typography>
          <Typography variant="body1" gutterBottom>
            La medida de mejora propuesta busca ajustar la tarifa de facturación
            a la demanda real para evitar costes innecesarios. Actualmente, la
            comercializadora del centro es Gas Natural Fenosa y el tramo de
            suministro denominado TUR, RL.3, comprende de los 15.000 kWh hasta
            los 50.000 kWh anuales. Se considera el cambio de compañía a Total
            Energies, ya que ofrece precios competitivos y una tarifa de gas más
            acorde a los consumos declarados para el edificio. La comparativa
            arroja un precio calculado de 1530 euros para el año tipo de consumo
            en gas natural.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            MANTENIMIENTOS PREVENTIVOS Y CORRECTIVOS EN LAS UTA.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Se recomienda aplicar un plan de mantenimiento preventivo y
            correctivo a los equipos de tratamiento de aire y sus recuperadores,
            ya que no se encuentran en óptimas condiciones, aunque no es
            necesario renovarlos por equipos más modernos.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            El consumo energético de los equipos de ventilación y climatización
            depende de las pérdidas de presión del sistema en su conjunto, y los
            filtros de aire tienen un papel clave en el consumo del equipo de
            ventilación. Es necesario limpiarlos con regularidad y cambiarlos
            cuando lleguen al final de su periodo de vida útil. Si el grado de
            suciedad es elevado, los ventiladores se verán forzados a trabajar
            para compensar las pérdidas de presión adicionales, lo que
            repercutirá en un mayor consumo.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            También se recomienda sustituir los presostatos diferenciales (DPS)
            deteriorados para aumentar la eficiencia de los equipos, acompañado
            de las necesarias revisiones de los motores de los ventiladores de
            impulsión y extracción, así como de sus filtros (G4), y la
            realización de las operaciones de mantenimiento preventivas y
            correctivas pertinentes.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            AHORRO EN CONSUMO ENERGÉTICO DE AIRE ACONDICIONADO.
          </Typography>
          <Typography variant="body1" gutterBottom>
            La solución adoptada es la instalación de sensores de movimiento o
            presencia para evitar que los equipos de aire acondicionado estén
            funcionando cuando no hay nadie usando las dependencias, y de esta
            manera, controlar las consecuencias de gasto energético derivadas de
            los malos hábitos y el mal uso de estos equipos.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            En el centro sólo se dispone de 8 equipos autónomos ubicados en
            algunas dependencias. El sistema elegido consta de un contactor con
            relé de trabajo, llamado módulo central, al que se le une mediante
            bluetooth, un detector de presencia instalado de forma cenital y que
            ha sido tasado por la empresa suministradora de material
            ACTUM.ularidad y cambiarlos cuando lleguen al final de su periodo de
            vida útil. Si el grado de suciedad es elevado, los ventiladores se
            verán forzados a trabajar para compensar las pérdidas de presión
            adicionales, lo que repercutirá en un mayor consumo.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            SUSTITUCIÓN O PERMUTA DEL EQUIPO AUTÓNOMO DE LA SALA DE RACK.
          </Typography>
          <Typography variant="body1" gutterBottom>
            La sala de Rack donde se ubican los recursos informáticos y
            electrónicos que dan soporte a la red del centro necesitan unas
            condiciones de temperatura entre 18ªC y 27ºC por lo que se encuentra
            permanentemente climatizada por un equipo de AC.{" "}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            Se ha comprobado que tiene una tecnología antigua e ineficiente, y
            por ello, se propone su sustitución por un equipo nuevo partido de
            AC Mitsubishi MSZ-HR 25 VF con tecnología INVERTER y calificación
            energética A++ en refrigeración y A+++ en calefacción. La tecnología
            INVERTER evita los picos de arranque mediante variadores de
            frecuencia, suponiendo un ahorro del 60% de energía con respecto a
            la tecnología anterior.{" "}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            También se propone, en lugar de su sustitución por un equipo nuevo,
            la permuta con el equipo de la sala de archivo de secretaría que
            actualmente tiene poco uso y tiene mejores prestaciones energéticas,
            y que trabaja con el mismo refrigerante y sus potencias son
            similares. Esta propuesta tendría un ahorro importante en el coste
            de material y además también en mano de obra, ya que podría
            plantearse como una práctica de taller con el alumnado del GS de
            Mantenimiento de instalaciones térmicas y de fluidos, con la
            supervisión del equipo docente.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            Es altamente recomendable llevar a cabo algunas de estas dos
            medidas, ya que este equipo de AC es el mayor consumidor de las
            instalaciones de refrigeración en el centro.{" "}
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            INSTALACIÓN DE ENERGÍA SOLAR TÉRMICA
          </Typography>
          <Typography variant="body1" gutterBottom>
            Se propone la instalación de energía solar térmica como apoyo de la
            calefacción. Los equipos elegidos son 4 captadores de la marca
            Escosol de 2,23 m2 y capacidad de 170 l y un depósito acumulador de
            750 l y temperatura de trabajo de 90ºC.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            Con esta medida se consigue una mejora en la calificación energética
            del edificio pasando del rango B al rango A, ya que las emisiones
            bajarán hasta los 29kg CO2/m2año, y el consumo de energía primaria
            no renovable también disminuiría hasta los 145,1 kwh/m2año, tal y
            como se indica en el certificado energético del edificio.
          </Typography>
          <Typography sx={{ marginTop: 4 }} variant="h6" gutterBottom>
            INSTALACIÓN ELÉCTRICA
          </Typography>
          <Typography variant="body1" gutterBottom>
            Se propone instalar detectores de presencia que permitan encender y
            apagar el sistema de iluminación de cada estancia de forma
            automática, según el nivel de iluminación existente y la presencia
            de personas. Además, se propone instalar en el sistema de
            iluminación, lámparas de tecnología LED en aquellas estancias donde
            no se haya sustituido aún por lámparas de otra tecnología.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }} gutterBottom>
            Otra medida propuesta consiste en programar los ordenadores para que
            se apaguen de forma automática cuando finalice el horario lectivo,
            para evitar olvidos en los que el ordenador se queda encendido. Con
            el mismo fin, se propone reducir el tiempo de inactividad de los
            equipos, activando la suspensión o hibernación del ordenador
            transcurrido un determinado tiempo en el que no se está usando.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Climatizacion;
