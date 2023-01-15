import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeArr: [],
  fullAnimeInfoArr: [],
  animeCurrPage: 0,
  animeCurrSort: "",
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
    getNextAnimePage: (state: any) => {
      state.animeCurrPage = state.animeCurrPage + 20;
    },
    getPrevAnimePage: (state: any) => {
      state.animeCurrPage = state.animeCurrPage - 20;
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
  },
});

export const {
  addAnime,
  getFullAnimeInfo,
  getNextAnimePage,
  getPrevAnimePage,
  sortAnimeByDate,
  sortAnimeByDateBack,
  sortAnimeByRank,
  sortAnimeByRankBack,
} = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
