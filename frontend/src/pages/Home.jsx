import Inputs from "../components/Inputs";
import { useState } from "react";
import Table from "../components/Table";

export function Home() {
  const [data, setData] = useState([
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

  function createPost(datas) {
    setData([...data, datas]);
  }

  return (
    <>
      <Inputs createPost={createPost} />
      <Table data={data} />
    </>
  );
}
