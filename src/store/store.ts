import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import common from "./features/common";
import auth from "./features/auth";

export const store = configureStore({
  reducer: {
    commonState: common,
    auth: auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
