import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animeArr: [],
  fullAnimeInfoArr: [],
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    addAnime: (state: any, action) => {
      action.payload.axiosData.data.map((item: any) => state.animeArr.push(item));
    },
    getFullAnimeInfo: (state: any, action) => {
      state.fullAnimeInfoArr = action.payload.animeData
      console.log('anime', action.payload.axoisData)
    }
  },
});

export const { addAnime, getFullAnimeInfo } = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
