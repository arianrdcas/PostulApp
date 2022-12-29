import React from "react";
import { NavLink } from "react-router-dom";


const Table = ({data}) => {
//console.log(data)
  /* const [data, setData] = useState([
    {
      empresa: "Zenta",
      descripcion: "Ingenieria de softweare",
      rol: "Full-Stack",
      numero:1,
    },
    {
      empresa: "Cencosud",
      descripcion: "Desarrollo web",
      rol: "Frontend",
      numero:2,
    },
    {
      empresa: "Falabella",
      descripcion: "Ingenieria de datos",
      rol: "Backend",
      numero:3,
    },
  ]); */

  return (
    <>
      <div className="container">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Nombre de empresa</th>
              <th> Descripcion de Empresa</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos) => (
              <tr key={datos.enterprise}>
                <td>
                  <NavLink to="*">{datos.empresa}</NavLink>
                </td>
                <td>{datos.descriptions}</td>
                <td>{datos.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
