import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MangaFullInfoType, MangaMainPageType, MangaNewArrType, MangaStateType, MangaType } from "./manga.types";



const initialState: MangaStateType = {
  mangaArr: [],
  fullMangaInfoArr: {},
  mangaCurrSort: "",
  currMangaPage: 0,
  mainPageMangaArr: [],
  favoriteMangaArr: [],
};


const loda = require("lodash");

const mangaSlice = createSlice({
  name: "manga",
  initialState,
  reducers: {
    addManga: (state, action: PayloadAction<MangaNewArrType> ) => {
      state.mangaArr = action.payload.newArr.map((item: MangaType) =>
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
        "attributes.chapterCount",
        "attributes.volumeCount",
        "attributes.serialization",
      ])
    );
    },
    getFullMangaInfo: (state, action: PayloadAction<MangaFullInfoType>) => {
      state.fullMangaInfoArr =
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
        "attributes.chapterCount",
        "attributes.volumeCount",
        "attributes.serialization",
      ]
    );
    },
    sortMangaByDate: (state) => {
      state.mangaCurrSort = "startDate";
    },
    sortMangaByDateBack: (state) => {
      state.mangaCurrSort = "-startDate";
    },
    sortMangaByRank: (state) => {
      state.mangaCurrSort = "averageRating";
    },
    sortMangaByRankBack: (state) => {
      state.mangaCurrSort = "-averageRating";
    },
    getNextMangaPage: (state) => {
      state.currMangaPage = state.currMangaPage + 20;
    },
    getPrevMangaPage: (state) => {
      state.currMangaPage = state.currMangaPage - 20;
    },
    addMainPageManga: (state, action: PayloadAction<MangaMainPageType>) => {
      state.mainPageMangaArr = action.payload.mainPageArr.map((item: MangaType) =>
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
        "attributes.chapterCount",
        "attributes.volumeCount",
        "attributes.serialization",
      ])
    );
    },
    addMangaToFavorite: (state: any) => {
      state.favoriteMangaArr.push(state.mangaArr.filter((id: any) => id == 1));
    },
    deleteMangaFromFavorite:(state:any) => {
      state.favoriteMangaArr.filter()
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
  getPrevMangaPage,
  addMainPageManga,
  addMangaToFavorite,
  deleteMangaFromFavorite,
} = mangaSlice.actions;
export const mangaReducer = mangaSlice.reducer;
