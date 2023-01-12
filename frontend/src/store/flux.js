const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      usuario: "null",
      empresa: "null"
    },

    actions: {
      /* handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      }, */
    },
  };
};
export default getState;
