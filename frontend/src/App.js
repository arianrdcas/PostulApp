import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bienvenido from "./pages/Bienvenido";
import {Home} from "./pages/Home";
import injectContext from "./store/appContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Bienvenido />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default injectContext(App);
