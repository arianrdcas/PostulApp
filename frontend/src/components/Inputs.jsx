import React from 'react'

const Inputs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre de la Empresa
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Escriba el nombre de la empresa"
                aria-label="readonly input example"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Descripción de Empresa
              </label>
              <textarea
                className="form-control"
                placeholder="Escriba la descripción de empresa"
                id="exampleFormControlTextarea1"
              />
              <div className="mt-3 mb-5">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Función
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Escriba la función (frontend, backend o full-stack)"
                  aria-label="readonly input example"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputs