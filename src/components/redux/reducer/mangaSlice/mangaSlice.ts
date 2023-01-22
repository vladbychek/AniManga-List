import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mangaArr: [],
  fullMangaInfoArr: [],
  mangaCurrSort: "",
  currMangaPage: 0
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
    getNextMangaPage: (state: any) => {
      state.currMangaPage = state.currMangaPage + 20;
    },
    getPrevMangaPage: (state: any) => {
      state.currMangaPage = state.currMangaPage - 20;
    },
  },
});

export const {
  addManga,
  getFullMangaInfo,
  sortMangaByDate,
  sortMangaByDateBack,
  sortMangaByRank,
  sortMangaByRankBack,
  getNextMangaPage,
  getPrevMangaPage
} = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;
