import { configureStore } from "@reduxjs/toolkit";
import { animeReducer } from "../reducer/animeSlice/animeSlice";
import { mangaReducer } from "../reducer/mangaSlice/mangaSlice";




export const store = configureStore({
   reducer:{
      manga: mangaReducer,
      anime: animeReducer,
   },
});