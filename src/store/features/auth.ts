import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getConfig: (state: any, { payload }: PayloadAction<any>) => {
      state.user = payload;
    },
  },
});

export const { getConfig } = authSlice.actions;

export default authSlice.reducer;
