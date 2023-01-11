import Inputs from "../components/Formulario";
import { useState } from "react";
import Table from "../components/Tabla";

export function Home() {
  const [data, setData] = useState([
    {
      empresa: "Zenta",
      descripcion: "Ingenieria de softweare",
      rol: "Full-Stack",
      id: 1,
    },
    {
      empresa: "Cencosud",
      descripcion: "Desarrollo web",
      rol: "Frontend",
      id: 2,
    },
    {
      empresa: "Falabella",
      descripcion: "Ingenieria de datos",
      rol: "Backend",
      id: 3,
    },
  ]);

  /* function createPost(datas) {
    setData([...data, datas]);
  } */

  return (
    <>
      <Table data={data} />
    </>
  );
}
