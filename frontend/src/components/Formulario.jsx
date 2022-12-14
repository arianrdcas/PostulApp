import { useState } from "react";
//import { useHistory } from "react-router";


const Inputs = ({ createPost }) => {

  //const history = useHistory();

  const [empresa, setEmpresa] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rol, setRol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      empresa,
      descripcion,
      rol,
    };
    createPost(newData);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-5">
              <div className="card-header text-center">
                <div className="card-title">
                  <h1>Agregue su postulación</h1>
                </div>
              </div>
              <div className="card-body ">
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Nombre de la Empresa
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escriba el nombre de la empresa"
                    aria-label="readonly input example"
                    name="enterprise"
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                  <div className="my-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label fw-bold"
                    >
                      Descripción de Empresa
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Escriba la descripción de empresa"
                      name="descriptions"
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <div className="mt-3 mb-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label fw-bold"
                      >
                        Rol
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Escriba el rol (frontend, backend o full-stack)"
                        aria-label="readonly input example"
                        name="rol"
                        onChange={(e) => setRol(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-success my-3" /* onClick={() => history.pushState('/')} */>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
