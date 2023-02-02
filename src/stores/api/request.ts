import axios from "axios";

export const request = async (set, postfix, item = "", type = "get", changes) => {
  set({ isLoading: true });

  switch (type) {
    case "get":
      axios
        .get(import.meta.env.VITE_DB_URL + postfix + "/" + (item ? item : ""))
        .then((res) => set({ orders: res.data, errors: null }))
        .catch((err) => set({ errors: err.message }))
        .finally(() => set({ isLoading: false }));
      break;
    case "delete":
      axios
        .delete(
          import.meta.env.VITE_DB_URL + postfix + "/" + (item ? item : "")
        )
        .then(() => {
          axios.get(import.meta.env.VITE_DB_URL + postfix).then((res) => {
            set({ orders: res.data, errors: null });
          });
        })
        .catch((err) => set({ errors: err.message }))
        .finally(() => set({ isLoading: false }));
      break;
    case "patch":
      axios
        .patch(
          import.meta.env.VITE_DB_URL + postfix + "/" + (item ? item : ""), 
          changes
        )
        .then(() => {
          axios.get(import.meta.env.VITE_DB_URL + postfix).then((res) => {
            set({ orders: res.data, errors: null });
          });
        })
        .catch((err) => set({ errors: err.message }))
        .finally(() => set({ isLoading: false }));
      break;
  }
};
