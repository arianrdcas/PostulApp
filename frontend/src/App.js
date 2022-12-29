import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home";
import injectContext from "./store/appContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default injectContext(App);
