import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";

const Inputs = (props) => {
  

  //const { actions, store } = useContext(Context);
  //const { handleChange} = actions;

  /* const [newEnterprise, setNewEnterprise] = useState();
  const [newEnterpriseDescription, setNewEnterpriseDescription] = useState();
  const [newFunctionEnterprise, setNewFunctionEnterprise] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "enterprises",
      newEnterprise,
      "description",
      newEnterpriseDescription,
      "function",
      newFunctionEnterprise
    );
    setNewEnterprise("")
    setNewEnterpriseDescription("")
    setNewFunctionEnterprise("")
  } */

   const [datos, setDatos] = useState([
    {
      empresa: "Zenta",
      descripcion: "Ingenieria de softweare",
      rol: "Full-Stack",
      numero: 1,
    },
    {
      empresa: "Cencosud",
      descripcion: "Desarrollo web",
      rol: "Frontend",
      numero: 2,
    },
    {
      empresa: "Falabella",
      descripcion: "Ingenieria de datos",
      rol: "Backend",
      numero: 3,
    },
  ]); 


  function createPost(empresa) {
    alert(empresa);
  } 


  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    createPost(datos);
    console.log(
      "enviando datos..." +
        datos.enterprise +
        " " +
        datos.descriptions +
        " " +
        datos.rol
    );
    localStorage.setItem("enterprises", datos.enterprise);
      localStorage.setItem("description", datos.descriptions);
      localStorage.setItem("function", datos.rol); 
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={enviarDatos}>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre de la Empresa
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Escriba el nombre de la empresa"
                aria-label="readonly input example"
                name="enterprise"
                onChange={handleInputChange}
              />
              <div className="my-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Descripción de Empresa
                </label>

                <input
                  className="form-control"
                  type="text"
                  placeholder="Escriba la descripción de empresa"
                  name="descriptions"
                  onChange={handleInputChange}
                />
                <div className="mt-3 mb-5">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Rol
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escriba el rol (frontend, backend o full-stack)"
                    aria-label="readonly input example"
                    name="rol"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button className="btn btn-success my-5" onClick={createPost}>
                Guardar
              </button>
            </form>
          </div>
        </div>
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
            {datos.map((datas) => (
              <tr key={datas.empresa}>
                <td>{datas.numero}</td>
                <td>
                  <NavLink to="*">{datas.empresa}</NavLink>
                </td>
                <td>{datas.descripcion}</td>
                <td>{datas.rol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Inputs;
