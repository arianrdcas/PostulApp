import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EmpresaPage = () => {
  const {
    store: { empresa },
    actions,
  } = useContext(Context);
  //const { empresa } = store;
  const { id } = useParams();

  useEffect(() => {
    actions.getEmpresaById("http://localhost:3001/empresas", id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-5">
              <div className="card-header text-center">
                <div className="card-title">
                  <h1>{!!empresa && empresa.nombre}</h1>
                </div>
              </div>
              <div className="card-body">
                <h4>Descripción de la Empresa:</h4>
                <p>{!!empresa && empresa.descripcion}</p>
                <div className="my-3">
                  <h5>Rol deseado:</h5>
                  <p>{!!empresa && empresa.rol}</p>
                </div>
                <div className="my-3">
                  <h5>Funciones del cargo:</h5>
                  <p>{!!empresa && empresa.funciones_del_cargo}</p>
                </div>
                <div className="my-3">
                  <h5>Requeriminetos del cargo:</h5>
                  <p>{!!empresa && empresa.requerimientos}</p>
                </div>
                <div className="my-3">
                  <h5>Condiciones del cargo:</h5>
                  <p>{!!empresa && empresa.condiciones}</p>
                </div>
              </div>
              {/* <div className="card-footer">
                  <button
                    className="btn btn-success my-3" 
                  >
                    Guardar
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpresaPage;
