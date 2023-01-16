const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      usuario: null,
      empresas: null,
      empresa: null,
      error: null,
    },

    actions: {
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
      getEmpresaById: (url, empresasId) => {
        fetch(`${url}/${empresasId}`, {})
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
    },
  };
};
export default getState;

