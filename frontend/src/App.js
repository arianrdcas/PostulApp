import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditarPostulacion from "./components/EditarPostulacion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import Bienvenido from "./pages/Bienvenido";
import Postulaciones from "./pages/Postulaciones"; 
import Loggin from "./pages/Loggin";
import Registro from "./pages/Registro";
import injectContext from "./store/appContext";
import EmpresaPage from "./pages/EmpresaPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenido />} />
          <Route path="/postulaciones" element={<Postulaciones />} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/empresas/" element={<EditarPostulacion />} />
          <Route path="/formulario" element={<Formulario />} />
          {/* <Route path="/formulario/:id" element={<Formulario />} /> */}
          <Route path="/empresapage/:id" element={<EmpresaPage />} />

          <Route path="*" element={<div>404 - NOT FOUND</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
