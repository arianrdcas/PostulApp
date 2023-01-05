import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
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
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default injectContext(App);
