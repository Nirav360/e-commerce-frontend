import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setRefreshError, setToken } from "../slice/authSlice";
import { resetCart } from "../slice/cartSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    if (refreshResult?.data) {
      const { accessToken } = refreshResult.data;
      // store the new token
      api.dispatch(setToken({ accessToken }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = "Your login has expired.";
        api.dispatch(setRefreshError(true));
        api.dispatch(resetCart());
      }
      return refreshResult;
    }
  }

  return result;
};

// Define a service using a base URL and expected endpoints
export const commonApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Cart"],
  endpoints: () => ({}),
});
