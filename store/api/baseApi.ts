// store/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://your-api.com/api",
  }),
  tagTypes: ["Products", "Product"], // add tags as you add features
  endpoints: () => ({}), // feature files inject their own endpoints
});
