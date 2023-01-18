
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      usuario: null,
      empresas: null,
      empresa: null,
      error: null,
    },

    actions: {
      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },

      getEmpresa: (url) => {
        fetch(url, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            setStore({ empresas: data });
          })
          .catch(() => {});
      },
      getEmpresaById: (url, id) => {
        fetch(`${url}/${id}`, {})
          .then((response) => {
            if (!response.ok) setStore({ error: response.error });
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ empresa: data });
          })
          .catch(() => {});
      },
      insertEmpresa: (datos) => {
        fetch("http://localhost:3001/empresas", {
          method: "POST",
          body: JSON.stringify(datos),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      },
    },
  }; 
};
export default getState;
