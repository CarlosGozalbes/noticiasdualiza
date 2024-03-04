import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
/* import ProtectedRoute from "./components/utils/ProtectedRoute"; */
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ResultadosPage from "./pages/ResultadosPage";
import MejoraTuCentroPage from "./pages/MejoraTuCentroPage";
import ContactoPage from "./pages/ContactoPage";
import NoticiasPage from "./pages/NoticiasPage";

function App() {
  return (
    <>
    <Router>
    <div className={` flex flex-col min-h-screen`}>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resultados" element={<ResultadosPage />} />
          <Route path="/mejoratucentro" element={<MejoraTuCentroPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
        </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
