const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      empresa: [
        {
          nombre:"",
          descripcion: "",
          requisitos:"",
          funciones:"",
          rol: "",
          fecha:""
        },
      ],
      usuario:[{
        nombre:"",
        username:"",
        apellido:"",
        contrasena:""

      }]
    },

    actions: {
      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },
    },
  };
};
export default getState;
