import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, refreshError: false },
  reducers: {
    setToken: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    setRefreshError: (state, action) => {
      state.refreshError = action.payload;
    },
    resetState: (state) => {
      state.token = null;
      state.refreshError = false;
    },
  },
});

export const { setToken, resetState, setRefreshError } = authSlice.actions;
export const currentToken = (state) => state.auth.token;
export const currentRefreshError = (state) => state.auth.refreshError;
export default authSlice.reducer;
