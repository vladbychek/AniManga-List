import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mangaArr: [],
  fullMangaInfoArr: [],
  mangaCurrPage: 0,
  mangaCurrSort: "",
};

const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    addManga: (state: any, action) => {
      state.mangaArr = action.payload.axiosData.data;
    },
    getFullMangaInfo: (state: any, action) => {
      state.fullMangaInfoArr = action.payload.mangaData;
    },
    getNextMangaPage: (state: any) => {
      state.mangaCurrPage = state.mangaCurrPage + 20;
    },
    getPrevMangaPage: (state: any) => {
      state.mangaCurrPage = state.mangaCurrPage - 20;
    },
    sortMangaByDate: (state: any) => {
      state.mangaCurrSort = "startDate";
    },
    sortMangaByDateBack: (state: any) => {
      state.mangaCurrSort = "-startDate";
    },
    sortMangaByRank: (state: any) => {
      state.mangaCurrSort = "averageRating";
    },
    sortMangaByRankBack: (state: any) => {
      state.mangaCurrSort = "-averageRating";
    },
  },
});

export const {
  addManga,
  getFullMangaInfo,
  getNextMangaPage,
  getPrevMangaPage,
  sortMangaByDate,
  sortMangaByDateBack,
  sortMangaByRank,
  sortMangaByRankBack,
} = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;
