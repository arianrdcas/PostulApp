import { useContext } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Formulario = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: "",
    descripcion: "",
    rol: "",
    funciones_del_cargo: "",
    requerimientos: "",
    condiciones: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    actions.insertEmpresa(datos);
    setDatos({
      nombre: "",
      descripcion: "",
      rol: "",
      funciones_del_cargo: "",
      requerimientos: "",
      condiciones: "",
    });
    console.log(
      "enviando datos..." +
        datos.username +
        " " +
        datos.password +
        " " +
        datos.username +
        " " +
        datos.password +
        " " +
        datos.username +
        " " +
        datos.password
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={enviarDatos}>
              <div className="card my-5">
                <div className="card-header text-center">
                  <div className="card-title">
                    <h1>Agregue su postulación</h1>
                  </div>
                </div>
                <div className="card-body form-group ">
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
                    name="nombre"
                    id="nombre"
                    value={datos.name}
                    onChange={handleInputChange}
                    /* onChange={(e) => setNombre(e.target.value)} */
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
                      value={datos.descripcion}
                      onChange={handleInputChange}

                      /* onChange={(e) => setDescripcion(e.target.value)} */
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
                        value={datos.rol}
                        onChange={handleInputChange}

                        /* onChange={(e) => setRol(e.target.value)} */
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
                        name="funciones_del_cargo"
                        id="funciones_del_cargo"
                        value={datos.funciones_del_cargo}
                        onChange={handleInputChange}

                        /* onChange={(e) => setFunciones_del_cargo(e.target.value)} */
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
                        name="requerimientos"
                        id="requerimientos"
                        value={datos.requerimientos}
                        onChange={handleInputChange}

                        /* onChange={(e) => setRequerimientos(e.target.value)} */
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
                        name="condiciones"
                        id="condiciones"
                        value={datos.condiciones}
                        onChange={handleInputChange}
                        /* onChange={(e) => setCondiciones(e.target.value)} */
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success my-3" to="/postulaciones">
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
