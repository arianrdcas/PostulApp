import { Link } from "react-router-dom";

const Table = ({ data }) => {
  
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
              <div className="card-body ">
                <table className="table border border-dark table-success table-striped my-5 ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre de empresa</th>
                      <th> Descripción de Empresa</th>
                      <th>Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr key={i}>
                        <td>{data.id}</td>
                        <td>
                          <Link to={"/empresas/" + data.id.toString()}>
                            {data.empresa}
                          </Link>
                        </td>
                        <td>{data.descripcion}</td>
                        <td>{data.rol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link className="btn btn-success my-3" to="/formulario">
                  Agregar postulación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
