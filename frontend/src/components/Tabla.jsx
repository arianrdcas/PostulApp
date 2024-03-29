import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Botones from "./Botones";

const Tabla = () => {
  const { store } = useContext(Context);
  const { empresas } = store;

  const [visible, setVisible] = useState(false);

  const mostrar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-5">
              <div className="card-header text-center">
                <div className="card-title">
                  <h1>Listado de Empresas</h1>
                </div>
              </div>
              <div className="card-body">
                <table className="table border border-dark table-success table-striped my-5 ">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">#</th>
                      <th scope="col">Nombre de empresa</th>
                      <th scope="col"> Descripción de Empresa</th>
                      <th scope="col">Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!empresas &&
                      empresas.length > 0 &&
                      empresas.map((empresa, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkboxNoLabel"
                                  value={empresa.id}
                                  aria-label="..."
                                  onClick={mostrar}
                                />
                              </div>
                            </td>
                            <td className="align-baseline">{empresa.id}</td>
                            <td className="align-baseline">
                              <Link to={`/empresapage/${empresa.id}`}>
                                {empresa.nombre}
                              </Link>
                            </td>
                            <td className="align-baseline">
                              {empresa.descripcion}
                            </td>
                            <td className="align-baseline">{empresa.rol}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer d-flex mb-3">
                <div className="me-auto p-2 ">
                  <Link className="btn btn-success" to="/formulario">
                    Agregar postulación
                  </Link>
                </div>
                {visible ? <Botones /> : ""}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabla;
