import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth.slice";
import { themeReducer } from "./slices/theme/theme.slice";

export const store = configureStore({
  reducer: {
    themeReducer,
    authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>