import { useState } from "react";

const Formulario = ({ createPost }) => {
  const [empresa, setEmpresa] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rol, setRol] = useState("");
  const [funciones_del_cargo, setFunciones_del_cargo] = useState("");
  const [requerimientos, setRequerimientos] = useState("");
  const [condiciones, setCondiciones] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      empresa,
      descripcion,
      rol,
      funciones_del_cargo,
      requerimientos,
      condiciones,
    };
    createPost(newData);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="card my-5">
                <div className="card-header text-center">
                  <div className="card-title">
                    <h1>Agregue su postulación</h1>
                  </div>
                </div>
                <div className="card-body ">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  >
                    Nombre de la empresa
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escriba el nombre de la empresa"
                    aria-label="readonly input example"
                    name="empresa"
                    id="empresa"
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                  <div className="my-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label fw-bold"
                    >
                      Descripción de la empresa
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      placeholder="Escriba la descripción de empresa"
                      name="descripcion"
                      id="descripcion"
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
                        id="rol"
                        onChange={(e) => setRol(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 mb-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label fw-bold"
                      >
                        Funciones del cargo
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Escriba el rol (frontend, backend o full-stack)"
                        aria-label="readonly input example"
                        name="rol"
                        id="rol"
                        onChange={(e) => setFunciones_del_cargo(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 mb-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label fw-bold"
                      >
                        Requerimientos
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Escriba el rol (frontend, backend o full-stack)"
                        aria-label="readonly input example"
                        name="rol"
                        id="rol"
                        onChange={(e) => setRequerimientos(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 mb-4">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label fw-bold"
                      >
                        Condiciones
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Escriba el rol (frontend, backend o full-stack)"
                        aria-label="readonly input example"
                        name="rol"
                        id="rol"
                        onChange={(e) => setCondiciones(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-success my-3" /* onClick={() => history.pushState('/')} */
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
