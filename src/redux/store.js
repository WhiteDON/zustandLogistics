import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { ordersApi } from './services/ordersApi';

export const createStore = (options) => configureStore({
    reducer: {
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ordersApi.middleware),
});

export const store = createStore();

export const useAppDispatch = useDispatch;
export const useTypedSelector = useSelector;
