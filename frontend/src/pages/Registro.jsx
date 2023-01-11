import React from "react";

const Registro = () => {
  return (
    <>
      <h1 className="text-center m-5">Bienvenido, regístrese !!!</h1>
      <form
        className="mx-auto my-5"
        //onSubmit={enviarDatos}
        style={{ width: "50%" }}
        method="post"
      >
        <input
          type="text"
          name="name"
          className="form-control my-4"
          placeholder="Ingrese su nombre"
          //onChange={handleInputChange}
          autoComplete="off"
          //value={datos.username}
        />
        <input
          type="text"
          name="email"
          className="form-control my-4"
          placeholder="Ingrese su email"
          //onChange={handleInputChange}
          autoComplete="off"
          //value={datos.username}
        />
        <input
          type="password"
          name="password"
          className="form-control mb-4"
          placeholder="Ingrese su contraseña"
          //onChange={handleInputChange}
          autoComplete="off"
          //value={datos.password}
        />
        <input
          type="password"
          name="repeat_password"
          className="form-control mb-4"
          placeholder="Por favor, repita su contraseña"
          //onChange={handleInputChange}
          autoComplete="off"
          //value={datos.password}
        />
        <input
          className="form-check-input mb-4"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label mx-1" htmlFor="flexCheckDefault" />
        Lea y acepte los términos y condiciones
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-info btn-block btn-sm">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default Registro;
