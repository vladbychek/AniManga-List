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
      console.log('1', state.mangaArr)
    },
    getFullMangaInfo: (state: any, action) => {
      state.fullMangaInfoArr = action.payload.mangaData
    },
    getSortedMangaList: (state: any, action) => {
      state.mangaArr = action.payload.axiosData.data;
      console.log('2', state.mangaArr)
    }
  },
});

export const { addManga, getFullMangaInfo, getSortedMangaList } = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;
