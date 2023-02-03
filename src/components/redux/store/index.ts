import { configureStore } from "@reduxjs/toolkit";
import { animeReducer } from "../reducer/animeSlice/animeSlice";
import { mangaReducer } from "../reducer/mangaSlice/mangaSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
   reducer:{
      manga: mangaReducer,
      anime: animeReducer,
   },
});