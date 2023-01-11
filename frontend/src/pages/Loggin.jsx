import React from "react";

const Loggin = () => {
  return (
    <>
      <h1 className="text-center m-5">Loggin</h1>
      <form
        className="mx-auto my-5"
        //onSubmit={enviarDatos}
        style={{ width: "50%" }}
        method="post"
      >
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
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-info btn-block btn-sm">
            Loggin
          </button>
        </div>
      </form>
    </>
  );
};

export default Loggin;
