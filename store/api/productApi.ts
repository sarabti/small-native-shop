import { Product } from "@/types/product";
import mockProducts from "../../mocks/mock-products-response.json";
import { baseApi } from "./baseApi";

const mockDelay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      queryFn: async () => {
        await mockDelay();
        return {
          data: mockProducts as Product[],
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product" as const, id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
