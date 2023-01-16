import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Empresa = () => {
  const { store, actions } = useContext(Context);
  const { empresa } = store;
  //const params = useParams();
  const { empresasId } = useParams();

  useEffect(() => {
    actions.getEmpresaById("http://localhost:3001/empresas", empresasId);
  }, []);
 
  return (
    <>
      <h1>{empresa.nombre}</h1>
      {/* <h1>{store.empresa.nombre}</h1>  */}
      {/* {!!empresas &&
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
                    value=""
                    aria-label="..."
                  />
                </div>
              </td>
              <td className="align-baseline">{empresa.id}</td>
              <td className="align-baseline">
                <Link to={"/empresas/" + empresa.id.toString()}>
                  {empresa.nombre}
                </Link>
              </td>
              <td className="align-baseline">{empresa.descripcion}</td>
              <td className="align-baseline">{empresa.rol}</td>
            </tr>
          );
        })} */}
    </>
  );
};

export default Empresa;
