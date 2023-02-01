import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { nanoid } from 'nanoid'
import { request } from "./api/request";

export interface DeliveriesState {
  orders: Array<Object>;
  isLoading: boolean;
  errors: [] | null;
  addOrder: (name: string) => void;
  fetchOrders: () => void;
}

const useDeliveriesStore = create<DeliveriesState>()(
  devtools(
    immer((set) => ({
      orders: [],
      isLoading: false,
      errors: [],
      addOrder: (name: string) =>
        set((state) => {
          state.orders.push({ id: nanoid(), name });
        }),
      fetchOrders: async () => request(set, 'orders'),
    }))
  )
);

export default useDeliveriesStore;
