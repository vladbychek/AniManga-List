import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeArr: [],
  fullAnimeInfoArr: [],
  animeCurrSort: "",
  currAnimePage: 0
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    addAnime: (state: any, action) => {
      state.animeArr = action.payload.axiosData.data;
    },
    getFullAnimeInfo: (state: any, action) => {
      state.fullAnimeInfoArr = action.payload.animeData;
    },
    sortAnimeByDate: (state: any) => {
      state.animeCurrSort = "startDate";
    },
    sortAnimeByDateBack: (state: any) => {
      state.animeCurrSort = "-startDate";
    },
    sortAnimeByRank: (state: any) => {
      state.animeCurrSort = "averageRating";
    },
    sortAnimeByRankBack: (state: any) => {
      state.animeCurrSort = "-averageRating";
    },
    getNextAnimePage: (state: any) => {
      state.currAnimePage = state.currAnimePage + 20;
    },
    getPrevAnimePage: (state: any) => {
      state.currAnimePage = state.currAnimePage - 20;
    },
  },
});

export const {
  addAnime,
  getFullAnimeInfo,
  sortAnimeByDate,
  sortAnimeByDateBack,
  sortAnimeByRank,
  sortAnimeByRankBack,
  getPrevAnimePage,
  getNextAnimePage
} = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
