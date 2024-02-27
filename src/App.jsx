import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ResultadosPage from "./pages/ResultadosPage";
function App() {
  
  

  return (
    <>
    <Router>
    <div className={` flex flex-col min-h-screen`}>
    <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resultados" element={<ResultadosPage />} />
        </Routes>
    <Footer/>
    </div>
    </Router>
    </>
  );
}


   


export default App;
