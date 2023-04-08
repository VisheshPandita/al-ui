import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";
import { PageType } from "../../types";

interface CommonState {
  apiLoading?: boolean;
  token?: string;
}

const initialState = {
  apiLoading: false,
} as CommonState;

const commonSlice = createSlice({
  name: "commonState",
  initialState,
  reducers: {
    apiInit: (state) => {
      return {
        ...state,
        apiLoading: true,
      };
    },
    apiFailed: (state) => {
      return {
        ...state,
        apiLoading: false,
      };
    },
    apiSuccess: (state) => {
      return {
        ...state,
        apiLoading: false,
      };
    },
    authenticate: (state, action) => {
      return {
        ...state,
        token: action?.payload?.token,
      };
    },
  },
});

export const selectAPILoading = (state: RootState) =>
  state?.commonState?.apiLoading;
export const selectToken = (state: RootState) => state?.commonState?.token;
export const isAuthenticated = (state: RootState) =>
  state?.commonState?.token ? true : false;

export const { apiInit, apiFailed, apiSuccess, authenticate } =
  commonSlice.actions;
export default commonSlice.reducer;
