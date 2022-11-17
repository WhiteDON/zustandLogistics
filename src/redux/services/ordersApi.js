import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://637603f3b5f0e1eb85fffd28.mockapi.io/",
  }),
  endpoints: (builder) => ({
    orders: builder.query({
      query: () => `/orders`,
    }),
  }),
});

export const { useOrdersQuery } = ordersApi;
