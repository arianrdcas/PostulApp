import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EmpresaPage = () => {
  const { store : {empresa}, actions } = useContext(Context);
  //const { empresa } = store;
  const {id} = useParams();

  
   useEffect(() => {
    actions.getEmpresaById("http://localhost:3001/empresas", id);
  }, []); 

  return (
    <>
      <h1>{!!empresa && empresa.nombre}</h1>
    </>
  ); 
};

export default EmpresaPage;
