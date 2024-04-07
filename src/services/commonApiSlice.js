import { resetState, setToken } from "../slice/authSlice";
import { commonApi } from "./commonApi";

export const commonApiSlice = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload) => ({
        url: "register",
        method: "POST",
        body: payload,
      }),
    }),

    login: builder.mutation({
      query: (payload) => ({
        url: "login",
        method: "POST",
        body: payload,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(resetState());
          setTimeout(() => {
            dispatch(commonApi.util.resetApiState());
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    refresh: builder.mutation({
      query: () => ({
        url: "refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          const { accessToken } = data;
          dispatch(setToken({ accessToken }));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getProducts: builder.query({
      query: () => `getProducts`,
    }),

    getSingleProduct: builder.query({
      query: (id) => `getProduct/${id}`,
    }),

    getProductCategories: builder.query({
      query: () => `getProducts/categories`,
    }),

    getProductsByCategory: builder.query({
      query: (param) => `getProducts/category/${param}`,
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
} = commonApiSlice;
