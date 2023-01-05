import React from "react";
import { Link } from "react-router-dom";

const Bienvenido = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">
          Nuestra App para controlar tus postulaciones
        </h1>
        <h5 className="fw-normal my-5">
          Esta app tiene como objetivo principal, que el usuario en busca de
          empleo pueda ingresar las diferentes empresas a las cuales ha
          postulado, de esta forma es posible recordar oportunamente cada una de
          las postulaciones y en que estado se encuentran.
        </h5>
      </div>

      <div className="container text-center">
        <div className="row align-items-center ">
          <div className="col ">
            <Link className="btn btn-success regular-button m-5" to="/registro">
              Registrarse
            </Link>

            <Link className="btn btn-primary regular-button m-5" to="/loggin">
              Acceder
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bienvenido;
