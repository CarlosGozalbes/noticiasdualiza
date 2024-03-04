import { useState } from "react";

import "./proyecto.css";
import { BackgroundBeams } from "../BackgroundBeams";
import Colaboradores from "../Colaboradores";
import { Link } from "react-router-dom";
function Proyecto() {
  const [verProyecto, setVerProyecto] = useState(false);
  const [verProyecto2, setVerProyecto2] = useState(false);
  return (
    <div className="proyecto-container ">
       
      <section className="hero-container w-full flex justify-center ">
        <div className="pt-8  max-w-screen-xl text-center lg:pt-16 ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Juntos, hacia un futuro más verde y responsable
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-700">
            {" "}
            Impulsa la sostenibilidad energética en tu centro educativo con la
            ayuda de Dualiza 2022.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="/mejoratucentro"
              className="z-10 text-white bg-blue-500 hover:bg-blue-700 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              ¡Únete al cambio!
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              to="/noticias"
              className="z-10 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-white  border-gray-700 hover:bg-gray-700 "
            >
              Descubre las ultimas noticias
            </Link>
          </div>
          <div className="  text-center w-full ">
            <span className="font-semibold  text-gray-400 uppercase">
              Impulsores del proyecto
            </span>
            <div className="logos flex pt-12 pb-10  justify-between items-center">
              <a href="#" className=" logo-link mb-5 lg:mb-0 ">
                <img

                style={{objectFit:"contain"}}
                  className="logo-colaborador-hero"
                  src="logos/ab400.png"
                  alt=""
                />
              </a>
              <a href="#" className="logo-link mb-5 lg:mb-0 ">
                <img
                style={{objectFit:"contain"}}
                  className="logo-colaborador-hero2 object-cover	"
                  src="logos/hlanz400.png"
                  alt=""
                />
              </a>
              <a href="#" className=" logo-link  mb-5 lg:mb-0 ">
                <img
                  className="logo-colaborador-hero3 object-cover	"
                  src="logos/vg400.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="descripcion-proyecto-container mb-6 ">
        <h1 className="mb-4 my-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Descubre el Proyecto
        </h1>
        <div className="text-container mt-6">
          <div className="text-block">
            <h3 className="text-3xl font-bold">Descripcion</h3>
            <p className="text">
              El cambio climático y la reciente crisis energética que vivimos
              hacen necesario que los centros educativos y su comunidad tomen un
              papel protagonista en acciones que evalúen y mejoren el uso de la
              energía en sus edificios. La Unión Europea tiene marcadas las
              líneas a seguir para lograrlo en los Objetivos de Desarrollo
              Sostenible (ODS). Los centros educativos y su actividad formativa
              impacta directamente en el ahorro de la energía y tienen un peso
              específico esencial para alcanzar estos ODS, ya que la formación
              del{" "}
              {verProyecto ? (
                <>
                  alumnado es el camino hacia el uso responsable de la energía y
                  su conciencia sostenible hacia el medioambiente. Gracias a la
                  Convocatoria Ayudas Dualiza - Edición 2022 hemos conseguido
                  los recursos necesarios y queremos compartirlos contigo para
                  estudiar el estado actual de tu centro educativo frente a la
                  energía partiendo de un análisis y auditoría energética para
                  ver los puntos susceptibles de mejorar y con los resultados
                  elaborar una guía de buenas prácticas.
                </>
              ) : (
                ""
              )}
            </p>
            <button
              className="leer-mas"
              onClick={() => setVerProyecto(!verProyecto)}
            >
              Leer más
            </button>
          </div>
          <div className="text-block">
            <h3 className="text-3xl font-bold">Objetivos</h3>
            <p className="text">
              Al participar en este proyecto alcanzarás los siguientes
              objetivos. Realizaremos un análisis del estado actual de los
              centros educativos participantes en el proyecto centrándose en los
              aislamientos térmicos de la edificación y sus instalaciones, se ha
              realizado una auditoría energética para ver los puntos
              susceptibles de mejorar y hacer una guía de buenas prácticas para
              centros educativos. El alumnado aplicará directamente su
              aprendizaje en la mejora de la eficiencia energética y el
              mantenimiento de las{" "}
              {verProyecto2 ? (
                <>
                  {" "}
                  instalaciones de los edificios del centro educativo en tareas
                  multidisciplinares implicando distintas familias
                  profesionales. Se formará al profesorado y alumnado en
                  cuestiones relativas a auditoría energética y actuaciones a
                  llevar a cabo. Se estudiarán las posibles fuentes de energía
                  renovables integrándose en la medida de lo posible en la
                  arquitectura de los edificios para mejorar los aislamientos
                  térmicos de las envolventes y proporcionar zonas de sombreado
                  adicionales. Se establecerán planes de acción con medidas
                  concretas en los centros educativos que contribuyan de forma
                  directa a hacer frente a los retos medioambientales Queremos
                  establecer redes colaborativas intercentros y con empresas del
                  entorno para realizar actuaciones (formación, asesoramiento,
                  medidas a nivel técnico, de concienciación, etc.) que puedan
                  dar lugar a la mejora de la sostenibilidad de los centros
                  educativos. Colaborarás en añadir contenidos de tu centro
                  educativo a esta página web donde se compartimos las buenas
                  prácticas relativas al ahorro energético y la sostenibilidad y
                  todos los centros podrán obtener y aportar ideas y/o
                  soluciones para disminuir sus emisiones al medio ambiente.
                </>
              ) : (
                ""
              )}
            </p>
            <button
              className="leer-mas"
              onClick={() => setVerProyecto2(!verProyecto2)}
            >
              Leer más
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Colaboradores/>
      <BackgroundBeams />
    </div>
  );
}

export default Proyecto;
