import { resetState, setToken } from "../slice/authSlice";
import { addProductsInCart } from "../slice/cartSlice";
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
        credentials: "include",
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
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
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
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

    createCart: builder.mutation({
      query: (payload) => ({
        url: "cart",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),

    getCart: builder.query({
      query: () => ({
        url: "cart",
        method: "GET",
      }),
      providesTags: ["Cart"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { cart } = data;
          dispatch(addProductsInCart(cart));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    deleteCart: builder.mutation({
      query: (params) => ({
        url: "cart",
        method: "DELETE",
        params: { itemId: params },
      }),
      invalidatesTags: ["Cart"],
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
  useCreateCartMutation,
  useGetCartQuery,
  useDeleteCartMutation,
} = commonApiSlice;
