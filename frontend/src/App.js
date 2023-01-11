import { Routes, Route, BrowserRouter } from "react-router-dom";
import Empresa from "./components/Empresa";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";

import Bienvenido from "./pages/Bienvenido";
import {Home} from "./pages/Home";
import Loggin from "./pages/Loggin";
import Registro from "./pages/Registro";
import injectContext from "./store/appContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Bienvenido />} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/empresas/:empresasId" element={<Empresa />} /> 
          <Route path="/formulario" element={<Formulario/>}/>
          <Route path="*" element={<div>404 - NOT FOUND</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
  
}

export default injectContext(App);
