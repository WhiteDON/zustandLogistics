import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { nanoid } from 'nanoid'
import { request } from "./api/request";
import { MessageInstance } from "antd/es/message/interface";

export interface DeliveriesState {
  orders: Array<Object>;
  isLoading: boolean;
  errors: [] | null;
  addOrder: (name: string) => void;
  fetchOrders: () => void;
  deleteOrder: (item: string | number) => void;
  changeOrderStatus: (item: string | number, changes: Object, messageApi: MessageInstance) => void;
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
      fetchOrders: async () => request(set, 'orders', '', 'get'),
      deleteOrder: async (item) => request(set, 'orders', item, 'delete'),
      changeOrderStatus: async (item, changes, messageApi) => request(set, 'orders', item, 'patch', changes, messageApi),
    }))
  )
);

export default useDeliveriesStore;
