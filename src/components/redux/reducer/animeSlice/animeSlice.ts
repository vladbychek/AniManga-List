import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimeStateType, AnimeNewArrType, AnimeType, AnimeFullInfoType, AnimeMainPageType } from "./anime.types";



const initialState: AnimeStateType = {
  animeArr: [],
  fullAnimeInfoArr: {},
  animeCurrSort: "",
  currAnimePage: 0,
  mainPageAnimeArr: [],
  favoriteAnimeArr: [],
};

const loda = require("lodash");

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    addAnime: (state, action: PayloadAction<AnimeNewArrType>) => {
      state.animeArr = action.payload.newArr.map((item: AnimeType) =>
        loda.pick(item, [
          "id",
          "type",
          "attributes.description",
          "attributes.canonicalTitle",
          "attributes.averageRating",
          "attributes.startDate",
          "attributes.ageRating",
          "attributes.subtype",
          "attributes.status",
          "attributes.posterImage.original",
          "attributes.episodeCount",
        ])
      );
    },
    getFullAnimeInfo: (state, action: PayloadAction<AnimeFullInfoType>) => {
      state.fullAnimeInfoArr =
      loda.pick(action.payload.fullInfo, [
        "id",
        "type",
        "attributes.description",
        "attributes.canonicalTitle",
        "attributes.averageRating",
        "attributes.startDate",
        "attributes.ageRating",
        "attributes.subtype",
        "attributes.status",
        "attributes.posterImage.original",
        "attributes.episodeCount",
      ]
    );
    },
    sortAnimeByDate: (state) => {
      state.animeCurrSort = "startDate";
    },
    sortAnimeByDateBack: (state) => {
      state.animeCurrSort = "-startDate";
    },
    sortAnimeByRank: (state) => {
      state.animeCurrSort = "averageRating";
    },
    sortAnimeByRankBack: (state) => {
      state.animeCurrSort = "-averageRating";
    },
    getNextAnimePage: (state) => {
      state.currAnimePage = state.currAnimePage + 20;
    },
    getPrevAnimePage: (state) => {
      state.currAnimePage = state.currAnimePage - 20;
    },
    addMainPageAnime: (state, action: PayloadAction<AnimeMainPageType>) => {
      state.mainPageAnimeArr = action.payload.mainPageArr.map((item: AnimeType) =>
      loda.pick(item, [
        "id",
        "type",
        "attributes.description",
        "attributes.canonicalTitle",
        "attributes.averageRating",
        "attributes.startDate",
        "attributes.ageRating",
        "attributes.subtype",
        "attributes.status",
        "attributes.posterImage.original",
        "attributes.episodeCount",
      ])
    );
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
  getNextAnimePage,
  addMainPageAnime,
} = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
