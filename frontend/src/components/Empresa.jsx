import React from "react";
import { useParams } from "react-router-dom";

const Empresa = () => {
  const params = useParams();

  return (
    <>
      <h1>
        Empresa numero {params.empresasId}
      </h1>
    </>
  );
};

export default Empresa; 
