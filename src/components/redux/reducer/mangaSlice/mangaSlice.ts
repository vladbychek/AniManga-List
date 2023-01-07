import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mangaArr: [],
  fullMangaInfoArr: [],
};

const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    addManga: (state: any, action) => {
      action.payload.axiosData.data.map((item: any) => state.mangaArr.push(item));
    },
    getFullMangaInfo: (state: any, action) => {
      state.fullMangaInfoArr = action.payload.mangaData
      console.log("manga",state.fullMangaInfoArr)
    }
  },
});

export const { addManga, getFullMangaInfo } = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;
