import axios from "axios";

export const request = async (
  set,
  postfix,
  item = "",
  type = "get",
  changes,
  messageApi
) => {
  const success = (messageText = "Успешно!") => {
    messageApi.open({
      type: "success",
      content: messageText,
    });
  };

  const error = (messageText = "Ошибка, попробуйте позже") => {
    messageApi.open({
      type: "error",
      content: messageText,
    });
  };

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
            success();
          });
        })
        .catch((err) => {
          set({ errors: err.message });
          error(err.message);
        })
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
            success();
          });
        })
        .catch((err) => {
          set({ errors: err.message });
          error(err.message);
        })
        .finally(() => set({ isLoading: false }));
      break;
  }
};
