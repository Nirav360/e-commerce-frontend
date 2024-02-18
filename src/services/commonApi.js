import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const commonApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductCategories: builder.query({
      query: () => `products/categories`,
    }),
    getProductsByCategory: builder.query({
      query: (param) => `products/category/${param}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
} = commonApi;
