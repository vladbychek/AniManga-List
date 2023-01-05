import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   mangaArr: [],
}


const mangaSlice = createSlice({
   name: "manga",
   initialState,
   reducers: {
      addManga: (state:any, action) => {
         state.mangaArr = action.payload.mangaData
         // console.log('state', state.currentPage )
         // console.log('action', action)
      },
   }
})

export const {addManga} = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;