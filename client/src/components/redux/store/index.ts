import { configureStore } from "@reduxjs/toolkit";
import { animeReducer } from "../reducer/animeSlice/animeSlice";
import { mangaReducer } from "../reducer/mangaSlice/mangaSlice";
import logger from "redux-logger";
import authReducer from "../reducer/auth/authSlice";

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    manga: mangaReducer,
    anime: animeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...(process.env.NODE_ENV !== "production" ? [logger] : [])
    ),
});
