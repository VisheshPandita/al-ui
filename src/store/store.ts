import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import common from "./features/common";

export const store = configureStore({
  reducer: {
    commonState: common,
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
