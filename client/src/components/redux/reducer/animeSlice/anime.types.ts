export interface AnimeType {
  id?: string;
  type?: string;
  attributes?: {
    description: string;
    canonicalTitle: string;
    averageRating: string;
    startDate: string;
    ageRating: string;
    subtype: string;
    status: string;
    posterImage: {
      original: string;
    };
    episodeCount: number;
  };
}

export type AnimeArrType = Array<AnimeType>;

export interface AnimeStateType {
  animeArr: AnimeArrType;
  fullAnimeInfoArr: AnimeType;
  animeCurrSort: string;
  currAnimePage: number;
  mainPageAnimeArr: AnimeArrType;
  favoriteAnimeArr: AnimeArrType;
}

export interface AnimeNewArrType {
  newArr: AnimeArrType;
}

export interface AnimeFullInfoType {
  fullInfo: AnimeType;
}

export interface AnimeMainPageType {
  mainPageArr: AnimeArrType;
}
