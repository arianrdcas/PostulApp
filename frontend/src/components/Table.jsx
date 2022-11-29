import React from "react";
import { NavLink } from "react-router-dom";

const Table = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre de empresa</th>
                  <th scope="col"> Descripcion de Empresa</th>
                  <th scope="col">Funciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <NavLink to="*">Mark</NavLink>
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default Table;
