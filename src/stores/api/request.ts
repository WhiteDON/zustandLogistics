import axios from "axios";

export const request = async (set, postfix) => {
  set({ isLoading: true });

  try {
    const result = await axios.get(import.meta.env.VITE_DB_URL + postfix);
    if (!result.data)
      throw new Error("Ошибка при загрузке данных! Попробуйте позже");

    set({ orders: result.data, errors: null });
  } catch (error: any) {
    set({ errors: error.message });
  } finally {
    set({ isLoading: false });
  }
};
