import { configureStore } from "@reduxjs/toolkit";
import { mangaReducer } from "../reducer/mangaSlice/mangaSlice";




export const store = configureStore({
   reducer:{
      manga: mangaReducer,
   },
});