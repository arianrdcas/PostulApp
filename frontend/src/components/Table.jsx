import { NavLink } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <>
      <div className="container">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de empresa</th>
              <th> Descripcion de Empresa</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr key={i}>
                <td>{data.numero}</td>
                <td>
                  <NavLink to="/">{data.empresa}</NavLink>
                </td>
                <td>{data.descripcion}</td>
                <td>{data.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
